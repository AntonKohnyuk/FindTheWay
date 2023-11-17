import { Way } from "../types";

export const lee = (
  ax: number,
  ay: number,
  bx: number,
  by: number,
  grid: Array<Array<number>>,
  width: number = 100,
  height: number = 100
): Way | null => {
  const W = width;
  const H = height;
  const BLANK = -2;
  const px: number[] = [];
  const py: number[] = [];

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let d: number, x: number, y: number, k: number, len: number;
  let stop: boolean;

  if (ax < 0 || bx < 0) return null;

  d = 0;
  grid[ay][ax] = 0;
  do {
    stop = true;
    for (let y = 0; y < H; ++y)
      for (let x = 0; x < W; ++x)
        if (grid[y][x] === d) {
          for (k = 0; k < 4; ++k) {
            let iy = y + dy[k],
              ix = x + dx[k];
            if (
              iy >= 0 &&
              iy < H &&
              ix >= 0 &&
              ix < W &&
              grid[iy][ix] === BLANK
            ) {
              stop = false;
              grid[iy][ix] = d + 1;
            }
          }
        }
    d++;
  } while (!stop && grid[by][bx] === BLANK);

  if (grid[by][bx] === BLANK) return null;

  len = grid[by][bx];
  x = bx;
  y = by;
  d = len;
  while (d > 0) {
    px[d] = x;
    py[d] = y;
    d--;
    for (k = 0; k < 4; ++k) {
      let iy = y + dy[k],
        ix = x + dx[k];
      if (iy >= 0 && iy < H && ix >= 0 && ix < W && grid[iy][ix] === d) {
        x = x + dx[k];
        y = y + dy[k];
        break;
      }
    }
  }
  px[0] = ax;
  py[0] = ay;
  return { px, py };
};
