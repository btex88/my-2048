import randomNum from './random-num';

export default function generateNum(arr) {
  const flattenArr = arr.flat(2);

  const emptyValuesArr = flattenArr.reduce((acc, curr, index) => {
    if (!curr) acc.push(index);
    return acc;
  }, []);

  if (emptyValuesArr.length !== 0) {
    const rand = randomNum(0, (emptyValuesArr.length - 1));
    flattenArr.splice(emptyValuesArr[rand], 1, 2);
  }

  return flattenArr.reduce((acc, _curr, index) => {
    if (index % 4 === 0) {
      acc.push([
        flattenArr[index],
        flattenArr[index + 1],
        flattenArr[index + 2],
        flattenArr[index + 3],
      ]);
    }
    return acc;
  }, []);
}
