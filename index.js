var dicevar1= Math.floor(Math.random()*6)+1;

var xyz1="image/dice"+ dicevar1 +".png";
var img1=document.querySelectorAll(".aaa")[0];
img1.setAttribute("src",xyz1);



var dicevar2= Math.floor(Math.random()*6)+1;

var xyz2="image/dice"+ dicevar2 +".png";
var img2=document.querySelectorAll(".aaa")[1];
img2.setAttribute("src",xyz2);

if(dicevar1> dicevar2){
    document.querySelector("h1").innerHTML=" 🚩PLAYER 1 WINS";
}
else if(dicevar1< dicevar2){
    document.querySelector("h1").innerHTML=" PLAYER 2 WINS 🚩 ";
}
else{
    document.querySelector("h1").innerHTML=" !!!DRAW!!!! ";
}
// document.addEventListener("keypress",abcd);
// function abcd(){
//     location.reload();
// }
 document.querySelector(".sub").addEventListener("click",getclicked);
function getclicked(){
location.reload();
// var sound = new Audio("sound.wav");
// sound.play();
var activeBtn=document.querySelector(".sub");
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}

  