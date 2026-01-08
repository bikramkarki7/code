// console.log("Project");
// function findAverage(arr) {
//   let total = sumArray(arr); 
//   return total / arr.length;
// }

// let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
// console.log(findAverage(numbers));
// let a = 1;
// let b = a++;
// let c = ++a;

// console.log(a, b, c);
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


