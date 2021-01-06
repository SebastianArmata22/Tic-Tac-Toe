const checkComputer= document.getElementById("checkComputer");
const checkPlayer= document.getElementById("checkPlayer");
const checkX= document.getElementById("signX");
const checkY= document.getElementById("signO");
const all_th = document.getElementsByTagName("th");
const choiceSign=document.getElementById("choiceSign");
const sign=document.getElementById("sign");
const signX='x';
const signO='o';
let presentSign='X';

function start(){
    if(checkComputer.checked){
        gameWithComputer();
    }else if(checkPlayer.checked){
        gameWithPlayer();
    }
}

function choiceSquare(square){
square.innerHTML=presentSign;
if(presentSign==signX){
    presentSign=signO;
}
else{
    presentSign=signX;
}
sign.innerHTML=presentSign;
}
function gameWithPlayer(){

presentSign=signX;
}
function showSign(){
if(checkPlayer.checked){
    choiceSign.style.display="none";
}else{
    choiceSign.style.display="block";
}
}