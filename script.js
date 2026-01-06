console.log("Project");
function findAverage(arr) {
  let total = sumArray(arr); 
  return total / arr.length;
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findAverage(numbers));
