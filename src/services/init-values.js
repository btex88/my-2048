function initValues() {
  const arr = Array(16).fill(0);
  const rand = {
    one: Math.floor(Math.random() * arr.length),
    two: Math.floor(Math.random() * arr.length),
  };
  const newArr = arr.reduce((acc, curr, index) => {
    while (rand.one === rand.two) {
      rand.two = Math.floor(Math.random() * arr.length);
      if (rand.one !== rand.two) break;
    }
    if (Object.values(rand).includes(index)) {
      acc.push(2);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  return newArr.reduce((accum, _val, ind) => {
    if (ind % 4 === 0) {
      accum.push([newArr[ind], newArr[ind + 1], newArr[ind + 2], newArr[ind + 3]]);
    }
    return accum;
  }, []);
}

export default initValues;
