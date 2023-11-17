const px: number[] = [],
  py: number[] = [];

export const lee = (
  ax: number,
  ay: number,
  bx: number,
  by: number,
  grid: Array<Array<number>>,
  width: number = 100,
  height: number = 100
): boolean => {
  const W = width;
  const H = height;
  const WALL = -1;
  const BLANK = -2;

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let d: number, x: number, y: number, k: number;
  let stop: boolean;
  let len: number;

  if (grid[ay][ax] === WALL || grid[by][bx] === WALL) return false;

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

  if (grid[by][bx] === BLANK) return false;

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
  return true;
};
