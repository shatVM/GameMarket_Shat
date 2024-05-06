//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
]

// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Створення блоків по кількості елементів масиву
    itemsArray.forEach((item,index) => {
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += 
        `
        <div class = "item">
            <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>
        ` 
    })

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}




































//https://public.opendatasoft.com/explore/?sort=modified

//Проектуємо об'єкт товару, 
let item = {
    id: '', //ідентифікатор товару
    title: '', //назва товару
    image: '', //зображення товару
    mono_parts: '', //оплатою частинами Монобанк
    pb_parts: '', //оплатою частинами Приват банк
    prise_standart: '', //стандартна ціна
    prise_discount: '', //ціна зі знижкою
    prise_coupon: '', //ціна з купоном
}




let itemsOK = [
    {
        id: '001',
        title: '',
        image: '',
        mono_parts: '',
        pb_parts: '',
        prise_standart: '',
        prise_discount: '',
        prise_coupon: '',
    },

]
//console.log(item)
//console.log('',item)
//console.log('назва товару ', item.title)