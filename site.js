var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
var bgvid = document.getElementById('bgvid');

function initSuccess() {
    DiffCamEngine.start();
}

function initError() {
    alert('Something went wrong.');
}

function capture(payload) {

    if (payload.score > 250) {
        bgvid.play();
    } else bgvid.pause();
    score.textContent = payload.score;
}

DiffCamEngine.init({
    video: video,
    motionCanvas: canvas,
    initSuccessCallback: initSuccess,
    initErrorCallback: initError,
    captureCallback: capture
});
