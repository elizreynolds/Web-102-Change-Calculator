// Write your JavaScript here

function calculateChange(due, given) {
    var coins = {
      dollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1,
    };
    var remainder = given - due;
  remainder = remainder * 100;
  while (remainder > 0) {
    console.log(remainder);
    if (remainder > 100) {
      remainder = remainder - 100;
      coins.dollar++;
    }
    if (remainder > 25) {
      remainder = remainder - 25;
      coins.quarter++;
    }
    if (remainder > 10) {
      remainder = remainder - 10
      coins.dime++;
    }
    if (remainder > 5) {
      remainder = remainder - 5
      coins.nickel++;
    }
    if (remainder >= 1) {
      remainder = remainder - 1
      coins.penny++;
    }
  }
  return coins;
}
document.getElementById("calculate").addEventListener("click", function () {
    var due = document.getElementById("due").value;
    var given = document.getElementById("given").value;
    var result = calculateChange(due, given);
    document.getElementById('output-dollar').innerHTML = result.dollar + ' dollars';
    document.getElementById('output-quarter').innerHTML = result.quarter + ' quarters';
    document.getElementById('output-dime').innerHTML = result.dime + ' dimes';
    document.getElementById('output-nickel').innerHTML = result.nickel + ' nickels';
    document.getElementById('output-penny').innerHTML = result.penny + ' pennies';
  });