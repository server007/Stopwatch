var nan = 0;
var sec = 0;
var min = 0;
var nan2 = 0;
var sec2 = 0;
var min2 = 0;
var i = 1;
Array[10] = new Array();
var z = "";
var y = "";
var interval = null;
var status = 0;

function stopwatch() {
    nan++;
    if (nan / 100 == 1) {
        nan = 0;
        sec++;
        if (sec / 60 == 1) {
            sec = 0;
            min++;
        }
    }

    if (nan < 10) {
        nan2 = "0" + nan.toString();

    } else {
        nan2 = nan.toString();
    }

    if (sec < 10) {
        sec2 = "0" + sec.toString();

    } else {
        sec2 = sec;
    }
    if (min < 10) {
        min2 = "0" + min.toString();

    } else {
        min2 = min;
    }
    y = min2 + ":" + sec2 + ":" + nan2.fontsize(7);
    document.getElementById("display").innerHTML = y.bold();
}
var audio = new Audio('rain.mp3');

function startstop() {
    if (status == 0) {
        interval = window.setInterval(stopwatch, 10);
        audio.play();
        z = "Stop";
        document.getElementById("startstop").innerHTML = z.bold();
        status = 1;
    } else {
        window.clearInterval(interval);
        audio.pause();
        z = "Start";
        document.getElementById("startstop").innerHTML = z.bold();
        status = 0;
    }
}

function lap() {
    Array[i] = y;
    switch (i) {
        case 1:
            document.getElementById("lap1").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 2:
            document.getElementById("lap2").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 3:
            document.getElementById("lap3").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 4:
            document.getElementById("lap4").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 5:
            document.getElementById("lap5").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 6:
            document.getElementById("lap6").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        case 7:
            document.getElementById("lap7").innerHTML = Array[i].fontsize(6);
            i++;
            break;
        default:
            break;
    }
}

function reset() {
    window.clearInterval(interval);
    sec = 00. toString();
    min = 00. toString();
    nan = 0;
    audio.pause();
    nan = "0" + nan.toString();
    status = 0;
    z = "0" + min + ":0" + sec + ":" + nan.fontsize(7);
    document.getElementById("display").innerHTML = z.bold();
    z = "Start";
    document.getElementById("startstop").innerHTML = z.bold();
}