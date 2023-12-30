
/*Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

const getCub = (number) => {
    return Math.pow(number, 3);
}

console.log(getCub(2) + getCub(3));

/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

let rawSalary = prompt('Введите зарплату: ');

const finalSalary = (rawSalary) => {
    return rawSalary - rawSalary * 0.13;
}


if (!isNaN(Number(rawSalary))) {
    if (rawSalary > 0) 
        console.log(`Чистая зарплата ${finalSalary(rawSalary)}`);
    else
        alert('Вы ввели число меньше нуля');
}
else
    alert('Вы ввели не число');

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

function findMax(array) {
    let isNum = false;
    let max;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(Number(array[i])) && isNum == false) {
            max = array[i];
            isNum = true;
        }
        if (!isNaN(Number(array[i])) && isNum == true) {
        if (array[i] > max) {
                max = array[i]
        }
        }
    }

    return max;
}

const array = prompt('Введите числа через пробел: ').split(' ');

console.log(findMax(array));

/* Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return Math.abs(num1 - num2);
}

function mult(num1, num2) {
    return num1 * num2;
}

function dшvide(num1, num2) {
    return num1 >= num2 ? num1/num2 : num2/num1;
}

console.log(sum(2, 3));
console.log(subtract(2, 3));
console.log(mult(2, 3));
console.log(dшvide(2, 3));