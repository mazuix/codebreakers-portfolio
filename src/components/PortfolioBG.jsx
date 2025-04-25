import { useState, useEffect, useRef } from 'react';

export default function ScrollableCyberpunkBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Theme colors
  const neonPurple = '#6A3BDF';
  const darkVioletBg = '#0F0821';

  const sampleContent = Array(12).fill().map((_, i) => (
    <div key={i} className="h-64 w-full flex items-center justify-center"> 
    </div>
  ));

  useEffect(() => {
    // Animation
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      const scrollHeight = Math.max(container.scrollHeight, window.innerHeight);
      setContentHeight(scrollHeight);
      
      canvas.width = window.innerWidth;
      canvas.height = scrollHeight;
      
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = `${scrollHeight}px`;
    };
    
    setCanvasSize();
    
    window.addEventListener('resize', setCanvasSize);
    
    const hexSize = 40;
    let time = 0;
    let animationFrameId;
    
    // Hexagon drawing functions and animation loop
    const drawHexagon = (x, y, size, color, lineWidth) => {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        
        if (i === 0) {
          context.moveTo(hx, hy);
        } else {
          context.lineTo(hx, hy);
        }
      }
      
      context.closePath();
      context.stroke();
    };
    
    const animate = () => {
      if (container.scrollHeight !== canvas.height) {
        setCanvasSize();
      }
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = darkVioletBg;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.ceil(canvas.width / (hexSize * 1.5)) + 2;
      const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 2;
      
      for (let i = -2; i < cols; i++) {
        for (let j = -2; j < rows; j++) {
          const x = i * hexSize * 1.5;
          const y = j * hexSize * Math.sqrt(3) + (i % 2 === 0 ? 0 : hexSize * Math.sqrt(3) / 2);
          
          const noiseValue = Math.sin(time * 0.02 + i * 0.2 + j * 0.3) * 0.5 + 0.5;
          
          let color;
          let lineWidth;
          
          if (noiseValue > 0.8) {
            color = 'rgba(106, 59, 223, 0.6)'; // Reduced from full opacity
            lineWidth = 2;
          } else if (noiseValue > 0.6) {
            color = 'rgba(106, 59, 223, 0.3)'; // Reduced from 0.5
            lineWidth = 1.5;
          } else if (noiseValue > 0.4) {
            color = 'rgba(106, 59, 223, 0.2)'; // Reduced from 0.3
            lineWidth = 1;
          } else {
            color = 'rgba(106, 59, 223, 0.05)'; // Reduced from 0.1
            lineWidth = 0.5;
          }
          
          drawHexagon(x, y, hexSize, color, lineWidth);
        }
      }
      
      time++;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full overflow-y-auto overflow-x-hidden relative"
      style={{ backgroundColor: darkVioletBg }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full"
        style={{ height: `${contentHeight}px`, zIndex: 1 }}
      />
      
      <div className="relative z-10">
        {sampleContent}
        
        <div className="h-64 w-full flex items-center justify-center">
          
        </div>
        
        {/* Added additional content blocks for more length */}
        <div className="h-64 w-full flex items-center justify-center"></div>
        <div className="h-64 w-full flex items-center justify-center"></div>
        <div className="h-64 w-full flex items-center justify-center"></div>
        <div className="h-64 w-full flex items-center justify-center"></div>
        <div className="h-64 w-full flex items-center justify-center"></div>
      </div>
    </div>
  );
}