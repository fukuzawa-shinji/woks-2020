var menuIcon = document.querySelector(".burger-menu");
var navbar = document.querySelector(".burger-nav");

console.log(navbar);

menuIcon .addEventListener("click", function(){
    navbar.classList.toggle("change");
});