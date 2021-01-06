const checkComputer= document.getElementById("checkComputer");
const checkPlayer= document.getElementById("checkPlayer");
const checkX= document.getElementById("signX");
const checkO= document.getElementById("signO");
const all_th = document.getElementsByTagName("th");
const choiceSign=document.getElementById("choiceSign");
const sign=document.getElementById("sign");
const winText=document.getElementById("winText");
const helpDiv=document.getElementsByClassName("help-div");

const signX='x';
const signO='o';
let presentSign;
let array_signs=[];
let win=false;
let computerSign;
let playerSign;

function unchecked(){
    checkComputer.checked=false;
    checkPlayer.checked=false;
    checkX.checked=false;
    checkO.checked=false;
}
unchecked();

function start(){
    win=false;
    for(i=0;i<9;i++){
        array_signs[i]="";
    }
    if(checkComputer.checked){
        gameWithComputer();
        helpDiv[0].style.display='none';
    }else if(checkPlayer.checked){
        gameWithPlayer();
    }
    winText.innerHTML="";
}

function gameWithComputer(){
    cleanBoard();
    if(checkX.checked){
        computerSign=signO;
        playerSign=signX;
    }else if(checkO.checked){
        computerSign=signX;
        playerSign=signO;
    }
    presentSign=playerSign;
}
function moveComputer(){
    const position=Math.floor(Math.random()*9);
    if(!checkWin()){
        if(array_signs[position]==''){
        all_th[position].innerHTML=presentSign;
        changeOfSign();
        } else{
            console.log('jescze raz');
            moveComputer();
        }
    }
}
function changeOfSign(){
    if(!checkWin())
    if(presentSign==signX){
        presentSign=signO;
        }
        else{
        presentSign=signX;
        }
        sign.innerHTML=presentSign;
}

function choiceSquare(square, number){
    console.log(number);
    if(win==false)
    if(array_signs[number]=="")
    {
        square.innerHTML=presentSign;
        array_signs[number]=presentSign;
        changeOfSign();
    }

    if(checkComputer.checked)
    {
        moveComputer();
        console.log("jjj");
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
    console.log(array_signs[0]==array_signs[1]&&array_signs[1]==array_signs[2]);
if(array_signs[0]==array_signs[1]&&array_signs[1]==array_signs[2]&&array_signs[0]!=''
    ||array_signs[3]==array_signs[4]&&array_signs[4]==array_signs[5]&&array_signs[3]!=''
    ||array_signs[6]==array_signs[7]&&array_signs[7]==array_signs[8]&&array_signs[6]!=''
    ||array_signs[0]==array_signs[3]&&array_signs[3]==array_signs[6]&&array_signs[0]!=''
    ||array_signs[1]==array_signs[4]&&array_signs[4]==array_signs[7]&&array_signs[1]!=''
    ||array_signs[2]==array_signs[5]&&array_signs[8]==array_signs[5]&&array_signs[2]!=''
    ||array_signs[0]==array_signs[4]&&array_signs[4]==array_signs[8]&&array_signs[0]!=''
    ||array_signs[2]==array_signs[4]&&array_signs[4]==array_signs[6]&&array_signs[2]!='')
    {
        winText.innerHTML="Zwycięstwo dla "+presentSign;
        win=true;
        return true;
    }
else{
        return false;
    }
}
