import randomNum from './random-num';

function randValue() {
  return Math.random()
    .toString(10)
    .slice(2, 10);
}

export default function randomId() {
  const digit = randomNum(1, 9);
  const randomSequence = Number(
    (new Date().getTime() * randValue())
      .toString(10)
      .split('')
      .reduce((acc, curr) => {
        if (Number(curr) === 0) {
          acc.push(randomNum(1, 9));
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
      .join(''),
  ).toString(16);

  const randomGUID = [
    randomSequence.substring(0, 8),
    randomSequence.substring(8, 4),
    randomSequence.substring(16, 12),
    `4${Number(randValue())
      .toString(16)
      .slice(0, 3)}`,
    `${digit}${randomSequence.substring(13, 3).toLocaleUpperCase()}`,
  ].join('-');

  return randomGUID;
}
