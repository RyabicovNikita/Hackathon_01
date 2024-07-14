import { Module } from "../core/module";
import {
  handleClickClicksModule,
  handleDoubleClickClicksModule,
} from "../actionsForEvent";

export class ClicksModule extends Module {
  #clickCount;
  #doubleClickCount;
  #duration;
  constructor(type, text) {
    super(type, text);
    this.#clickCount = 0;
    this.#doubleClickCount = 0;
    this.startTime = null;
    this.#duration = 0;
  }

  set setClickCount(count) {
    this.#clickCount += count;
  }

  set setDoubleClickCount(count) {
    this.#doubleClickCount += count;
  }
  //  Метод запускает модуль, запрашивая у пользователя время для отсчета.
  //  Устанавливает обработчики событий для кликов и создает окно статистики.
  trigger() {
    const durationInSecondsInput = prompt(
      "Введите количество секунд для задачи:",
      "5"
    );

    if (durationInSecondsInput !== null && durationInSecondsInput > 0) {
      const durationInSeconds = parseInt(durationInSecondsInput);
      this.#duration = durationInSeconds * 1000;

      if (!this.startTime) {
        this.startTime = Date.now();
        console.log(
          `Отсчет времени начался. У вас ${durationInSeconds} секунд.`
        );

        setTimeout(() => {
          document.addEventListener("click", handleClickClicksModule);
          document.addEventListener("dblclick", handleDoubleClickClicksModule);
        }, 0);
        this.createClicksInfoWindow();

        setTimeout(() => {
          this.showStats();
          this.cleanup();
        }, this.#duration);
      }
    } else if (durationInSecondsInput === null) {
      alert("Операция отменена пользователем.");
    } else {
      alert("Некорректный ввод. Пожалуйста, введите число.");
    }
  }

  // Показывает окно статистики, делая его видимым.
  showStats() {
    const clicksInfo = document.getElementById("clicks-info");
    clicksInfo.style.display = "block";
  }

  // Создает окно статистики кликов и добавляет его в DOM.
  // Добавляет обработчики для закрытия окна.
  createClicksInfoWindow() {
    const clicksInfo = document.createElement("div");
    clicksInfo.id = "clicks-info";
    clicksInfo.style.display = "none"; // Окно изначально скрыто
    clicksInfo.innerHTML = `
            <h2>Статистика кликов</h2>
            <p>Одиночные клики: <span id="single-clicks">${
              this.#clickCount
            }</span></p>
            <p>Двойные клики: <span id="double-clicks">${
              this.#doubleClickCount
            }</span></p>
            <p>Всего кликов: <span id="total-clicks">${
              this.#clickCount + this.#doubleClickCount
            }</span></p>
            <button id="close-btn">Закрыть</button>
        `;
    document.body.appendChild(clicksInfo);
    const closeBtn = document.getElementById("close-btn");

    closeBtn.addEventListener("click", () => {
      clicksInfo.remove();
      this.cleanup();
    });

    clicksInfo.addEventListener("click", () => {
      clicksInfo.remove();
      this.cleanup();
    });
  }

  // Обновляет данные в окне статистики.
  updateClicksInfoWindow() {
    document.getElementById("single-clicks").textContent = this.#clickCount;
    document.getElementById("double-clicks").textContent =
      this.#doubleClickCount;
    document.getElementById("total-clicks").textContent =
      this.#clickCount + this.#doubleClickCount;
  }

  // Очищает данные и удаляет обработчики событий.
  cleanup() {
    document.removeEventListener("click", handleClickClicksModule);
    document.removeEventListener("dblclick", handleDoubleClickClicksModule);
    this.startTime = null;
    this.#duration = 0;
    this.#clickCount = 0;
    this.#doubleClickCount = 0;
  }
}
