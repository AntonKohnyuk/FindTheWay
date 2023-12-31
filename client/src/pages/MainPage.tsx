import Field from "../components/Field";
import Output from "../components/Output";
import Settings from "../components/Settings";
import { PointsName, PointsNumber } from "../entities/enums/points";
import { lee } from "../entities/helpers/algorithm";
import { Way } from "../entities/types";
import "./styles/mainPage.scss";
import { useCallback, useState } from "react";

const MainPage = () => {
  const [matrix, setMatrix] = useState(
    Array.from(Array(100), () => new Array(100).fill(-2))
  );
  const [checkedPoint, setCheckedPoint] = useState(PointsName.WALL);
  const [isReset, setIsReset] = useState(false);
  const [output, setOutput] = useState(null as string | null);

  const [startPoint, setStartPoint] = useState({ x: -1, y: -1 });
  const [finishPoint, setfinishPoint] = useState({ x: -1, y: -1 });

  const [way, setWay] = useState(null as Way | null);

  const onStart = useCallback((): void => {
    const grid: Array<Array<number>> = [];
    matrix.forEach((arr) => grid.push([...arr]));
    let time = Date.now();
    let points = lee(
      startPoint.x / 10,
      startPoint.y / 10,
      finishPoint.x / 10,
      finishPoint.y / 10,
      grid
    );
    time = Date.now() - time;

    let resultOutput = `The calculations were completed in ${time} ms.`;

    if (points) {
      resultOutput += ` The path exists!`;
    } else resultOutput += ` The path does not exist!`;

    setOutput(resultOutput);
    setWay(points);
  }, [matrix]);

  const resetMatrix = (): void => {
    setMatrix(Array.from(Array(100), () => new Array(100).fill(-2)));
    setIsReset(!isReset);
    setStartPoint({ x: -1, y: -1 });
    setfinishPoint({ x: -1, y: -1 });
    setOutput(null);
  };

  const updateMatrix = (x: number, y: number, pointN: number): void => {
    if (checkedPoint === PointsName.START) {
      if (pointN === PointsNumber.START) setStartPoint({ x, y });
      else setStartPoint({ x: -1, y: -1 });
    }

    if (checkedPoint === PointsName.FINISH) {
      if (pointN === PointsNumber.OPEN) setfinishPoint({ x, y });
      else setfinishPoint({ x: -1, y: -1 });
    }
    if (checkedPoint === PointsName.WALL) {
      if (x === startPoint.x && y === startPoint.y)
        setStartPoint({ x: -1, y: -1 });
      else if (x === finishPoint.x && y === finishPoint.y)
        setfinishPoint({ x: -1, y: -1 });
    }

    matrix[y / 10][x / 10] = pointN;
    setMatrix([...matrix]);
  };

  const changePoint = (pointName: PointsName): void => {
    setCheckedPoint(pointName);
  };

  return (
    <section className="main">
      <Settings
        changePoint={changePoint}
        resetMatrix={resetMatrix}
        onStart={onStart}
      ></Settings>
      <Field
        startPoint={startPoint}
        finishPoint={finishPoint}
        matrix={matrix}
        update={updateMatrix}
        checkedPoint={checkedPoint}
        isReset={isReset}
        way={way}
      ></Field>
      <Output text={output}></Output>
    </section>
  );
};

export default MainPage;
