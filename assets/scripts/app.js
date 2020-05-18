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

function calculateResult(calcType) {
  if (
    calcType !== 'ADD' &&
    calcType !== 'SUBTRACT' &&
    calcType !== 'MULTIPLY' &&
    calcType !== 'DIVIDE'
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calcType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calcType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(initialResult, mathOperator, enteredNumber);
  calcLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
