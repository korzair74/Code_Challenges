Sales = {
  "Google": 8,
  "Facebook": 20, 
  "Twitter": 6,
  "Offline": 15
}

salesArray = () => {
  const exp = Sales.google;
  const num = Sales['Google'];
  saleArr = Array(exp).fill(num);
  return saleArr
}
console.log(saleArr)