function calc_area() {
    // (1) извлечь радиус
    const radius = document.querySelector ('#radius').value;
    console.log(radius *2);
    // (2) расчет площади
    const area = 3.14 * radius ** 2;
    console.log(area);
    // (3) вывести результат
    const result = document.querySelector('#result');
    result.textContent = area; 
}