const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body'),
}

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick(event) {
    event.target.disabled = true;
    refs.btnStop.removeAttribute('disabled');
    timerId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onBtnStopClick(event) {
    refs.btnStart.removeAttribute('disabled');
    event.target.disabled = true;
    clearInterval(timerId);
}
