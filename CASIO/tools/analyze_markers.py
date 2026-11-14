"""
Marker Center Calibration Tool
Analyzes watch dial and hand images containing alignment marker circles (e.g. green RGB(34, 177, 76))
and calculates exact center pivot coordinates in pixels and percentages.
"""

import os
import sys
import json
from PIL import Image

DEFAULT_TARGET_RGB = (34, 177, 76)
DEFAULT_TOLERANCE = 35

def get_target_color(map_dir):
    color_file = os.path.join(map_dir, "center color.png")
    if os.path.exists(color_file):
        try:
            im = Image.open(color_file).convert("RGB")
            # Sample center pixel
            target = im.getpixel((im.width // 2, im.height // 2))
            print(f"Loaded target marker color from center color.png: RGB{target}")
            return target
        except Exception as e:
            print(f"Could not read center color.png ({e}), using default RGB{DEFAULT_TARGET_RGB}")
    return DEFAULT_TARGET_RGB

def find_marker_centers(img_path, target_rgb=DEFAULT_TARGET_RGB, tolerance=DEFAULT_TOLERANCE):
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return []

    im = Image.open(img_path).convert('RGB')
    w, h = im.size
    pixels = im.load()
    
    # Locate all pixels matching the marker color within tolerance
    matching_pixels = []
    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y]
            if (abs(r - target_rgb[0]) <= tolerance and
                abs(g - target_rgb[1]) <= tolerance and
                abs(b - target_rgb[2]) <= tolerance):
                matching_pixels.append((x, y))
                
    pts_set = set(matching_pixels)
    visited = set()
    clusters = []
    
    # Connected component clustering (flood fill / BFS)
    for pt in matching_pixels:
        if pt in visited:
            continue
        cluster = []
        queue = [pt]
        visited.add(pt)
        while queue:
            curr = queue.pop()
            cluster.append(curr)
            cx, cy = curr
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1), (-1,-1), (1,1), (-1,1), (1,-1)]:
                neighbor = (cx + dx, cy + dy)
                if neighbor in pts_set and neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        if len(cluster) > 10:  # filter noise
            clusters.append(cluster)
            
    print(f"\n=== {os.path.basename(img_path)} ({w}x{h}) ===")
    print(f"Total marker pixels: {len(matching_pixels)} | Clusters found: {len(clusters)}")
    
    results = []
    for i, c in enumerate(clusters):
        xs = [p[0] for p in c]
        ys = [p[1] for p in c]
        avg_x = sum(xs) / len(xs)
        avg_y = sum(ys) / len(ys)
        pct_x = (avg_x / w) * 100
        pct_y = (avg_y / h) * 100
        min_x, max_x = min(xs), max(xs)
        min_y, max_y = min(ys), max(ys)
        results.append({
            'index': i + 1,
            'count': len(c),
            'center_x': round(avg_x, 2),
            'center_y': round(avg_y, 2),
            'pct_x': round(pct_x, 2),
            'pct_y': round(pct_y, 2),
            'box': [min_x, min_y, max_x, max_y],
            'box_w': max_x - min_x + 1,
            'box_h': max_y - min_y + 1,
            'box_w_pct': round((max_x - min_x + 1) / w * 100, 2),
            'box_h_pct': round((max_y - min_y + 1) / h * 100, 2)
        })
        print(f"  Cluster {i+1}: Center=({avg_x:.2f}, {avg_y:.2f}) px -> ({pct_x:.2f}%, {pct_y:.2f}%) [size={len(c)}, X=[{min_x}, {max_x}], Y=[{min_y}, {max_y}]]")
        
    return {
        'filename': os.path.basename(img_path),
        'width': w,
        'height': h,
        'clusters': results
    }

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    model_name = sys.argv[1] if len(sys.argv) > 1 else "CASIO-GAC-2500-3A"
    map_dir = os.path.join(base_dir, "Watch", model_name, "map")
    
    if not os.path.isdir(map_dir):
        print(f"Map directory not found: {map_dir}")
        return

    print(f"Analyzing markers for model: '{model_name}' in:\n{map_dir}")
    target_rgb = get_target_color(map_dir)
    
    all_files = sorted(os.listdir(map_dir))
    analyzed = []
    for fname in all_files:
        if fname.lower() == "center color.png":
            continue
        if fname.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            fpath = os.path.join(map_dir, fname)
            res = find_marker_centers(fpath, target_rgb=target_rgb)
            if res:
                analyzed.append(res)
                
    print("\n" + "="*50)
    print("CALIBRATION SUMMARY (JSON Ready):")
    print("="*50)
    print(json.dumps(analyzed, indent=2))

if __name__ == "__main__":
    main()
