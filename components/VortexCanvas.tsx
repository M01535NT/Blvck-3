import React, { useRef, useEffect } from 'react';

const VortexCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Particle Logic
    const particleCount = 60;
    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      alpha: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update(mouse: { x: number; y: number }) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 250;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle + Math.PI / 2) * force * 0.02;
          this.vy += Math.sin(angle + Math.PI / 2) * force * 0.02;
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Gold color in rgba (approx #bf953f)
        context.fillStyle = `rgba(191, 149, 63, ${this.alpha})`;
        context.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const mouse = { x: width / 2, y: height / 2 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update(mouse);
        p.draw(ctx);
      });

      // Constellations
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            // Gold line color
            ctx.strokeStyle = `rgba(191, 149, 63, ${0.15 - dist / 800})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default VortexCanvas;