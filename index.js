const plius = (a, b) => a + b;
const minus = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;


const calc = (firstNumber, mathFunction, secondNumber) => {
    const rez = mathFunction(firstNumber, secondNumber);
    console.log(rez);
}


calc(8, plius, 5)
calc(8, minus, 5)
calc(8, multi, 5)
calc(8, div, 5)