
//Setting the timer display
document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start')
  timeLeft = 58

  function countdown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -= 1
    }, 1000)
  }
  startBtn.addEventListener('click', countdown)
})



//in this function we can check the correct answer
function getRadioValue() {

  var score = 0;
  if (document.getElementById('True1').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True2').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True3').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True4').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True5').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True6').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True7').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }
  if (document.getElementById('True8').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True9').checked) {
    score = score + 2;
  } else {
    score = score - 1;
  }

  if (document.getElementById('True10').checked) {
    score = score + 2;
  } else {
    score= score-1;
  }
  //Bckground color
  if (score == 0 || score < 0) {//changing background color according to marks
    document.body.style.backgroundColor = "red";
    alert("You scored: " + score + " marks");
  } else if (score <= 10 && score > 0) {
    document.body.style.backgroundColor = "orange";
    alert("you scored: " + score + " marks");
  } else if (score > 10 && score < 20) {
    document.body.style.backgroundColor = "yellow";
    alert("you scored: " + score + " marks");
  } else if (score == 20) {
    document.body.style.backgroundColor = "green";
    alert("you scored: " + score + " marks");
    //  window.location="begin_quiz.html"//sending winner to a new page which will announce the news and generate a voucher code.
  }



}
function btnColor() {//to make sure start button was clicked
  document.getElementById('start').style.backgroundColor = "blue";
}

document.getElementById('True1').disabled = true;
document.getElementById('False1.1').disabled = true;
document.getElementById('False1.2').disabled = true;
document.getElementById('False1.3').disabled = true;

document.getElementById('True2').disabled = true;
document.getElementById('False2.1').disabled = true;
document.getElementById('False2.2').disabled = true;
document.getElementById('False2.3').disabled = true;

document.getElementById('True3').disabled = true;
document.getElementById('False3.1').disabled = true;
document.getElementById('False3.2').disabled = true;
document.getElementById('False3.3').disabled = true;

document.getElementById('True4').disabled = true;
document.getElementById('False4.1').disabled = true;
document.getElementById('False4.2').disabled = true;
document.getElementById('False4.3').disabled = true;

document.getElementById('True5').disabled = true;
document.getElementById('False5.1').disabled = true;
document.getElementById('False5.2').disabled = true;
document.getElementById('False5.3').disabled = true;

document.getElementById('True6').disabled = true;
document.getElementById('False6.1').disabled = true;
document.getElementById('False6.2').disabled = true;
document.getElementById('False6.3').disabled = true;

document.getElementById('True7').disabled = true;
document.getElementById('False7.1').disabled = true;
document.getElementById('False7.2').disabled = true;
document.getElementById('False7.3').disabled = true;

document.getElementById('True8').disabled = true;
document.getElementById('False8.1').disabled = true;
document.getElementById('False8.2').disabled = true;
document.getElementById('False8.3').disabled = true;

document.getElementById('True9').disabled = true;
document.getElementById('False9.1').disabled = true;
document.getElementById('False9.2').disabled = true;
document.getElementById('False9.3').disabled = true;

document.getElementById('True10').disabled = true;
document.getElementById('False10.1').disabled = true;
document.getElementById('False10.2').disabled = true;
document.getElementById('False10.3').disabled = true;





function enable() {//enables all radio buttons
  document.getElementById('False1.1').disabled = false;
  document.getElementById('True1').disabled = false;
  document.getElementById('False1.2').disabled = false;
  document.getElementById('False1.2').disabled = false;

  document.getElementById('False2.1').disabled = false;
  document.getElementById('True2').disabled = false;
  document.getElementById('False2.2').disabled = false;
  document.getElementById('False2.3').disabled = false;

  document.getElementById('False3.1').disabled = false;
  document.getElementById('True3').disabled = false;
  document.getElementById('False3.2').disabled = false;
  document.getElementById('False3.3').disabled = false;

  document.getElementById('False4.1').disabled = false;
  document.getElementById('True4').disabled = false;
  document.getElementById('False4.2').disabled = false;
  document.getElementById('False4.3').disabled = false;

  document.getElementById('False5.1').disabled = false;
  document.getElementById('True5').disabled = false;
  document.getElementById('False5.2').disabled = false;
  document.getElementById('False5.3').disabled = false;

  document.getElementById('False6.1').disabled = false;
  document.getElementById('True6').disabled = false;
  document.getElementById('False6.2').disabled = false;
  document.getElementById('False6.3').disabled = false;

  document.getElementById('False7.1').disabled = false;
  document.getElementById('True7').disabled = false;
  document.getElementById('False7.2').disabled = false;
  document.getElementById('False7.3').disabled = false;

  document.getElementById('False8.1').disabled = false;
  document.getElementById('True8').disabled = false;
  document.getElementById('False8.2').disabled = false;
  document.getElementById('False8.3').disabled = false;

  document.getElementById('False9.1').disabled = false;
  document.getElementById('True9').disabled = false;
  document.getElementById('False9.2').disabled = false;
  document.getElementById('False9.3').disabled = false;

  document.getElementById('False10.1').disabled = false;
  document.getElementById('True10').disabled = false;
  document.getElementById('False10.2').disabled = false;
  document.getElementById('False10.3').disabled = false;
}
document.getElementById("start").addEventListener("click", enable);


function disable() {//disables all radio buttons
  document.getElementById('True1').disabled = true;
  document.getElementById('False1.1').disabled = true;
  document.getElementById('False1.2').disabled = true;
  document.getElementById('False1.3').disabled = true;

  document.getElementById('True2').disabled = true;
  document.getElementById('False2.1').disabled = true;
  document.getElementById('False2.2').disabled = true;
  document.getElementById('False2.3').disabled = true;

  document.getElementById('True3').disabled = true;
  document.getElementById('False3.1').disabled = true;
  document.getElementById('False3.2').disabled = true;
  document.getElementById('False3.3').disabled = true;

  document.getElementById('True4').disabled = true;
  document.getElementById('False4.1').disabled = true;
  document.getElementById('False4.2').disabled = true;
  document.getElementById('False4.3').disabled = true;

  document.getElementById('True5').disabled = true;
  document.getElementById('False5.1').disabled = true;
  document.getElementById('False5.2').disabled = true;
  document.getElementById('False5.3').disabled = true;

  document.getElementById('True6').disabled = true;
  document.getElementById('False6.1').disabled = true;
  document.getElementById('False6.2').disabled = true;
  document.getElementById('False6.3').disabled = true;

  document.getElementById('True7').disabled = true;
  document.getElementById('False7.1').disabled = true;
  document.getElementById('False7.2').disabled = true;
  document.getElementById('False7.3').disabled = true;

  document.getElementById('True8').disabled = true;
  document.getElementById('False8.1').disabled = true;
  document.getElementById('False8.2').disabled = true;
  document.getElementById('False8.3').disabled = true;

  document.getElementById('True9').disabled = true;
  document.getElementById('False9.1').disabled = true;
  document.getElementById('False9.2').disabled = true;
  document.getElementById('False9.3').disabled = true;

  document.getElementById('True10').disabled = true;
  document.getElementById('False10.1').disabled = true;
  document.getElementById('False10.2').disabled = true;
  document.getElementById('False10.3').disabled = true;
}