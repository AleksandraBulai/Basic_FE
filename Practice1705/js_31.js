//Задача. Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел
function get_negative_numbers(numbers) {
    let negative_numbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
       negative_numbers.push(numbers[i]);
      }
    }
  
    return negative_numbers;
  }
  
  const numbers = [1, -2, 3, -4, 5, -6];
  const result = get_negative_numbers(numbers);
  console.log(result); // Вывод: [-2, -4, -6]