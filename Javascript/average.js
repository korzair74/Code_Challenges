// const arrAvg = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;
    
// console.log(arrAvg([6, 8, 4, 32, 14]))

function arrAvg(num) {
  let sum = 0;
  if(!num.length){
    return sum;  
  }
  for (let i = 0; i < num.length; i++){
      sum += num[i];
  }
  return sum / num.length;
}
console.log(arrAvg([6, 8, 4, 32, 14]))