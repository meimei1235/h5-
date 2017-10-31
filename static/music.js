var play = document.getElementById("play-pic");
var music = document.getElementById("music");
var flag = false;
play.onclick = function() {
    if (flag) {
        music.pause();
        this.className = "play-pic";
        // flag = !flag;
    } else {
        music.play();
        this.className = "play-pic rotate";

    }
    flag = !flag;
}
var html = "";
var txt = document.getElementById("txt").value;
// var fso = new ActiveXObject("Scripting.FileSystemObject");
// var f = fso.opentextfile("谭嘉仪-小幸运.txt",1,true);   
var arr = txt.split("[");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(']');
    var time = arr[i][0].split(".")[0];
    var times = parseInt(time.split(':')[0]) * 60 + parseInt(time.split(':')[1]);
    // console.log(times);
    if (arr[i][1]) {
        html += "<p id=" + times + ">" + arr[i][1] + "</p>";
    }
    // console.log(arr[i][1]);
}
var lrcContent = document.getElementById("lrc-content");
lrcContent.innerHTML = html;
var ap = document.getElementsByTagName("p");
var count = 0;
music.addEventListener("timeupdate", function() {
    // console.log(this.currentTime);
    var currentTime = parseInt(this.currentTime);
    var currentNode = document.getElementById(currentTime);
    // console.log(currentTime);
    if (currentNode) {
        for (var i = 0; i < ap.length; i++) {
            ap[i].style.color = "#fff";
            ap[i].style.fontSize = "16px";
        }
        currentNode.style.color = "red";
        currentNode.style.fontSize = "18px";
        if (ap[7 + count].id == currentTime) {
            lrcContent.style.top = -23 * (count++) + "px";
        }
    }
});