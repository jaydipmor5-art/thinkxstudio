"use client";

import React, { useEffect, useState } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
  style?: React.CSSProperties;
}

export default function TransparentImage({ src, alt, className, threshold = 55, style }: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Sample background colors from top corners
      // Top-Left corner pixel
      const tl = { r: data[0], g: data[1], b: data[2] };
      // Top-Right corner pixel
      const trIdx = (width - 1) * 4;
      const tr = { r: data[trIdx], g: data[trIdx + 1], b: data[trIdx + 2] };

      const isClose = (r: number, g: number, b: number, target: { r: number; g: number; b: number }) => {
        const d = Math.sqrt((r - target.r) ** 2 + (g - target.g) ** 2 + (b - target.b) ** 2);
        return d < threshold;
      };

      const setTransparent = (x: number, y: number) => {
        const idx = (y * width + x) * 4;
        data[idx + 3] = 0; // Set Alpha = 0 (Transparent)
      };

      const isBg = (x: number, y: number) => {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];
        if (a === 0) return true;
        return isClose(r, g, b, tl) || isClose(r, g, b, tr);
      };

      // 1. Scan Top-Down (erases top background until we hit head/shoulders)
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          if (isBg(x, y)) {
            setTransparent(x, y);
          } else {
            break; // Hit outline boundary (hair/skin/suit), stop going down for this column
          }
        }
      }

      // 2. Scan Left-to-Right (erases left-side background)
      for (let y = 0; y < height * 0.8; y++) {
        for (let x = 0; x < width; x++) {
          if (isBg(x, y)) {
            setTransparent(x, y);
          } else {
            break; // Hit outline boundary, stop going right for this row
          }
        }
      }

      // 3. Scan Right-to-Left (erases right-side background)
      for (let y = 0; y < height * 0.8; y++) {
        for (let x = width - 1; x >= 0; x--) {
          if (isBg(x, y)) {
            setTransparent(x, y);
          } else {
            break; // Hit outline boundary, stop going left for this row
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL());
    };
  }, [src, threshold]);

  return <img src={processedSrc} alt={alt} className={className} style={style} />;
}
