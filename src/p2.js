let series = [];
function fib(n) {
  series = [];
  let first = 1;
  let second = 1;
  series.push(first, second);
  while (n > 2) {
    let third = first + second;
    series.push(third);
    [first, second] = [second, third];
    n--;
  }
}
//fib(6);
//console.log(series);
//fib(7);
//console.log(series);

const fibRec = (n,memo) => {
 if(n in memo) return  memo[n];
 if(n<=2) return 1; 
 memo[n] = fibRec(n-1,memo) + fibRec(n-2,memo);
 return memo[n]; 
} 

let  series1 = {1:1,2:1};
fibRec(3,series1);
console.log(Object.values(series1));