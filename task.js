var inputTxt=document.getElementById('in');
var TextAreaDis=document.getElementById('txt')
var div1=document.getElementById('div1')

function Discribe(){
    div1.innerHTML=inputTxt.value+`<br/>`+TextAreaDis.value
}