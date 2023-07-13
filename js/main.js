let number = prompt("Введіть число");
let power = prompt("Введіть ступінь");

function pow(num, degree) {
  if (degree != 1) {
    return num *= pow(num, degree - 1);
  } else {
    return num;
  }
}

console.log(pow(number, power));
