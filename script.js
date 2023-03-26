let num1 = +prompt('первое число');

let num2 = +prompt('второе число');

let operator = prompt('оператор (/ , + , * , -)');

switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
}