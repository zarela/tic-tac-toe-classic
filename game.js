var played;
var content;
var winnerLines;
var move = 0;
var box;
var value;
var valueText;
var boxPlayed = 0;
var repeatGame;

window.onload=function(){
   played = new Array();
   content = new Array();
   winnerLines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var i = 0; i <= 8; i++){
      played[i] = false;
      content[i]='';
    }
 }

function canvasClicked(canvasNumber){
  box = "canvas"+canvasNumber;
  value = document.getElementById(box);
  valueText = value.getContext("2d");

  if(played[canvasNumber-1] ==false){
    if(move%2==0){
      valueText.beginPath();
      valueText.moveTo(10,10);
      valueText.lineTo(40,40);
      valueText.moveTo(40,10);
      valueText.lineTo(10,40);
      valueText.stroke();
      valueText.closePath();
      content[canvasNumber-1] = 'X';
    }
    else {
      valueText.beginPath();
      valueText.arc(25,25,20,0,Math.PI*2,true);
      valueText.stroke();
      valueText.closePath();
      content[canvasNumber-1] = 'O';
    }
    move++;
    played[canvasNumber-1] = true;
    boxPlayed++;
    CalculatingWinner(content[canvasNumber-1]);
      if(boxPlayed==9){
        alert("Game Over");
        location.reload(true);
      }

    }
    else{
    alert("You cannot played that move");
    }
}

function CalculatingWinner(symbol){
  for(var j = 0; j < winnerLines.length; j++){
    if(content[winnerLines[j][0]]==symbol&&content[winnerLines[j][1]]== symbol&&content[winnerLines[j][2]]==symbol){
      alert(symbol+ " Won!");
      newGame();
    }
    console.log(symbol+ " Played");
  }
}

function newGame(){
  repeatGame=confirm("Do you want to play again?");
  if(repeatGame==true){
    location.reload(true);
  }
  else{
    alert("See you next time!");
  }
}
