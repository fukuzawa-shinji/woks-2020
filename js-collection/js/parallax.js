var translate = document.querySelectorAll(".translate");
window.addEventListener("scroll", ()=>{
  var scroll = window.pageYOffset;
  var First = scroll -1600
  translate.forEach(element =>{
    var speed = element.dataset.speed;
    element.style.transform = `translateY(${First * speed}px)`;
  })
})