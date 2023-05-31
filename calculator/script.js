
function addToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}

// function clearResult() {
//   document.getElementById('result').value = '';
// }
function clearResult() {
    var currentResult = document.getElementById('result').value;
    var newResult = currentResult.slice(0, -1);
    document.getElementById('result').value = newResult;
  }
  