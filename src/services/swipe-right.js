const swipeRight = (arr) => {
  const newArr = arr.reduce((acc, _curr, ind) => {
    if (ind % 4 === 0) acc.push(arr[ind], arr[ind + 1], arr[ind + 2], arr[ind + 3]);
    return acc;
  }, []);

  const filteredArr = newArr.filter((num) => num.value);
  const empty = 4 - filteredArr.length;
  const zeros = Array(empty).fill(0);
  const newRow = zeros.concat(filteredArr);

  return [...newRow[0], ...newRow[1], ...newRow[2], ...newRow[3]];
};

export default swipeRight;
