


let isTimerOn = 0
let clickCount = 0
const rectBox = document.getElementById("clickBox");
var time = 0;

document.getElementById("clickBox").addEventListener("click", function(e) {
    if (isTimerOn == 1)
    {
        clickCount++;
        document.querySelector("#count").innerHTML = clickCount;
        e.target.style.position ='absolute';
        e.target.style.top = Math.floor(Math.random()*90+5)+'%';
        e.target.style.left = Math.floor(Math.random()*90+5)+'%';


    }
    else if(isTimerOn == 0)
    {
        alert("Game is Not active" + " \t previous score is "+ clickCount);
    }
    else
    {
        alert("Click the start game button to begin!");
    }
});


document.getElementById("start").addEventListener("click", function(e) {

      isTimerOn = 1

      startTimer()

});


document.getElementById("stop").addEventListener("click", function(e) {

      isTimerOn = 0

});

document.getElementById("reset").addEventListener("click", function(e) {
      clickCount = 0
      document.getElementById("output").innerHTML = "00:00:00";
      document.querySelector("#count").innerHTML = clickCount;
      isTimerOn = 0
      rectBox.style.position ='absolute';
      rectBox.style.top = null;
      rectBox.style.left = null;

});


function startTimer() {
    if (isTimerOn == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
            if (mins < 10)
            {
              mins = "0" + mins;
            }
            if (secs < 10)
            {
              secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
            startTimer();
        },100);
    }
}
