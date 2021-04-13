let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Multiply: Imperative solution
function imperativeMultiply(numbers) {
  let total = 1;
  numbers.forEach(function (number) {
     total *= number;
  });
  return total;
};
console.log(imperativeMultiply(numbers));

// Multiply: Functional solution
function functionalMutiply(numbers) {
  return numbers.reduce((total, number)=> {
    return total *= number;
  }, 1);
};
console.log(functionalMutiply(numbers));
