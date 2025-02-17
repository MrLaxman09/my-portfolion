let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightMenu = document.querySelector('.right-menu');
// let navbar = document.querySelector('.navbar');

burger.addEventListener('click', ()=>{
    navList.classList.toggle('visiblity-nav-resp')
    rightMenu.classList.toggle('visiblity-nav-resp')
    navbar.classList.toggle('hamberger-nav-resp')
})