export const swipeRight = (arr) => {
  const modArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3]];
  const newArr = modArr.reduce((acc, _curr, ind) => {
    if (ind % 4 === 0) {
      acc.push([modArr[ind], modArr[ind + 1], modArr[ind + 2], modArr[ind + 3]]);
    }
    return acc;
  }, []);

  const filteredArr = newArr.map((row) => row.filter((num) => num));
  const emptyArr = filteredArr.reduce((accum, curr) => {
    accum.push(4 - Number(curr.length));
    return accum;
  }, []);
  const zerosArr = emptyArr.reduce((gather, value) => {
    gather.push(Array(value).fill(0));
    return gather;
  }, []);
  const newFilteredArr = zerosArr.map((val, ind) => [...val, ...filteredArr[ind]]);
  return newFilteredArr;
};

export const swipeLeft = (arr) => {
  const modArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3]];
  const newArr = modArr.reduce((acc, _curr, ind) => {
    if (ind % 4 === 0) {
      acc.push([modArr[ind], modArr[ind + 1], modArr[ind + 2], modArr[ind + 3]]);
    }
    return acc;
  }, []);

  const filteredArr = newArr.map((row) => row.filter((num) => num));
  const emptyArr = filteredArr.reduce((accum, curr) => {
    accum.push(4 - Number(curr.length));
    return accum;
  }, []);
  const zerosArr = emptyArr.reduce((gather, value) => {
    gather.push(Array(value).fill(0));
    return gather;
  }, []);
  const newFilteredArr = zerosArr.map((val, ind) => [...filteredArr[ind], ...val]);
  return newFilteredArr;
};
