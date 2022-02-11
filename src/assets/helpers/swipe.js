export default function swipe(arr, direction) {
  const modArr = arr.flat(2);
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
    gather.push(Array(value).fill(''));
    return gather;
  }, []);

  if (direction === 'left') {
    return zerosArr.map((val, ind) => ([...filteredArr[ind], ...val]));
  }

  if (direction === 'right') {
    return zerosArr.map((val, ind) => [...val, ...filteredArr[ind]]);
  }
  return arr;
}
