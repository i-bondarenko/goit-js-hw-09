import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import '../css/timer.css';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        const startTime = Date.now();
        const calendarTime = new Date(selectedDates[0]);

        if (calendarTime < startTime) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // alert('Please choose a date in the future');
        } else {
            refs.btnStartEl.removeAttribute('disabled');
        }
    },
};

flatpickr('#datetime-picker', options);

const refs = {
    btnStartEl: document.querySelector('[data-start]'),
    inputEl: document.querySelector('#datetime-picker'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
}

refs.btnStartEl.disabled = true;

clearCalendar();

function clearCalendar() {
    refs.inputEl.value = '';
}
class Timer {
    constructor({ onTick }) {
        this.timerId = null;
        this.isActive = false;
        this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return;
        }

        const selectedTime = new Date(refs.inputEl.value).getTime();
        this.isActive = true;

        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = selectedTime - currentTime;
            // console.log(deltaTime);

            if (deltaTime < 0) {
                // console.log(deltaTime);
                clearInterval(this.timerId);
            } else {
                const time = this.convertMs(deltaTime);

                this.onTick(time);
            }
        }, 1000);
    }

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = this.addLeadingZero(Math.floor(ms / day));
        // Remaining hours
        const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.addLeadingZero(
            Math.floor(((ms % day) % hour) / minute)
        );
        // Remaining seconds
        const seconds = this.addLeadingZero(
            Math.floor((((ms % day) % hour) % minute) / second)
        );

        return { days, hours, minutes, seconds };
    }

    addLeadingZero(value) {
        return String(value).padStart(2, '0');
    }
}

const newTimer = new Timer({ onTick: changeValueTimer });

refs.btnStartEl.addEventListener('click', () => {
    newTimer.start();
});

function changeValueTimer(obj) {
    refs.daysEl.textContent = obj.days;
    refs.hoursEl.textContent = obj.hours;
    refs.minutesEl.textContent = obj.minutes;
    refs.secondsEl.textContent = obj.seconds;
}