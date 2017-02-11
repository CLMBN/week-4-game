//Random number between 19 - 120
 var targetNumber = Math.floor(Math.random() * (120-19+1) + 19);
 var counter = 0;
 var wins = 0;
 var loses = 0;
 var myAudio1 = document.getElementById("audio1"); 
 myAudio1.play();

  $("#number-to-guess").text(targetNumber); 
  $("#yourScore").text(counter);
  $("#wins").text(wins);
  $("#loses").text(loses);

//Random number for crystals between 1-12
 var numberCrystal1 = Math.floor(Math.random() * (12-1+1) + 1);
 var numberCrystal2 = Math.floor(Math.random() * (12-1+1) + 1);
 var numberCrystal3 = Math.floor(Math.random() * (12-1+1) + 1);
 var numberCrystal4 = Math.floor(Math.random() * (12-1+1) + 1);
 
 $(".image1").attr("data-crystalvalue", numberCrystal1);
 $(".image2").attr("data-crystalvalue", numberCrystal2);
 $(".image3").attr("data-crystalvalue", numberCrystal3);
 $(".image4").attr("data-crystalvalue", numberCrystal4);

 // This time, our click event applies to every single crystal on the page. Not just one.
 $(".crystal-image").on("click", function() {
   $("#statusMessage").text(" ");
   var crystalValue = ($(this).attr("data-crystalvalue"));
   crystalValue = parseInt(crystalValue);
   counter += crystalValue;
  
  $("#yourScore").text(counter);
   if (counter === targetNumber) {
     counter = 0;
     targetNumber = Math.floor(Math.random() * (120-19+1) + 19);
     $("#statusMessage").text("You Win!");
     wins++;
     $("#wins").text(wins);
     numberCrystal1 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image1").attr("data-crystalvalue", numberCrystal1);
     numberCrystal2 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image2").attr("data-crystalvalue", numberCrystal2);
     numberCrystal3 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image3").attr("data-crystalvalue", numberCrystal3);
     numberCrystal4 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image4").attr("data-crystalvalue", numberCrystal4);
 ;
   }
   else if (counter >= targetNumber) {
     targetNumber = Math.floor(Math.random() * (120-19+1) + 19);
     counter = 0;
     $("#statusMessage").text("You Lose!");
     loses++;
     $("#loses").text(loses);
     numberCrystal1 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image1").attr("data-crystalvalue", numberCrystal1);
     numberCrystal2 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image2").attr("data-crystalvalue", numberCrystal2);
     numberCrystal3 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image3").attr("data-crystalvalue", numberCrystal3);
     numberCrystal4 = Math.floor(Math.random() * (12-1+1) + 1);
     $(".image4").attr("data-crystalvalue", numberCrystal4);
   }
 
  $("#number-to-guess").text(targetNumber); 
  $("#yourScore").text(counter);
 
 });
