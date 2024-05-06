//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Вивід знайденого елементу
    //console.log(itemsDiv)          

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
]

//Виведення елементів відсортованого масиву
itemsArray.forEach((item) =>{
    
})


// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
//  for (let i = 0; i < itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }
































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