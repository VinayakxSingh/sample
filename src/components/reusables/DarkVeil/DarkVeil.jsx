import { useRef, useEffect } from "react";
import "./DarkVeil.css";

export default function DarkVeil() {
  const ref = useRef(null);
  
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    
    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };
    
    window.addEventListener("resize", resize);
    resize();
    
    let animationId;
    let time = 0;
    
    const animate = () => {
      time += 0.005;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a gradient background that matches the website's design
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      // Use colors that match the website's design (light grays and whites)
      gradient.addColorStop(0, 'rgba(248, 249, 250, 0.95)'); // #f8f9fa with opacity
      gradient.addColorStop(0.3, 'rgba(240, 240, 240, 0.8)');
      gradient.addColorStop(0.7, 'rgba(230, 230, 230, 0.6)');
      gradient.addColorStop(1, 'rgba(220, 220, 220, 0.4)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle animated geometric elements that match the website's aesthetic
      const numElements = 8;
      for (let i = 0; i < numElements; i++) {
        const angle = (time + i * Math.PI * 2 / numElements) * 0.5;
        const radius = 150 + Math.sin(time * 0.3 + i) * 50;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        const size = 3 + Math.sin(time * 2 + i) * 2;
        
        // Create subtle dots with website's color scheme
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
        ctx.fill();
        
        // Add connecting lines for a more sophisticated look
        if (i > 0) {
          const prevAngle = (time + (i - 1) * Math.PI * 2 / numElements) * 0.5;
          const prevRadius = 150 + Math.sin(time * 0.3 + (i - 1)) * 50;
          const prevX = canvas.width / 2 + Math.cos(prevAngle) * prevRadius;
          const prevY = canvas.height / 2 + Math.sin(prevAngle) * prevRadius;
          
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(0, 0, 0, 0.05)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Add some floating particles for subtle movement
      for (let i = 0; i < 12; i++) {
        const particleX = (canvas.width / 2) + Math.sin(time * 0.2 + i * 0.5) * 200;
        const particleY = (canvas.height / 2) + Math.cos(time * 0.15 + i * 0.3) * 200;
        const particleSize = 1 + Math.sin(time * 3 + i) * 0.5;
        
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, 0.08)`;
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  
  return (
    <canvas
      ref={ref}
      className="darkveil-canvas"
    />
  );
}
