
const weights = {
  winning: 1,
  losing: 10
}
winningArray = () => {
  const exp = weights.winning;
  const num = weights['winning'];
  winArr = Array(exp).fill(num);
  return winArr
}
losingArray = () => {
  const exp = weights.losing;
  const num = weights['losing'];
  return Array(exp).fill(num);
}
winningArray()
console.log(winArr)

// weights_keys = Object.keys(weights)


// const toThePowerOf = (num, exp) => {
//   const items = Array(exp).fill(num);
//   const reducer = (total, currentValue) => total * currentValue;
//   return items.reduce(reducer);