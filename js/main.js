let number = prompt("enter number");
let power = prompt("enter power");

function pow(num, degree) {
  if (degree != 1) {
    return num *= pow(num, degree - 1);
  } else {
    return num;
  }
}

console.log(pow(number, power));