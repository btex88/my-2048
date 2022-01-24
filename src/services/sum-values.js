function sumValues(arr, direction) {
  if (direction === 'right') {
    console.log('entrei');
    return arr.reduce((acc, row) => {
      const newRow = row.reduce((accum, value, index) => {
        if (value === row[index - 1]) {
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
  return arr;
}

export default sumValues;
