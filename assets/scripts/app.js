const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get user input
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Get and write calculation log
function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function calcLog(op, prevNum, currentNum, result) {
  const logEntry = {
    operation: op,
    prevResult: prevNum,
    number: currentNum,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput(initialResult, '+', enteredNumber);
  calcLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput(initialResult, '-', enteredNumber);
  calcLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput(initialResult, '*', enteredNumber);
  calcLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput(initialResult, '/', enteredNumber);
  calcLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
