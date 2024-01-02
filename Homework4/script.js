/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

function task41() {
    for (let i = 0; i < 11; i++) {

        if (i === 0)
            console.log(`${i} - это ноль`);
        if (i !== 0 && i % 2 == 0)
            console.log(`${i} - четное число`);
        if (i % 2 == 1)
            console.log(`${i} - нечетное число`);
    }
}


/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

function task42() {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let array_tmp = array.slice(4, 7);
    array = array.slice(0, 3);
    array = array.concat(array_tmp);
    console.log(array);
}

/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

function RandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function task43() {
    let array = [];
    for (let index = 0; index < 5; index++) {
        array[index] = RandomInt(10); 
    }
    console.log(array);
    let sum = 0;
    let min = array[0];
    let isThree = false;
    for (let index = 0; index < 5; index++) {
        sum = sum + array[index];
        if (array[index] < min)
            min = array[index];
        if (array[index] === 3)
            isThree = true;
    }
    console.log(`Сумма всех элементов массива = ${sum}`);
    console.log(`Минимальное число в массиве = ${min}`);
    isThree ? console.log(`В массиве есть число 3`) : console.log(`В массиве нет числа 3`);
}

/* *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

function task44() {

    for (let i = 0; i < 20; i++) {
        let xStr = '';
        for (let j = 0; j < i; j++) {
            xStr = xStr + 'х';
        }
        console.log(xStr);
        
    }
}
