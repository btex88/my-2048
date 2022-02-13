export default function swipeX(arr, direction) {
  const filteredArr = arr.map((row) => row.filter((num) => num));

  const emptyArr = filteredArr.reduce((acc, curr) => {
    acc.push(4 - Number(curr.length));
    return acc;
  }, []);

  const zerosArr = emptyArr.reduce((acc, curr) => {
    acc.push(Array(curr).fill(''));
    return acc;
  }, []);

  if (direction === 'left') {
    return zerosArr.map((val, ind) => ([...filteredArr[ind], ...val]));
  }

  if (direction === 'right') {
    return zerosArr.map((val, ind) => [...val, ...filteredArr[ind]]);
  }
  return arr;
}
