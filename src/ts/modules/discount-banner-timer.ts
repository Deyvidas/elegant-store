const date = new Date('2000-01-02T12:45:05');
const timerDays = document.querySelector('#timerDays') as HTMLDivElement;
const timerHours = document.querySelector('#timerHours') as HTMLDivElement;
const timerMinutes = document.querySelector('#timerMinutes') as HTMLDivElement;
const timerSeconds = document.querySelector('#timerSeconds') as HTMLDivElement;

if (!(timerDays && timerHours && timerMinutes && timerSeconds)) {
    throw new Error('HTMLElement required for the timer activation not found.');
}

function activateTimer() {
    setInterval(() => {
        const day = `0${date.getDate()}`.slice(-2);
        const hour = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);

        if (timerDays.innerText !== day) timerDays.innerText = day;
        if (timerHours.innerText !== hour) timerHours.innerText = hour;
        if (timerMinutes.innerText !== minutes) timerMinutes.innerText = minutes;
        if (timerSeconds.innerText !== seconds) timerSeconds.innerText = seconds;
        date.setSeconds(date.getSeconds() - 1);
    }, 1000);
}

export { activateTimer };
