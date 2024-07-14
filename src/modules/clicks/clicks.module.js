import { Module } from "../../core/module";
import "../clicks/clicks.css";

export default class ClicksModule extends Module {
  #clickCount;
  #doubleClickCount;
  #duration;
  constructor(type, text) {
    super(type, text);
    this.#clickCount = 0;
    this.#doubleClickCount = 0;
    this.#duration = 0;
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  //  Метод запускает модуль, запрашивая у пользователя время для отсчета.
  //  Устанавливает обработчики событий для кликов и создает окно статистики.
  trigger() {
    const durationInSecondsInput = prompt(
      "Введите количество секунд для задачи:",
      "5"
    );
    if (!durationInSecondsInput) return;

    if (isNaN(Number(durationInSecondsInput))) {
      alert("Некорректный ввод. Пожалуйста, введите число.");
      return;
    }

    this.#duration = durationInSecondsInput * 1000;

    console.log(
      `Отсчет времени начался. У вас ${durationInSecondsInput} секунд.`
    );
    setTimeout(() => {
      document.addEventListener("click", this.handleClick);
      document.addEventListener("dblclick", this.handleDoubleClick);
    });

    this.createClicksInfoWindow();
    setTimeout(() => {
      this.updateClicksInfoWindow();
      this.showStats();
      this.cleanup();
    }, this.#duration);
  }

  // Обработчик для одиночных кликов
  // Увеличивает счетчик одиночных кликов и обновляет окно статистики.
  handleClick(event) {
    event.preventDefault();
    this.#clickCount += 1;
  }

  // Обработчик для двойных кликов
  // Увеличивает счетчик двойных кликов и обновляет окно статистики.
  handleDoubleClick(event) {
    this.#doubleClickCount += 1;
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
             <p>Всего кликов: <span id="total-clicks">${
               this.#clickCount
             }</span></p>
            <p>Из них двойных кликов: <span id="double-clicks">${
              this.#doubleClickCount
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
    document.getElementById("double-clicks").textContent =
      this.#doubleClickCount;
    document.getElementById("total-clicks").textContent =
      this.#clickCount;
  }

  // Очищает данные и удаляет обработчики событий.
  cleanup() {
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("dblclick", this.handleDoubleClick);
    this.#duration = 0;
    this.#clickCount = 0;
    this.#doubleClickCount = 0;
  }
}
