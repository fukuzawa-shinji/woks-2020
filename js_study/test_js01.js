//Contents 1
function ageInDays(){
    var birthYear = prompt('何年生まれですか？　西暦でお答えください');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('あなたは' + ageInDayss + '歳です。');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('years-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}