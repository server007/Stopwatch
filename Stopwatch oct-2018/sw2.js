var sec = 0;
var min = 0;
var hour = 2;
var sec2;
var min2;
var hour2;
var z = "";
var interval = null;
var status = 0;

function timer() {
    if (sec == 0) {
        if (min != 0) {
            min--;
            sec = 60;
        } else {
            if (hour != 0) {
                hour--;
                min = 59;
                sec = 60;
            } else {
                reset();
            }
        }
    }
    sec = sec - 1;

    if (sec < 10) {
        sec2 = "0" + sec.toString();
    } else {
        sec2 = sec.toString();
    }

    if (min < 10) {
        min2 = "0" + min.toString();

    } else {
        min2 = min.toString();
    }
    if (hour < 10) {
        hour2 = "0" + hour.toString();

    } else {
        hour2 = hour.toString();
    }
    z = hour2 + ":" + min2 + ":" + sec2.fontsize(7);
    document.getElementById("display").innerHTML = z.bold();
}

function startstop() {
    if (status == 0) {
        interval = window.setInterval(timer, 1000);
        z = "Stop";
        document.getElementById("startstop").innerHTML = z.bold();
        status = 1;
    } else {
        window.clearInterval(interval);
        z = "Start";
        document.getElementById("startstop").innerHTML = z.bold();
        status = 0;
    }
}

function reset() {
    window.clearInterval(interval);
    hour = 00. toString();
    min = 00. toString();
    sec = "0" + 00. toString();
    status = 0;
    z = "0" + hour + ":0" + min + ":" + sec.fontsize(7);
    document.getElementById("display").innerHTML = z.bold();
    z = "Start";
    document.getElementById("startstop").innerHTML = z.bold();
}