const display = document.getElementById('display');

let firstVal = '';
let secondVal = '';
let operation = '';

function addNumber(number) {
  secondVal += number;
  display.value = `${firstVal} ${operation} ${secondVal}`;
}

function addOperation(operand) {
  if (secondVal === '') return;
  if (firstVal !== '') {
    calculate();
  }
  operation = operand;
  firstVal = secondVal;
  secondVal = '';
  display.value = `${firstVal} ${operation}`;
}

function calculate() {
  if (firstVal === '' || secondVal === '') return;
  let result;
  let prev = parseFloat(firstVal);
  let current = parseFloat(secondVal);

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  secondVal = result.toString();
  operation = '';
  firstVal = '';
  display.value = secondVal;
}


function clearDisplay() {
  firstVal = '';
  secondVal = '';
  operation = '';
  display.value = '';
}