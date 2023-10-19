
// program for a simple calculator
let result;
let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));
let operator = prompt('Enter operator ( either +, -, * or / ): ');
switch(operator) {
    case '+':
         result = number1 + number2;
        break;
    case '-':
         result = number1 - number2;
        break;
    case '*':
         result = number1 * number2;
        break;
    case '/':
         result = number1 / number2;
        break;
    default:
        console.log('Invalid operator');
        break;
}
document.write("Result: " + number1 + operator +number2 +"=" + result)