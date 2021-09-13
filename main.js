document.getElementById('player').addEventListener("mouseover",addScore);

score = 0;
time = 60;
necessary = 30;


function addScore (){

  

    score++;
    document.getElementById("score").innerHTML = "Puntos: <b>" + score + "/" + necessary + "</b>";
    
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";

    if (score == 30) {

        time = 60;
        score = 0;
        alert("Ganaste");

    }

 }

function subtractTime() {
    time--;
    document.getElementById("time").innerHTML = " &nbsp;&nbsp;&nbsp;Tiempo: " + time;

    if (time == 0) {

        time = 60;
        score = 0;
        alert("Perdiste");

    }
}

setInterval (subtractTime, 1000);


