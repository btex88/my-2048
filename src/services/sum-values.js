export function sumRight(arr) {
  return arr.reduce((acc, row) => {
    const newRow = row.reduce((coll, curr, index) => {
      if (curr === row[index - 1]) {
        coll.push((curr + row[index - 1]));
        coll.splice((index - 1), 1, '');
      } else {
        coll.push(curr);
      }
      return coll;
    }, []);
    acc.push(newRow);
    return acc;
  }, []);
}

export function sumLeft(arr) {
  return arr.reduce((acc, row) => {
    const newRow = row.reduce((coll, curr, index, currArr) => {
      if (curr === row[index + 1] && index < 3) {
        coll.push((curr + row[index + 1]));
        currArr.splice((index + 1), 1, '');
      } else {
        coll.push(curr);
      }
      return coll;
    }, []);
    acc.push(newRow);
    return acc;
  }, []);
}
