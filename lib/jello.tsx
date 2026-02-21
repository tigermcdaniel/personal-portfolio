"use client"

import React, { useEffect, useRef } from "react";

type Point = { x: number; y: number; ox: number; oy: number; vx: number; vy: number };

export default function JelloHead(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = 400;
    const cssH = 400;

    canvas.width = cssW * DPR;
    canvas.height = cssH * DPR;
    ctx.scale(DPR, DPR);

    let mouse = { x: 9999, y: 9999 };
    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener("mouseleave", () => {
      mouse.x = 9999;
      mouse.y = 9999;
    });

    const img = new Image();
    img.src = "/images/file-dot-art.png";

    img.onload = () => {
      const off = document.createElement("canvas");
      const octx = off.getContext("2d");
      if (!octx) return;

      const pad = 20;
      const scale = Math.min(
        (cssW - pad * 2) / img.width,
        (cssH - pad * 2) / img.height
      );

      const w = Math.floor(img.width * scale);
      const h = Math.floor(img.height * scale);

      const iw = img.width;
      const ih = img.height;
      off.width = iw;
      off.height = ih;
      octx.drawImage(img, 0, 0, iw, ih);

      const imageData = octx.getImageData(0, 0, iw, ih);
      const data = imageData.data;
      const minBrightness = 80;
      const peakRadius = 2;
      const centroidRadius = 4;
      const minDist = 2.5;

      const idx = (x: number, y: number) => (y * iw + x) * 4;
      const luminanceAt = (x: number, y: number) => {
        if (x < 0 || x >= iw || y < 0 || y >= ih) return 0;
        const i = idx(x, y);
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 20) return 0;
        return (r * 0.299 + g * 0.587 + b * 0.114);
      };

      const candidates: { x: number; y: number; lum: number }[] = [];
      for (let y = peakRadius; y < ih - peakRadius; y++) {
        for (let x = peakRadius; x < iw - peakRadius; x++) {
          const lum = luminanceAt(x, y);
          if (lum < minBrightness) continue;
          let isMax = true;
          for (let dy = -peakRadius; dy <= peakRadius && isMax; dy++) {
            for (let dx = -peakRadius; dx <= peakRadius && isMax; dx++) {
              if (luminanceAt(x + dx, y + dy) > lum) isMax = false;
            }
          }
          if (isMax) candidates.push({ x, y, lum });
        }
      }

      function weightedCentroid(cx: number, cy: number): { x: number; y: number } {
        let sumX = 0, sumY = 0, sumL = 0;
        for (let dy = -centroidRadius; dy <= centroidRadius; dy++) {
          for (let dx = -centroidRadius; dx <= centroidRadius; dx++) {
            const lum = luminanceAt(cx + dx, cy + dy);
            if (lum > 0) {
              sumX += (cx + dx) * lum;
              sumY += (cy + dy) * lum;
              sumL += lum;
            }
          }
        }
        if (sumL <= 0) return { x: cx, y: cy };
        return { x: sumX / sumL, y: sumY / sumL };
      }

      candidates.sort((a, b) => b.lum - a.lum);
      const pts: Point[] = [];
      const offsetX = (cssW - w) / 2;
      const offsetY = (cssH - h) / 2;
      for (const c of candidates) {
        const { x: cx, y: cy } = weightedCentroid(c.x, c.y);
        const px = offsetX + (cx / iw) * w;
        const py = offsetY + (cy / ih) * h;
        const tooClose = pts.some((p) => Math.hypot(px - p.ox, py - p.oy) < minDist);
        if (tooClose) continue;
        const dropOffset = 90 + Math.random() * 50;
        pts.push({ x: px, y: py - dropOffset, ox: px, oy: py, vx: 0, vy: 0 });
      }

      if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
        console.log("JelloHead: image", img.width, "x", img.height, "→", w, "x", h, "→", pts.length, "dots");
      }

      let last = performance.now();
      const loadTime = performance.now();
      const introDuration = 2.4;
      const introGravityStrength = 280;

      function animate(now: number) {
        if (!ctx) return;
        const dt = Math.min((now - last) / 1000, 1 / 30);
        last = now;
        const elapsed = (now - loadTime) / 1000;

        ctx.clearRect(0, 0, cssW, cssH);

        const radius = 65;
        const push = 1400;
        const spring = 30;
        const damping = 10;
        const introGravity = elapsed < introDuration ? introGravityStrength : 0;

        ctx.beginPath();
        for (const p of pts) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);

          let fx = 0,
            fy = 0;

          if (elapsed < introDuration) {
            fy += introGravity * dt;
          }

          if (d < radius) {
            const t = 1 - d / radius;
            const f = push * t * t;
            fx += (dx / (d + 0.001)) * f;
            fy += (dy / (d + 0.001)) * f;
          }

          fx += (p.ox - p.x) * spring;
          fy += (p.oy - p.y) * spring;

          fx += -p.vx * damping;
          fy += -p.vy * damping;

          p.vx += fx * dt;
          p.vy += fy * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          ctx.moveTo(p.x + 1.5, p.y);
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        }
        ctx.fillStyle = "white";
        ctx.fill();

        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    };

    img.onerror = () => {
      console.error("JelloHead: failed to load /images/profile-dot-art.png");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="simulation-container"
      style={{ width: 400, height: 400, cursor: "crosshair" }}
    />
  );
}
