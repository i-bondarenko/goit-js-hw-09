import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onStart);

function onStart(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;
  let delayStep = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    if (i === 1) {
      getResultPromise(i, delayStep);
    } else {
      delayStep += Number(step.value);

      getResultPromise(i, delayStep);
    }
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function getResultPromise(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`,
        {
          timeout: 5000,
        }
      );
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        timeout: 5000,
      });
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}