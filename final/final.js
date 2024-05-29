//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

//Визначення масиву об'єктів
let itemsArray = [
    {
        Group: "10-А 1",
        LastName: "Боровий",
        FirstName: "Артур",
        Link: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Геча",
        FirstName: "Кирило",
        Link: "https://kyrylooo.github.io/Test1/",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Громова",
        FirstName: "Марина",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Гуменюк",
        FirstName: "Аріна",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Демидчук",
        FirstName: "Ілля",
        Link: "https://zxcursed2008.github.io/GameMarket_Demydchuk/Final_GameMarket/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Деркач",
        FirstName: "Єлизавета",
        Link: "https://liska228.github.io/GameMarket_Derkach-/final.market.html/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Євланов",
        FirstName: "Данііл",
        Link: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/FInal-gamemarket/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Катя",
        FirstName: "Булич",
        Link: "https://katyablchh.github.io/GameMarket_Bulych/finalgamemarket/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Ковальов",
        FirstName: "Андрій",
        Link: "https://andre00785.github.io/Game_Market_Kovalev/Final_hour/Gamemarket.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Кожанов",
        FirstName: "Юрій",
        Link: "https://kyuk278937.github.io/StudentGame/",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Козлюк",
        FirstName: "Марина",
        Link: "https://marykozl.github.io/GameMarket_Kozlyuk/final/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Кравчук",
        FirstName: "Іван",
        Link: "https://maskenissen1.github.io/GameMarket_Kravchuk/Final-gamemarket/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Лазаренко",
        FirstName: "Софія",
        Link: "https://sofialazarenko.github.io/GameMarket_Lazarenko/Final/final.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Кайданюк",
        FirstName: "Ілля",
        Link: "https://nefenix.github.io/GameMarket_Kaidaniuk/Final-GameMarket/market.html",
        Mark: ""
    },
    {
        Group: "10-А 1",
        LastName: "Марценюк",
        FirstName: "Вадим",
        Link: "https://jokerbrando.github.io/GameMarket_Martseniuk_Vadym/final%20market/market1.html",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Будішевський",
        FirstName: "Єгор",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Мединський",
        FirstName: "Роман",
        Link: "https://medynskyiroman.github.io/market-test1/final/final.html",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Михальський",
        FirstName: "Нікіта",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Недзвецький",
        FirstName: "Олег",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Ніцкевич",
        FirstName: "Дар'я",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Присяжнюк",
        FirstName: "Богдана",
        Link: "https://prydana.github.io/GameMarket_Prysiazhniuk/students/market_st.html",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Сікалюк",
        FirstName: "Артем",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Соломонюк",
        FirstName: "Богдан",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Столяров",
        FirstName: "Руслан",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Столярчук",
        FirstName: "Дмитро",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Ткач",
        FirstName: "Кирил",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Філімончук",
        FirstName: "Євгеній",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Хмєль",
        FirstName: "",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-А 2",
        LastName: "Якубець",
        FirstName: "Денис",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Башинська",
        FirstName: "Вікторія",
        Link: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Біденко",
        FirstName: "Дмитро",
        Link: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Бовсуновського",
        FirstName: "Максима",
        Link: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Волинець",
        FirstName: "Владислав",
        Link: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Галетко",
        FirstName: "Артем",
        Link: "https://artem4ikgaletko.github.io/GameMarket_Haletko/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Гордійчук",
        FirstName: "Богдан",
        Link: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Гоцман",
        FirstName: "Артем",
        Link: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Гуменюк",
        FirstName: "Олег",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Дєдух",
        FirstName: "Ілля",
        Link: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Дідківській",
        FirstName: "Андрій",
        Link: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Заєць",
        FirstName: "Богдан",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Кравчук",
        FirstName: "Андрій",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Кучер",
        FirstName: "Максим",
        Link: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 1",
        LastName: "Лавренко",
        FirstName: "Каріна",
        Link: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Лещенко",
        FirstName: "Настя",
        Link: "https://leschenko1001.github.io/GameMarket_Leschenko/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Лобода",
        FirstName: "Софія",
        Link: "https://lobodass.github.io/siteinf/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Найбородін",
        FirstName: "Артем",
        Link: "https://nayborodin.github.io/GameMarket_Nayborodin/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Нікітіч",
        FirstName: "Олександр",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Продоус",
        FirstName: "Олександр",
        Link: "https://oleksandrpr321.github.io/-GameMarket_Prodous/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Прокопчук",
        FirstName: "Денис",
        Link: "https://denis16543.github.io/GameMarket_Prokopchuk/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Савицкьий",
        FirstName: "Єгор",
        Link: "http://127.0.0.1:5500/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Саух",
        FirstName: "Тимофій",
        Link: "https://imnottimaw.github.io/GameMarket_Saukh/",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Скримінська",
        FirstName: "Оксана",
        Link: "http://127.0.0.1:5500/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Смолянова",
        FirstName: "Ніка",
        Link: "https://nikasms.github.io/GameMarket_Smolianova/final/final.html",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Терський",
        FirstName: "Дмитро",
        Link: "",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Шапіренко",
        FirstName: "Максим",
        Link: "https://shapirenko.github.io/GameMarket_Shapirenko/final/final.html?authuser=0",
        Mark: ""
    },
    {
        Group: "10-Б 2",
        LastName: "Соколовська",
        FirstName: "Вікторія",
        Link: "https://vikasokol.github.io/market/market.html?authuser=0",
        Mark: ""
    }
]





// Отримання елементу з ідентифікатором items 
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Створення блоків по кількості елементів масиву
    itemsArray
        .sort((a, b) => a.Group.localeCompare(b.Group))
        //Сортування за прізвищем
        //.sort((a, b) => a.LastName.localeCompare(b.LastName))        
        //
        .forEach((item, index) => {
            //Виводимо на веб сторінку елемент масиву в блок з класом item
            itemsDiv.innerHTML +=
                `
                <!-- Блок   -->
                <div class="item">    
                    <div class="item-title">${item.LastName} ${item.FirstName}  ${item.Group}</div>                    
                    <a href = "${item.Link} " target="_blank" class = "bonus">Фінальний проект</a> 
                    <div class="item-title">Оцінка: ${item.Mark}</div> 
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