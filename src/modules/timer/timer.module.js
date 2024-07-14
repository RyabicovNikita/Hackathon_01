import { Module } from "../../core/module";
import { getRandomColor } from "../../utils";
import "../timer/timer.css";

export default class TimerModule extends Module {
  trigger() {
    let interval = null;
    // Останавливаем текущий таймер, если он существует
    if (interval) {
      clearInterval(interval);
      interval = null;

      const existingTimerElement = document.querySelector(".timer-element");
      // Удаляем существующий элемент таймера
      if (existingTimerElement) {
        existingTimerElement.remove();
      }
    }

    const time = prompt("Насколько секунд желаете засечь таймер?").trim();
    let seconds = parseInt(time);
    //Проверяем на тип
    if (!isNaN(seconds) && seconds > 0) {
      //создаём элемент в DOM
      const timerElement = document.createElement("div");
      document.body.appendChild(timerElement);
      timerElement.style.background = getRandomColor();

      //таймер
      interval = setInterval(() => {
        timerElement.className = "timer-element";
        if (seconds > 0) {
          timerElement.textContent = `Осталось секунд: ${seconds}`;
          seconds--;
        } else {
          timerElement.textContent = "Время вышло!";
          clearInterval(interval);
          interval = null;
          setTimeout(() => timerElement.remove(), 2000);
        }
      }, 1000);
    } else {
      alert("Введеное значение не является числом либо меньше или равно нулю!");
    }
  }
}
