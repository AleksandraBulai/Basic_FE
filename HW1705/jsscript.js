// 1. Дайте ответ на вопрос, что такое объект в JS.
//Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит  EUR'
//Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).
function findExpensiveGoods(ArrayObjects) {
    let maxPrice =0;
    let maxTitle = "";
    for (let i = 0; i < ArrayObjects.length; i++) {
        if (ArrayObjects[i].price > maxPrice) {
            maxPrice = ArrayObjects [i].price;
            maxTitle = ArrayObjects [i].title;
        }
    }
    return `Самый дорогой товар ${maxTitle} стоит ${maxPrice} EUR`
}
function Summator(ArrayObjects) {
    let sum = 0;
    for (let i =0; i < ArrayObjects.length; i++) {
        sum += ArrayObjects[i].price;

    }
    return sum;
}