//              1
//Поиск максимального числа: Условие: Напишите программу, которая находит максимальное число из массива и выводит его.
//
// const numbers = [ 23, 24 , 1, 43, 18, 2 ];
// let max = numbers[0];
// for (let i = 0; i< numbers.length; i++) {
//    if (numbers[i] > max){
//  max = numbers[i];
//    }
// }
// console.log(`Максимальное число в массиве:` + max);
//
//============================================================
//                  2
//Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5:
// const numbers = [0, 1 , 2 , 3, 4, 5];
// for (let i = 0; i< numbers.length; i++) {
//     console.log("5 * " +i+ " = " + ( 5* [i]));
// }
//
//==============================================================
//                     3
//Подсчет четных чисел: Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.
// const numbers = [2,3,6,23,5,17,24,11,7,9,10,6];
// let check = 0;
// for (let i = 0; i< numbers.length; i++) {
//     if (numbers[i] %2 === 0 ) {
//         check++;
//     }
// }
// console.log(`Количество четных чисел :` ,check );
//
//==================================================================
//                         4
//Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.
//  const numbers = [2,3,6,23,5,17,24,11,7,9,10,6];
//  const revers = [];
//  for (let i = numbers.length -1; i>=0; i--) {
//     revers.push(numbers[i]);
//  }
//  console.log(revers);
//
//====================================================
//                        5
//Калькулятор стоимости товаров: Создайте функцию, которая принимает цену товара и количество единиц, а затем возвращает общую стоимость.
// function calculate(price,quantity){
//     return  price*quantity;
// }
// const productPrice = 25;
// const productQuantity = 2;
// const totalPrice = calculate(productPrice,productQuantity);
// console.log(totalPrice);
//
//====================================================
//                        6
//Проверка на четность: Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.
// function isEven(number){
//     return number %2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));
//
//=======================================================
//                        7
// function reverseString (str){
//     let reversed = ``;
//     for (let i = str.length - 1; i >= 0; i--){
//         reversed +=str[i];
//     }
//     return reversed;
// }
// console.log(reverseString(`Ruslan`));
// console.log(reverseString(`Shaniuk`))
//
//====================================================
//                         8
//Конвертер температуры: Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.
function celsiusToFarareheit(celsius){
    return celsius*9/5+32;
}
const celsiusTemp = 10;
const fahrenheitTemp = celsiusToFarareheit(celsiusTemp);
console.log(fahrenheitTemp);



