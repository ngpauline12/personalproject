const hamburger = document.querySelector(".menu-icon");

const toggleMenu = function(){
    const list = document.querySelector(".list");
    list.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     hamburger.classList.toggle("active");
//     list.classList.toggle("active");
// }