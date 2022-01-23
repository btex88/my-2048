const initValues = () => {
  const arr = new Array(16);
  const rand = {
    one: Math.floor(Math.random() * arr.length),
    two: Math.floor(Math.random() * arr.length),
  };
  return [...arr].reduce((acc, _curr, index) => {
    while (rand.one === rand.two) {
      rand.two = Math.floor(Math.random() * arr.length);
      if (rand.one !== rand.two) break;
    }
    if (Object.values(rand).includes(index)) {
      acc.push(2);
    } else {
      acc.push(0);
    }
    return acc;
  }, []);
};

export default initValues;
