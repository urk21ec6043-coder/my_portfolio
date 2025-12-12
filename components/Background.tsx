import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{ x: number; y: number; speed: number; size: number; opacity: number }> = [];
    let animationFrameId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((w * h) / 10000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: Math.random() * 2 + 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw Grid Floor (Perspective effect)
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for(let x = 0; x <= w; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
      }
      
      // Horizontal lines
      for(let y = 0; y <= h; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
      }

      // Draw Digital Particles (Squares)
      particles.forEach((p) => {
        p.y -= p.speed; // Move up
        if (p.y < 0) {
            p.y = h;
            p.x = Math.random() * w;
        }

        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        // Randomly make some pink
        if (Math.random() > 0.95) {
             ctx.fillStyle = `rgba(255, 0, 60, ${p.opacity})`;
        }
        
        ctx.fillRect(p.x, p.y, p.size, p.size); // Square particles
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none" />;
};

export default Background;