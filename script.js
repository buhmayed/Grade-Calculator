// CS10 Grade Calculator

// Event Listener
document.getElementById("Result").addEventListener("click", Resulted);

// Function
function Resulted() {
  // input
  let number1 = +document.getElementById("N1").value;
  let number2 = +document.getElementById("N2").value;
  let number3 = +document.getElementById("N3").value;
  let number4 = +document.getElementById("N4").value;
  let number5 = +document.getElementById("N5").value;

  // Process
  let total = (number1 + number2 + number3 + number4 + number5) / 5;
  // Output
  document.getElementById("answer").innerHTML = total;
}
