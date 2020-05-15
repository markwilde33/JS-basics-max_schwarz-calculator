const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  const result = num1 + num2;
  alert(`The result is ${result}`);
}

add(3, 3);
add(6, 6);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
