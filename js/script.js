//Переменные для history_block
let historyContent1 = document.querySelector(".hist_content1");
let historyContent2 = document.querySelector(".hist_content2");
let histCount = 1;
//Переменные для section3
let sec3But1 = document.querySelector(".sec3_but1");
let sec3But2 = document.querySelector(".sec3_but2");
let sec3But3 = document.querySelector(".sec3_but3");
let sec3But4 = document.querySelector(".sec3_but4");
let sec3Buts = document.querySelectorAll(".sec3_buttons button");
//Переменные для отслеживания scroll
let AnimCount = 0;
let scrollOptions = {
    root: null,
    threshold: 0.5,
}
//Переменные для адаптивности
let menu = document.querySelector(".menu");
let box = document.querySelector("body");

let scheduleBlock = document.querySelector(".sec1_title");
let scheduleObsorver = new IntersectionObserver(section1Animaton1, scrollOptions);
scheduleObsorver.observe(scheduleBlock);

let histBlock = document.querySelector(".history_block");
let histObsorver = new IntersectionObserver(section1Animation2, scrollOptions);
histObsorver.observe(histBlock);

let workersBlock = document.querySelector(".sec2_title");
let workersObsorver = new IntersectionObserver(sec2Animation, scrollOptions);
workersObsorver.observe(workersBlock);
//Переменные для анимаций
let sec1Title = document.querySelector(".sec1_title");
let scheduleImg = document.querySelector(".work_hours_img img");
let scheduleText = document.querySelector(".work_hours_text");
let histTitle = document.querySelector(".history_block h2");
let histItem = document.querySelectorAll(".hist_item");
let hairImg = document.querySelectorAll(".hairdresser img");
let hairItem = document.querySelectorAll(".hairdresser");
let headerTitle = document.querySelector(".header_title");
let headerTxt = document.querySelector(".header_text");
let headerBut = document.querySelector(".header_button");


//Работаем с history_block
function arrowClick() {
    histCount === 1 ? (
        historyContent1.classList.add("anim"),
        historyContent2.classList.add("anim"),
        histCount++
    ) : (
        historyContent2.classList.remove("anim"),
        historyContent1.classList.remove("anim"),
        histCount--
    );
}

//Работаем с section3
for (let i = 0; i <= 3; i++) {
    sec3Buts[i].addEventListener("click", sec3ButClick);
}
function sec3ButClick(event) {
    //Ставим класс на нужный элемент
    sec3But1.classList.remove("active_button");
    sec3But2.classList.remove("active_button");
    sec3But3.classList.remove("active_button");
    sec3But4.classList.remove("active_button");
    event.target.classList.add("active_button");
    //Меняем картиночки
    let activeButton = document.querySelector(".active_button");
    switch (activeButton.classList[0]) {
        case "sec3_but1":
            document.querySelector(".display_block img").src = 'img/section3Photo1.jpg';
            break;
        case "sec3_but2":
            document.querySelector(".display_block img").src = 'img/sec3Photo2.jpg';
            break;
        case "sec3_but3":
            document.querySelector(".display_block img").src = 'img/sec3Photo3.jpeg';
            break;
        case "sec3_but4":
            document.querySelector(".display_block img").src = 'img/sec3Photo4.jpeg';
            break;
    }
}

//Анимации тут
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        AnimCount = 0;
        sec1Title.classList.remove("h2_anim");
        scheduleImg.classList.remove("img_anim");
        scheduleText.classList.remove("text_anim");
        histTitle.classList.remove("h2_anim");
        histItem.forEach(el => {
            el.classList.remove("item_anim");
        });
        hairImg.forEach(el=>{
            el.classList.remove("img_anim");
        });
        hairItem.forEach(el=>{
            el.classList.remove("anim");
        });
    }
});

function section1Animaton1(entries) {
    entries.forEach((entry) => {
        if (AnimCount < 1 && entry.isIntersecting) {
            sec1Title.classList.add("h2_anim");
            scheduleImg.classList.add("img_anim");
            scheduleText.classList.add("text_anim");
            AnimCount++;
        }
    });
}

function section1Animation2(entries) {
    entries.forEach((entry) => {
        if (AnimCount < 2 && entry.isIntersecting) {
            histTitle.classList.add("h2_anim");
            histItem.forEach(el => {
                el.classList.add("item_anim");
            });
            AnimCount++;
        }
    })
}

function sec2Animation(entries) {
    entries.forEach((entry) => {
        if (AnimCount < 3 && entry.isIntersecting) {
            hairImg.forEach(el=>{
                el.classList.add("img_anim");
            });
            hairItem.forEach(el=>{
                el.classList.add("anim");
            });
            AnimCount++;
        }
    })
}
//Всякое при обновлении страницы + еще анимации в heaader
window.onload = function pageReolad(){
    window.scrollTo({top: 0, behavior: "smooth"});
    headerTitle.classList.add("anim");
    headerTxt.classList.add("anim");
    headerBut.classList.add("anim");
}

//Адаптивность
function openMenu(){
    menu.classList.forEach(el=>{
        el=="active"?(
            menu.classList.remove("active"),
            box.classList.remove("active")
        ):(
            menu.classList.add("active"),
            box.classList.add("active")
        );
    });
}