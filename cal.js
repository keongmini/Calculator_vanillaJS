let resultNumber;
let nowNumber;
let operation;
let isNegative = false;

function numberClick(event) {
  if (!operation && resultNumber) {
    resultNumber = null;
  }

  const newNumber = Number(document.getElementById(event).innerText);

  !nowNumber
    ? isNegative
      ? ((nowNumber = -1 * newNumber), (isNegative = false))
      : (nowNumber = newNumber)
    : (nowNumber = nowNumber * 10 + newNumber);

  document.getElementById("answer").innerHTML = nowNumber;
}

function makeNumber() {
  if (operation === "sym_+") {
    resultNumber += nowNumber;
  } else if (operation === "sym_-") {
    resultNumber -= nowNumber;
  } else if (operation === "sym_/") {
    resultNumber /= nowNumber;
  } else if (operation === "sym_*") {
    resultNumber *= nowNumber;
  }
}

function operationClick(event) {
  isIgnored = false;

  if (!resultNumber && !nowNumber) {
    isIgnored = true;
    isNegative = event === "sym_-" ? true : false;
  } else if (!resultNumber) {
    operation = event;
    resultNumber = nowNumber;
  } else {
    makeNumber();
    operation = event;
  }

  document.getElementById("answer").innerHTML = isIgnored ? "" : resultNumber;
  nowNumber = null;
}

function printResult() {
  makeNumber();
  document.getElementById("answer").innerHTML = resultNumber;
  operation = null;
  nowNumber = null;
}

function makeClear() {
  document.getElementById("answer").innerHTML = "";
  resultNumber = null;
  nowNumber = null;
  operation = null;
}
