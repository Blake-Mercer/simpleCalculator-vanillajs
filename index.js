function calc() {
  const a = parseInt(document.getElementById('value1').value);
  const b = parseInt(document.getElementById('value2').value);
  let op = document.querySelector('#op').value;
  let answer;

  switch (op) {
    case 'add':
      answer = a + b;
      break;
    case 'sub':
      answer = a - b;
      break;
    case 'div':
      answer = a / b;
      break;
    case 'mult':
      answer = a * b;
      break;
    default:
      answer = 'Press Calculate!';
  }
  document.getElementById('results').innerHTML = answer;
  console.log(answer);
}
