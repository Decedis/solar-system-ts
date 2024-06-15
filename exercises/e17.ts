export const minBy = <T>(array: T[], cb: (input: T) => T) => {
  if (array.length > 0) {
    let min = array[0];
    for (const item of array) {
      if (cb(item) < cb(min as T)) {
        min = item;
      }
    }
    return min;
  } else {
    return undefined;
  }
};

export function maxBy<T>(array: T[], cb: (input: T) => number) {
  if (array.length > 0) {
    let max = array[0];
    for (const item of array) {
      if (cb(item) > cb(max as T)) {
        max = item;
      }
    }
    return max;
  } else {
    return undefined;
  }
}
