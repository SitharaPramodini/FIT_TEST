import React, { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const letterArray = letters.split("");

    // Setting up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Setting up the drops
    const drops = Array.from({ length: columns }).fill(1);

    // Draw function
    const draw = () => {
      // Faint black background
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw letters
      ctx.fillStyle = "#0f0"; // Green color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letterArray[Math.floor(Math.random() * letterArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move drop down
        drops[i]++;

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.3) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 33);

    // Clean up on unmount
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Matrix;
