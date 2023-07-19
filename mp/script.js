var song=new Audio("s.mp3");
var pl=document.getElementById("pl");
var po=document.getElementById("po");
pl.addEventListener("click", function () {

    song.play();
    })
    po.addEventListener("click",function() {
        song.pause()
        
    })