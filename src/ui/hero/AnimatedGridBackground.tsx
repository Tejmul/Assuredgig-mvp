'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 230, 255, 0.1)';
      ctx.lineWidth = 0.5;

      const gridSize = 50;
      const time = Date.now() * 0.001;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const offsetX = Math.sin(time + x * 0.01) * 5;
          const offsetY = Math.cos(time + y * 0.01) * 5;

          ctx.beginPath();
          ctx.moveTo(x + offsetX, y);
          ctx.lineTo(x + offsetX, y + gridSize);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(x, y + offsetY);
          ctx.lineTo(x + gridSize, y + offsetY);
          ctx.stroke();
        }
      }

      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
}; 