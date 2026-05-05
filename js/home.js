//переменные для галереи
let galeryCount = 1;
let index = 0;
const track = document.getElementById("track");
const total = 3;
//переменные для section5
sec5Count = 1;
let cont1 = document.querySelector(".sec5_content");
let cont2 = document.querySelector(".sec5_content2");

//галерея
function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
    if (index < total - 1) {
        index++;
        updateSlider();
    }
}
function prevSlide() {
    if (index > 0) {
        index--;
        updateSlider();
    }
}

//section5
function sec5Arrow(){
    sec5Count===1?(
        cont1.classList.add("anim"),
        cont2.classList.add("anim"),
        sec5Count++
    ):(
        cont1.classList.remove("anim"),
        cont2.classList.remove("anim"),
        sec5Count--
    );
}