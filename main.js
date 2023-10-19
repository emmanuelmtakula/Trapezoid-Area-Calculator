// Program title

// Event Listener
document
  .getElementById("btn")
  .addEventListener("click", CalculateTrapezoidArea);

// Store Code In Function
function CalculateTrapezoidArea() {
  // Input
  let a = +document.getElementById("avalue-in").value;
  let b = +document.getElementById("bvalue-in").value;
  let h = +document.getElementById("hvalue-in").value;
  // Process

  let A = (1 / 2) * (a + b) * h;

  // Output
  document.getElementById("output").innerHTML = A;
}
