const checkComputer= document.getElementById("checkComputer");
const checkPlayer= document.getElementById("checkPlayer");
const checkX= document.getElementById("signX");
const checkO= document.getElementById("signO");
const all_th = document.getElementsByTagName("th");
const choiceSign=document.getElementById("choiceSign");
const sign=document.getElementById("sign");
const winText=document.getElementById("winText");

const signX='x';
const signO='o';
let presentSign;
let array_signs=[];

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
    for(i=0;i<9;i++){
        array_signs[i]="";
    }
}

function choiceSquare(square, number){
    if(array_signs[number]=="")
    {
        square.innerHTML=presentSign;
    array_signs[number]=presentSign;
    checkWin();
    if(presentSign==signX){
        presentSign=signO;
    }
    else{
        presentSign=signX;
    }
    sign.innerHTML=presentSign;
    }

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

function checkWin(){
if(array_signs[0]==array_signs[1]==array_signs[2]=='x'
    ||array_signs[3]==array_signs[4]==array_signs[5]=='x'
    ||array_signs[6]==array_signs[7]==array_signs[8]=='x'
    ||array_signs[0]==array_signs[3]==array_signs[6]=='x'
    ||array_signs[1]==array_signs[4]==array_signs[7]=='x'
    ||array_signs[2]==array_signs[5]==array_signs[8]=='x'
    ||array_signs[0]==array_signs[4]==array_signs[8]=='x'
    ||array_signs[2]==array_signs[4]==array_signs[6]=='x')
    {
        winText.innerHTML="Zwycięstwo dla "+presentSign;
    }
}
