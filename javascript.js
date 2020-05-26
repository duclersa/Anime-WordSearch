var wordFind = ['naruto', 'assination classroom', 'haikyuu' , 'bleach', 'yu yu hakusho',
'hunter x hunter', 'soul eater', 'full metal Alchemist brotherhood', 'attack on titans',
'dragonball z', 'fairy tail', 'death note' , 'code geass', 'kill la kill',
' akuma ga kill', 'inuyasha'] //this is the array with all the words

var correctGuesses = []
function FindMeWord() 
{
  
  var myAnswer = document.getElementById("word").value; //this is getting my input
  console.log(myAnswer)
  var value = false;
     for(var i = 0; i < wordFind.length; i++) { //this is where i run the for loop for the array 
     
       if(myAnswer == wordFind[i]) { //if statement to check if input entered is equal to that of the array
         value =  true; 
         window.alert("You found an Anime!"); //if the word is found, then an alert displays saying that it was found

       }  else { //if not then an alert displays that the word has not been found and to try again
          //alert("word not found"); 
     }
  }
      if(value == false) {
       window.alert("OOOPS! Try again, remember all lowercase, several word titles also have spaces!");
      }
}

