import { useRef, useEffect, useState } from "react";

/**
 * Represents a drawing canvas that creates trails as the user moves the mouse.
 *
 * @component
 */
const Draw = () => {
  // Create a reference to the canvas element
  const canvasRef = useRef(null);
  // Store the last position of the mouse
  const lastPositionRef = useRef(null);
  // State to track if the mouse is pressed
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    // Get the canvas and its context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Mouse down event to start drawing
    const startDrawing = (e) => {
      setIsDrawing(true);
      lastPositionRef.current = { x: e.pageX - canvas.offsetLeft, y: e.pageY - canvas.offsetTop };
    };

    // Mouse up event to stop drawing
    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.beginPath(); // Reset the path for new drawing
    };

    // Mouse move event to draw on the canvas
    const draw = (e) => {
      if (!isDrawing) return; // Only draw if isDrawing is true

      ctx.lineWidth = 0.2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#fff";
      ctx.globalAlpha = 1;

      const { pageX, pageY } = e;

      if (lastPositionRef.current) {
        const { x, y } = lastPositionRef.current;
        ctx.moveTo(x, y);
        ctx.lineTo(pageX - canvas.offsetLeft, pageY - canvas.offsetTop);
        ctx.stroke();
      }

      // Update the last position
      lastPositionRef.current = { x: pageX - canvas.offsetLeft, y: pageY - canvas.offsetTop };
    };

    // Add event listeners for mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    // Cleanup function to remove event listeners
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [isDrawing]); // Adding isDrawing as a dependency

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 100, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight - 100}
    />
  );
};

export default Draw;