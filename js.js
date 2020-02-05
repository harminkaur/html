function nextQ1(){
    document.getElementById('Q1').style.display = "none";
    document.getElementById('Q2').style.display = "block";
    
}

function nextQ2(){
    document.getElementById('Q2').style.display = "none";
    document.getElementById('Q3').style.display = "block";
}

function nextQ3(){
    document.getElementById('Q3').style.display = "none";
    document.getElementById('Q4').style.display = "block";
}

function nextQ4(){
    document.getElementById('Q4').style.display = "none";
    document.getElementById('Q5').style.display = "block";
}

function nextQ5(){
    document.getElementById('Q5').style.display = "none";
    document.getElementById('Q6').style.display = "block";
}

function nextQ6(){
    document.getElementById('Q6').style.display = "none";
    document.getElementById('Q7').style.display = "block";
}

function nextQ7(){
    document.getElementById('Q7').style.display = "none";
    document.getElementById('Q8').style.display = "block";
}

function nextQ8(){
    document.getElementById('Q8').style.display = "none";
    document.getElementById('Q9').style.display = "block";
}

function nextQ9(){
    document.getElementById('Q9').style.display = "none";
    document.getElementById('Q10').style.display = "block";
}


function nextQ10(){
    document.getElementById('Q10').style.display = "none";
    
}

//document.getElementById('Q11').style.display = "block";
//function nextQ11(){
  //  document.getElementById('Q11').style.display = "none";
    //document.getElementById('Q11').style.display = "block";
//}

function prevQ1(){
    document.getElementById('Q1').style.display = "block";
    document.getElementById('Q2').style.display = "none";
}


function prevQ2(){
    document.getElementById('Q2').style.display = "block";
    document.getElementById('Q3').style.display = "none";
}


function prevQ3(){
    document.getElementById('Q3').style.display = "block";
    document.getElementById('Q4').style.display = "none";
}


function prevQ4(){
    document.getElementById('Q4').style.display = "block";
    document.getElementById('Q5').style.display = "none";
}


function prevQ5(){
    document.getElementById('Q5').style.display = "block";
    document.getElementById('Q6').style.display = "none";
}


function prevQ6(){
    document.getElementById('Q6').style.display = "block";
    document.getElementById('Q7').style.display = "none";
}


function prevQ7(){
    document.getElementById('Q7').style.display = "block";
    document.getElementById('Q8').style.display = "none";
}


function prevQ8(){
    document.getElementById('Q8').style.display = "block";
    document.getElementById('Q9').style.display = "none";
}


function prevQ9(){
    document.getElementById('Q9').style.display = "block";
    document.getElementById('Q10').style.display = "none";
}


function prevQ10(){
    document.getElementById('Q10').style.display = "block";
    document.getElementById('Q10').style.display = "none";
}


var answers = ["Ottawa","Berlin","London","Canberra","Washington, D.C.","Rome","Paris","Wellington","New Delhi","Islamabad"];

function getCheckedValue(radioName){
  var radios = document.getElementsByName( radioName ); //get radio group by name

for (var y=0; y<radios.length; y++)
{
if(radios[y].checked){
  return radios[y].value; ///return checked value
}
}
}

function getScore(){

   var score=0;

   for (var i=0; i<10; i++) {

   if(getCheckedValue("question"+i) == answers[i]){
    score +=1; //increment only
   }
   else score+=0;
   
      }
      return score;
    }
      function returnScore(){
          if (getScore()<=5){
  
      alert("Too bad... your score is " + getScore() +"/"+ 10);
      document.getElementById('unhappy').style.display = "block"}
          else if(getScore()>5 && getScore()<10){
          alert("Great Job!!! your score is "+ getScore() +"/"+ 10);
          document.getElementById('happy').style.display = "block"}
          else {
          alert("Perfect Score 10/10");
          document.getElementById('perfect').style.display = "block";
          } 
        }
  
/*another function i was trying:
var userInput = new Array();

var answers = new Array(10);

answers[0] = "Ottawa";

answers[1] = "Berlin";

answers[2] = "London";

answers[3] = "Canberra";

answers[4] = "Washington, D.C.";

answers[5] = "Rome";

answers[6] = "Paris";

answers[7] = "Wellington";

answers[8] = "New Delhi";

answers[9] = "Islamabad";

 

function getScore(){

   var score=0;

   var numQuestions=10;

 

   for(var i=0;i<numQuestions;i++){

      if (userInput[i]==answers[i]){

         score +=1;

      

      }

      else{

         score +=0;

      }

   }

    return score;

}

function returnScore(){

   alert("Your score is "+getScore()+"/10"); */


