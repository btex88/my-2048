function capitalize(name) {
  const nameArr = name.split(' ');
  return nameArr.reduce((acc, curr) => {
    const newCurr = curr.split('')[0].toUpperCase() + curr.slice(1).toLowerCase();
    acc.push(newCurr);
    return acc;
  }, []).join(' ');
}

export default capitalize;
