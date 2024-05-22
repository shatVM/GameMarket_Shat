//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

//Визначення масиву об'єктів
let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "https://agora-discount.com/image/cache/catalog/10,05,2024/catalog-origin-308991-1144x912.jpg",
        mono: 4,
        pb: 10,
        prise_standart: 5499,
        prise_discount: 4497,
        prise_coupon: 4395,
    },
    {
        title: "Електричний тример",
        image: "",
        mono: 6,
        pb: 10,
        prise_standart: 5000,
        prise_discount: 4000,
        prise_coupon: 3800,
    },
    {
        title: "Газонокосарка",
        image: "",
        mono: 6,
        pb: 12,
        prise_standart: 5000,
        prise_discount: 4000,
        prise_coupon: 3800,
    },
    {
        title: "Оприскувач",
        image: "",
        mono: 6,
        pb: 8,
        prise_standart: 5000,
        prise_discount: 4000,
        prise_coupon: 3800,
    },


   
    

]











// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Створення блоків по кількості елементів масиву
    itemsArray
        //Сортування за прізвищем
        //.sort((a, b) => a.lastName.localeCompare(b.lastName))        
        //
        .forEach((item, index) => {
            //Виводимо на веб сторінку елемент масиву в блок з класом item
            itemsDiv.innerHTML +=
                `
                <!-- Блок окремого товару -->
                <div class="item">
    
                    <div class="item-title">${item.title}</div>
    
                    <!-- Блок зображення товару -->
                    <div class="item-image">
                        <img src="${item.image}" class = "item-image">
                    </div>
    
                    <!-- Блок з оплатою частинами -->
                    <div class="parts-pay">
                        <div><img src="img-market/mono-lapka.png" alt="">${item.mono}</div>
                        <div><img src="img-market/pb.png" alt="">${item.pb}</div>
                    </div>
    
                    <!-- Блок ціни -->
                    <div class="prise">
                        <div><span>${item.prise_standart} </span><sup>грн</sup></div>
                        <div><span> ${item.prise_discount}</span><sup>грн</sup></div>
                    </div>
    
                    <!-- Блок бонусної ціни -->
                    <div class="prise bonus">
                        <div>ціна за купоном</div>
                        <div><span>${item.prise_coupon} </span><sup>грн</sup></div>
                    </div>
                </div>                
                `
        })

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}











// {
//     firstName: "Віталій",
//     lastName: "Шатківський",
//     age: 43,
//     subject: "CS",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
// },
// {
//     firstName: "Наталія",
//     lastName: "Венцель",
//     age: 18,
//     subject: "Адміністратор",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",

// },
// {
//     firstName: "Наталія",
//     lastName: "Кучер",
//     age: 18,
//     subject: "Фізика",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
// },


{/* <p>${item.lastName} ${item.firstName}</p>
            // <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="item-image"></p>
            // <p>Вік: ${item.age} </p>
            // <p>Предмет: ${item.subject} </p>
            // <p ><a href = "${item.url}" target="_blank" class = "bonus">Профіль</a></p> */}





// {
//     firstName: "Віталій",
//     lastName: "Шатківський",
//     age: 43,
//     subject: "CS",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
// },
// {
//     firstName: "Наталія",
//     lastName: "Венцель",
//     age: 18,
//     subject: "Адміністратор",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",

// },
// {
//     firstName: "Наталія",
//     lastName: "Кучер",
//     age: 18,
//     subject: "Фізика",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
// },















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