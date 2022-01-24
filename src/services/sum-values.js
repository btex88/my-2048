function sumValues(arr, direction) {
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

export default sumValues;
