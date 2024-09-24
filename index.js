const input = document.getElementById("input");
const finalResult = document.getElementById("final-result");
const decimal = document.getElementById("decimal");

function cut() {
  let resultInput = input.value;
  input.value = resultInput.substring(0, input.value.length - 1);
}

function result() {
  calculate();
}

function clearAll(){
    input.value=''
    finalResult.innerText = `Result:`;
}

function userValue(num) {
  switch (num) {
    case "+":
      if (input.value != "" && !isOperator()) {
        input.value += num;
      }break;
      case '-':
        if (input.value != "" && !isOperator()) {
          input.value += num;
        }break;
      case '*':
        if (input.value != "" && !isOperator()) {
          input.value += num;
        }break;
      case '/':
        if (input.value != "" && !isOperator()) {
          input.value += num;
        }break;
      case 0:
        if (input.value != "") {
          input.value += num;
        }break;
      case '00':
        if (input.value != "") {
          input.value += num;
        }break;

    default:
      input.value += num;
      break;
  }
}

decimal.addEventListener("click", function () {
    if (canAddDecimal()) {
      input.value += ".";
    }
  });
  
  // Check if a decimal can be added in the current segment
  function canAddDecimal() {
    let data = input.value;
    let lastOperatorIndex = Math.max(data.lastIndexOf("+"), data.lastIndexOf("-"), data.lastIndexOf("*"), data.lastIndexOf("/"));
    let currentSegment = data.substring(lastOperatorIndex + 1);
  
    // If there's no decimal point in the current segment, allow adding it
    if (!currentSegment.includes(".")) {
      return true;
    }
    return false;
  }


function isOperator() {
  let data = input.value;
  if (
    data[data.length - 1] == "+" ||
    data[data.length - 1] == "-" ||
    data[data.length - 1] == "*" ||
    data[data.length - 1] == "/"
  )
    return true;
}

console.log(typeof input.value);

function calculate() {
  if (input.value === "") {
    input.value = "";
  } else {
    try {
      let answer = eval(input.value);
      finalResult.innerText = `Result: ${answer}`;
      input.value = "";
    } catch (error) {
        finalResult.innerText=`Result: Error`;
      input.value = "";
    }
  }
}
