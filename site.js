var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var bgvid = document.getElementById('bgvid');
var bgvidtwo = document.getElementById('bgvidtwo');

function initSuccess() {
    DiffCamEngine.start();
}

function initError() {
    alert('Something went wrong.');
}

function capture(payload) {

    if (payload.score > 150) {
        bgvid.style.display = "block";
        bgvidtwo.style.display = "none";
        bgvidtwo.pause();
        bgvid.play();
    } else {
        bgvid.pause();
        bgvid.style.display = "none";
        bgvidtwo.style.display = "block";
        bgvidtwo.play();
    }
    //    score.textContent = payload.score;
}

DiffCamEngine.init({
    video: video,
    motionCanvas: canvas,
    initSuccessCallback: initSuccess,
    initErrorCallback: initError,
    captureCallback: capture
});
