//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

//Визначення масиву об'єктів
let itemsArray = [
    {
        title: "Carpatians",
        author: "Присяжнюк Богдана",
        author_photo: "img/Присяжнюк.jpg",
        image: "",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-А 2",        
        game_github: "https://github.com/Prydana/Phaser2stGame",
        game_pages: "https://prydana.github.io/Phaser2stGame/",
        docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
        forms: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
        gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
        gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
        market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
        stars: 5
   }      

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
                <!-- Блок окремої гри -->
                <div class="item">
    
                    <div class="item-title">${item.title}</div>
                    <div class="item-author">${item.author}</div>
                    
    
                    <!-- Блок зображення  -->
                    <div class="item-image">
                        <img src="${item.image}" class = "item-image">
                        <img src="${item.author_photo}" class = "item-image">
                    </div>
    
                    <!-- Блок з оплатою частинами -->
                    <div class="parts-pay">
                        <div><img src="img-market/mono-lapka.png" alt="">${item.group}</div>
                        <div><img src="img-market/pb.png" alt="">${item}</div>
                    </div>
    
                    <!-- Блок ціни -->
                    <div class="prise">
                        <div><span>${item} </span><sup></sup></div>                        
                    </div>
    
                    <!-- Блок посилань -->
                    <div class="prise bonus">
                        <div><a href = "${item.game_github}" target=_blank>Гра на Github</a></div>                        
                    </div>
                    <div class="prise bonus">
                        <div><a href = "${item.game_pages}" target=_blank>Грати в гру</a></div>                        
                    </div>
                    <div class="prise bonus">
                    <div><a href = "${item.gamemarket_github}" target=_blank>Market Github</a></div>                        
                    </div>
                    <div class="prise bonus">
                        <div><a href = "${item.gamemarket_pages}" target=_blank>Market Pages</a></div>                        
                    </div>



                    <div class="prise bonus">                        
                        <div>Рейтинг: <span>${item.stars} </span><sup></sup></div>
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