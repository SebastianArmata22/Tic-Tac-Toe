const checkComputer= document.getElementById("checkComputer");
const checkPlayer= document.getElementById("checkPlayer");
const all_th = document.getElementsByTagName("th");
const signX='x';
const signO='o';
let presentSign;

function start(){
    if(checkComputer.checked){
        gameWithComputer();
    }else if(checkPlayer.checked){
        gameWithPlayer();
    }
}

function choiceSquare(square){
square.innerHTML=presentSign;
if(presentSign==signX)
presentSign=signO;
else
presentSign=signX;
}
function gameWithPlayer(){
presentSign=signX;
}