import randomNum from './random-num';

export default function generateNum(arr) {
  const newArr = arr.flat(2);
  let control = true;
  while (control) {
    const rand = randomNum(0, 15);
    if (!newArr[rand]) {
      newArr.splice(rand, 1, 2);
      control = false;
    }
  }
  return newArr.reduce((acc, _curr, index) => {
    if (index % 4 === 0) {
      acc.push([newArr[index], newArr[index + 1], newArr[index + 2], newArr[index + 3]]);
    }
    return acc;
  }, []);
}
