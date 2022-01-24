export function sumRight(arr, direction) {
  return arr.reduce((acc, row) => {
    const newRow = row.reduce((accum, value, index) => {
      if (direction === 'right' && value === row[index - 1]) {
        accum.push((value + row[index - 1]));
        accum.splice((index - 1), 1, 0);
      } else {
        accum.push(value);
      }
      return accum;
    }, []);
    acc.push(newRow);
    return acc;
  }, []);
}

export function sumLeft(arr, direction) {
  return arr.reduce((acc, row) => {
    const newRow = row.reduce((accum, value, index) => {
      if (direction === 'left' && value === row[index + 1]) {
        accum.push((value + row[index + 1]));
        accum.splice(index + 1, 1, 0);
      } else {
        accum.push(value);
      }
      return accum;
    }, []);
    acc.push(newRow);
    return acc;
  }, []);
}

/*
if (direction === 'left' && value === row[index + 1]) {
        accum.push((value + row[index + 1]));
        accum.splice((index + 1), 1, 0);
      } else {
        accum.push(value);
      }
*/
