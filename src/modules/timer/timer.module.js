import { Module } from '../../core/module'
import { getRandomColor } from '../../utils'
import '../timer/timer.css'

export default class TimerModule extends Module {
  constructor(type, text) {
    super(type, text)
    // Переменная для хранения идентификатора интервала
    this.interval = null
  }

  trigger() {
    // Останавливаем текущий таймер, если он существует
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null

      const existingTimerElement = document.querySelector('.timer-element')
      // Удаляем существующий элемент таймера
      if (existingTimerElement) {
        existingTimerElement.remove()
      }
    }

    const time = prompt('Насколько секунд желаете засечь таймер?').trim()
    let seconds = parseInt(time)
    //Проверяем на тип
    if (!isNaN(seconds) && seconds > 0) {
      //создаём элемент в DOM
      const timerElement = document.createElement('div')
      document.body.appendChild(timerElement)
      const resultOfRandomColor = getRandomColor()
      timerElement.style.background = resultOfRandomColor

      function removeTimerElement() {
        timerElement.remove()
      }
      //таймер
      this.interval = setInterval(() => {
        timerElement.className = 'timer-element'
        if (seconds > 0) {
          timerElement.textContent = `Осталось секунд: ${seconds}`
          seconds--
        } else {
          timerElement.textContent = 'Время вышло!'
          clearInterval(this.interval)
          this.interval = null
          setTimeout(removeTimerElement, 2000)
        }
      }, 1000)
    } else {
      alert('Введеное значение не является числом либо меньше или равно нулю!')
    }
  }
}
