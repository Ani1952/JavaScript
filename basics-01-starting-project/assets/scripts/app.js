document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("input-number");
  const operationButtons = document.querySelectorAll("#calc-actions button");
  const currentResultOutput = document.getElementById("current-result");
  const calculationLogsOutput = document.getElementById("current-log");

  let currentResult = 0;

  function outputResult(result) {
    currentResultOutput.textContent = result;
    calculationLogsOutput.textContent = makeLogOutputConsole();
    userInput.value="";
  }

  const logs = [];

  function addToLogs(operation, previousResult, newInputValue, result) {
    const logEntry = {
      operator: operation,
      prevRes: previousResult,
      inputValue: newInputValue,
      res: result,
    };
    logs.push(logEntry);
  }

  function makeLogOutputConsole() {
    let allLogsOutput = '';
  
    for (let i = 0; i < logs.length; i++) {
      const currentLog = logs[i];
      let operatorSymbol =
        currentLog.operator === '+'
          ? '+'
          : currentLog.operator === '-'
          ? '-'
          : currentLog.operator === '*'
          ? '*'
          : '/';
      const logOutput = `${currentLog.prevRes} ${operatorSymbol} ${currentLog.inputValue} = ${currentLog.res}\n`;
  
      allLogsOutput += logOutput;
    }
  
    return allLogsOutput;
  }


  function performOperation(operator) {
    const num = parseInt(userInput.value);
    const operatorSymbol =
      operator === "btn-add"
        ? "+"
        : operator === "btn-subtract"
        ? "-"
        : operator === "btn-multiply"
        ? "*"
        : "/";
    const description = `${currentResult} ${operatorSymbol} ${num}`;
    let initValue;
    switch (operator) {
      case "btn-add":
        initValue = currentResult;
        currentResult += num;
        addToLogs("+", initValue, num, currentResult);
        break;
      case "btn-subtract":
        initValue = currentResult;
        currentResult -= num;
        addToLogs("-", initValue, num, currentResult);
        break;
      case "btn-multiply":
        initValue = currentResult;
        currentResult *= num;
        addToLogs("*", initValue, num, currentResult);
        break;
      case "btn-divide":
        initValue = currentResult;
        currentResult /= num;
        addToLogs("/", initValue, num, currentResult);
        break;
    }

    outputResult(currentResult);
  }

  operationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      performOperation(button.id);
    });
  });
  console.log(logs);
});
