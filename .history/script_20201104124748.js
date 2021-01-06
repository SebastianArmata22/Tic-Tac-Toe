const checkComputer= document.getElementById("checkComputer");
const checkPlayer= document.getElementById("checkPlayer");
const checkX= document.getElementById("signX");
const checkO= document.getElementById("signO");
const all_th = document.getElementsByTagName("th");
const choiceSign=document.getElementById("choiceSign");
const sign=document.getElementById("sign");
const signX='x';
const signO='o';
let presentSign;

function unchecked(){
    checkComputer.checked=false;
    checkPlayer.checked=false;
    checkX.checked=false;
    checkO.checked=false;
}
unchecked();

function start(){
    if(checkComputer.checked){
        gameWithComputer();
    }else if(checkPlayer.checked){
        gameWithPlayer();
    }
}

function choiceSquare(square){
    if(square.value=="")
square.innerHTML=presentSign;
if(presentSign==signX){
    presentSign=signO;
}
else{
    presentSign=signX;
}
sign.innerHTML=presentSign;
}
function cleanBoard(){
    for(i=0;i<9;i++){
        all_th[i].innerHTML="";
    }
}
function gameWithPlayer(){
cleanBoard();
presentSign=signX;
sign.innerHTML=presentSign;
}

function showSign(){
    choiceSign.style.display="block";
}

function showSigninHelp(){
    if(checkX.checked){
    sign.innerHTML='x';
    }else if(checkO.checked)
    sign.innerHTML='o';
}
function notDisplaySign(){
    choiceSign.style.display="none";
    sign.innerHTML="";
}
