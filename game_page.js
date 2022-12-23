player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML = player1name + ":"
document.getElementById("player2name").innerHTML = player2name + ":" 
document.getElementById("player1score").innerHTML = player1score 
document.getElementById("player2score").innerHTML = player2score 
document.getElementById("playerquestion").innerHTML = "question turn-" + player1name
document.getElementById("playeranswer").innerHTML = "answer turn-" + player2name

function send()
{
    number1 = document.getElementById("number1").value 
    number2 = document.getElementById("number2").value 
    aactual_answer = parseInt(number1) * parseInt(number2)

question_number = "<h4>"+number1+"X"+number2+"</h4>"
inputbox = "<br> answer : <input type='text' id='inputcheckbox'>"
checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>check</button>"
row = question_number + inputbox  + checkbutton
document.getElementById("output").innerHTML = row
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
   
questionturn="player1"
answerturn="player2"

function check()
{
get_answer = document.getElementById("inputcheckbox").value;
if(get_answer == actual_answer)
{
    if(answer_turn == "player1")
    {
        player1_score =  player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else
    {
        player2_score =  player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }


    }


    if(questionturn == "player1")
    {
        questionturn = "player2"
        document.getElementById("player_question").innerHTML = "question Turn - " + player2name;

     }
     else
     {
        questionturn = "player1"
        document.getElementById("player_question").innerHTML = "question Turn - " + player1name;
     }
      


     if(answerturn == "player1")
    {
        answerturn = "player2"
        document.getElementById("player_answer").innerHTML = "answer Turn - " + player2name;

     }
     else
     {
        answerturn = "player1"
        document.getElementById("player_answer").innerHTML = "a nswer Turn - " + player1name;
     }
}