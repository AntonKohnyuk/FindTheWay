import { useEffect, useRef } from "react";
import "./styles/field.scss";
import { PointsName, PointsNumber } from "../entities/enums/points";
import { Colors } from "../entities/enums/colors";
import { Point } from "../entities/types";

interface FieldProps {
  matrix: Array<Array<number>>;
  checkedPoint: any;
  isReset: boolean;
  startPoint: Point;
  finishPoint: Point;
  update(x: number, y: number, p: number): void;
}

const Field = ({
  matrix,
  isReset,
  checkedPoint,
  startPoint,
  finishPoint,
  update,
}: FieldProps) => {
  const grid: any = useRef(null);
  const way: any = useRef(null);

  useEffect(() => {
    drawGrid(matrix.length, matrix[0].length);
  }, []);

  useEffect(() => {
    const context = way.current.getContext("2d");
    context.clearRect(0, 0, 1000, 1000);
  }, [isReset]);

  useEffect(() => {
    way.current.addEventListener("click", fillPoint);
    return () => {
      way.current.removeEventListener("click", fillPoint);
    };
  }, [checkedPoint, startPoint, finishPoint]);

  const drawGrid = (width: number = 100, height: number = 100): void => {
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
  };

  const fillPoint = (event: any) => {
    const context = way.current.getContext("2d");
    const x = Math.floor(event.layerX / 10) * 10;
    const y = Math.floor(event.layerY / 10) * 10;
    let pointN = -1;
    if (checkedPoint === PointsName.START) {
      context.fillStyle = Colors.START;
      pointN = PointsNumber.START;
    } else if (checkedPoint === PointsName.FINISH) {
      context.fillStyle = Colors.FINISH;
      pointN = PointsNumber.OPEN;
    } else context.fillStyle = Colors.WALL;

    if (pointN === PointsNumber.START && startPoint.x >= 0) {
      context.clearRect(startPoint.x, startPoint.y, 10, 10);
      update(startPoint.x, startPoint.y, PointsNumber.OPEN);
      if (x === startPoint.x && y === startPoint.y) return;
    }

    if (pointN === PointsNumber.OPEN && finishPoint.x >= 0) {
      context.clearRect(finishPoint.x, finishPoint.y, 10, 10);
      update(finishPoint.x, finishPoint.y, PointsNumber.OPEN);
      if (x === finishPoint.x && y === finishPoint.y) return;
    }

    if (
      matrix[y / 10][x / 10] === PointsNumber.WALL &&
      pointN === PointsNumber.WALL
    ) {
      context.clearRect(x, y, 10, 10);
      update(x, y, PointsNumber.OPEN);
      return;
    }
    context.fillRect(x, y, 10, 10);

    update(x, y, pointN);
  };

  return (
    <div className="container">
      <canvas ref={grid} className="grid" width={1000} height={1000}></canvas>
      <canvas ref={way} className="way" width={1000} height={1000}></canvas>
    </div>
  );
};
export default Field;
