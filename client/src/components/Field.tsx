import { useEffect, useRef } from "react";
import "./styles/field.scss";
const Field = () => {
  const grid: any = useRef(null);
  const way = useRef(null);

  useEffect(() => {
    drawGrid();
  }, []);

  function drawGrid(width: number = 100, height: number = 100): void {
    if (grid.current) {
      const context = grid.current.getContext("2d");
      context.lineWidth = 1;
      let shift: number = 0;
      for (let i = 0; i <= height; i++) {
        context.beginPath();
        context.moveTo(shift, 0);
        context.lineTo(shift, grid.current.height);
        context.stroke();

        shift += 10;
      }
      shift = 0;
      for (let i = 0; i <= width; i++) {
        context.beginPath();
        context.moveTo(0, shift);
        context.lineTo(grid.current.width, shift);
        context.stroke();

        shift += 10;
      }
    }
  }

  return (
    <div className="container">
      <canvas ref={grid} className="grid" width={1000} height={1000}></canvas>
      <canvas ref={way} className="way" width={1000} height={1000}></canvas>
    </div>
  );
};
export default Field;
