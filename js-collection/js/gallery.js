var modalActive = document.querySelectorAll('.modalBtn');
var modalBase = document.querySelectorAll('.modal');
var closeBtn = document.querySelectorAll('.closebtn');
var modalNum = document.querySelectorAll('.simpleModal');
var cnt = 0;
modalBase.forEach(function(detail) {
    modalActive[cnt].addEventListener('click',function() {
        detail.style.display = 'block';
    });
    closeBtn[cnt].addEventListener('click',function() {
        detail.style.display = 'none';
    });
    modalNum[cnt].addEventListener('click',function() {
        detail.style.display = 'none';
    })
    cnt++;
});