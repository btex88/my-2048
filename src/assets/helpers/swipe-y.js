export default function swipeY(arr, direction) {
  const flattenArr = arr.flat(2);
  const verticalArr = flattenArr.reduce((acc, _, index) => {
    if (index < 4) {
      acc.push([
        flattenArr[index],
        flattenArr[index + 4],
        flattenArr[index + 8],
        flattenArr[index + 12]]);
    }
    return acc;
  }, []);
  const filteredArr = verticalArr.map((row) => row.filter((num) => num));

  const emptyArr = filteredArr.reduce((acc, curr) => {
    acc.push(4 - Number(curr.length));
    return acc;
  }, []);

  const zerosArr = emptyArr.reduce((acc, curr) => {
    acc.push(Array(curr).fill(''));
    return acc;
  }, []);

  if (direction === 'down') {
    const newArr = zerosArr.map((val, ind) => [...val, ...filteredArr[ind]]);
    const modFlattenArr = newArr.flat(2);
    return modFlattenArr.reduce((acc, _, index, currArr) => {
      if (index < 4) {
        acc.push([
          currArr[index],
          currArr[index + 4],
          currArr[index + 8],
          currArr[index + 12]]);
      }
      return acc;
    }, []);
  }

  if (direction === 'up') {
    const newArr = zerosArr.map((val, ind) => [...filteredArr[ind], ...val]);
    const modFlattenArr = newArr.flat(2);
    return modFlattenArr.reduce((acc, _, index, currArr) => {
      if (index < 4) {
        acc.push([
          currArr[index],
          currArr[index + 4],
          currArr[index + 8],
          currArr[index + 12]]);
      }
      return acc;
    }, []);
  }
  return arr;
}
