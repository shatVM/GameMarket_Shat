//Перевірка підключеного файлу скриптів
//console.log('Підключено файл скриптів market.js')

//Визначення масиву об'єктів
let itemsArray = [
//     {
//     Email: "",
//     Group: "",
//     Student: "",
//     Game_Title: "",
//     GitHub_Repository_Game: "",
//     GitHub_Pages_Game: "",
//     Google_Drive_Documentation: "",
//     Survey_Form: "",
//     GitHub_Repository_GameMarket: "",
//     GitHub_Pages_Design: "",
//     Market_Pages_4_Products: "",
// }

    {
        Email: "23a_bam@liceum.ztu.edu.ua",
        Group: "10-А 1",
        Student: "Боровий Артур",
        Game_Title: "Дід проти москалів",
        GitHub_Repository_Game: "https://github.com/23a-bam/Phaser2ndGame",
        GitHub_Pages_Game: "https://23a-bam.github.io/Phaser2ndGame/",
        Google_Drive_Documentation: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
        Survey_Form: "https://forms.gle/sS7tuJWJuGDjmHB98",
        GitHub_Repository_GameMarket: "https://github.com/23a-bam/GameMarket_Borovyi",
        GitHub_Pages_Design: "https://23a-bam.github.io/GameMarket_Borovyi/",
        Market_Pages_4_Products: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
        Market_Pages_Final:"",
    },
    {
        Email: "23a_gki@liceum.ztu.edu.ua",
        Group: "10-А 1",
        Student: "Геча Кирило",
        Game_Title: "Магазин UkraineRog",
        GitHub_Repository_Game: "https://github.com/Kyrylooo/GameMarket_Surname",
        GitHub_Pages_Game: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
        Google_Drive_Documentation: "https://kyrylooo.github.io/Test1/",
        Survey_Form: "https://kyrylooo.github.io/Test1/",
        GitHub_Repository_GameMarket: "https://github.com/Kyrylooo/Test1",
        GitHub_Pages_Design: "https://kyrylooo.github.io/Test1/",
        Market_Pages_4_Products: "https://kyrylooo.github.io/Test1/",
        Market_Pages_Final:"",
    },
    {
        Email: "23a_gmo@liceum.ztu.edu.ua",
        Group: "10-А 1",
        Student: "Громова Марина",
        Game_Title: "Prinsess",
        im:"img/gr.png",
        im_g:"img/Громова.jpg",
        GitHub_Repository_Game: "https://github.com/Marina745/Phaser2ndGame",
        GitHub_Pages_Game: "https://marina745.github.io/Phaser2ndGame/",
        Google_Drive_Documentation: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
        Survey_Form: "https://forms.gle/4tsVxrHtBpkLLmdc6",
        GitHub_Repository_GameMarket: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
        GitHub_Pages_Design: "https://marina745.github.io/GameMarket_Hromova/market.html",
        Market_Pages_Final:"",
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
//     Email: "",
//     Group: "",
//     Student: "",
//     Game_Title: "",
//     GitHub_Repository_Game: "",
//     GitHub_Pages_Game: "",
//     Google_Drive_Documentation: "",
//     Survey_Form: "",
//     GitHub_Repository_GameMarket: "",
//     GitHub_Pages_Design: "",
//     Market_Pages_4_Products: "",
            itemsDiv.innerHTML +=
                `
                <!-- Блок окремої гри -->
                <div class="item">
    
                    <div class="item-title">${item.Game_Title}</div>
                    <div class="item-author">${item.Student} ${item.Group} ${item.Email}</div>
                    <div><img src="" alt=""></div>
    
                    <!-- Блок зображення  -->
                    <div class="item-image">
                        <img src="${item.im}" class = "item-image">
                        <img src="${item.im_g}" class = "item-image">
                    </div>
    
                    <!-- Блок з оплатою частинами -->
                    <div class="parts-pay">
                        
                        <div><img src="img-market/pb.png" alt=""></div>
                    </div>
    
                    <!-- Блок ціни -->
                    <div class="prise">
                        
                    </div>
    
                    <!-- Блок посилань -->
                    
                        <a href = "${item.GitHub_Repository_Game}" target=_blank class="bonus">GitHub Repository</a>
                        <a href = "${item.GitHub_Pages_Game}" target=_blank class="bonus">GitHub Pages_Game</a>
                        <a href = "${item.Google_Drive_Documentation}" target=_blank class="bonus">Google Drive Documentation</a>
                        <a href = "${item.Survey_Form}" target=_blank class="bonus">Survey Form</a>
                        <a href = "${item.GitHub_Repository_GameMarket}" target=_blank class="bonus">GitHub Repository GameMarket</a>
                        <a href = "${item.GitHub_Pages_Design}" target=_blank class="bonus">GitHub Pages Design</a>
                        <a href = "${item.Market_Pages_4_Products}" target=_blank class="bonus">Market Pages 4 Products</a>
                        <a href = "${item.Market_Pages_Final}" target=_blank class="bonus">Market Pages Final</a>

                        
                    
                </div>                
                `
        })

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

