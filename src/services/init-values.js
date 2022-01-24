const initValues = () => {
  const arr = Array(16).fill(0);
  const rand = {
    one: Math.floor(Math.random() * arr.length),
    two: Math.floor(Math.random() * arr.length),
  };
  return arr.reduce((acc, curr, index) => {
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
};

export default initValues;
