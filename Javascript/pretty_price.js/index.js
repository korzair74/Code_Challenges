const prettyPrice = (dollars, cents) => {
  if (Number.isInteger(cents)) {
    cents = cents * 0.01;
  }
  return Math.floor(dollars) + cents;
}
console.log(prettyPrice(4,99))