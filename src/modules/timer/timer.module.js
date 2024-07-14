import { Module } from '../../core/module'
import { getRandomColor } from '../../utils'
import '../timer/timer.css'

export default class TimerModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  trigger() {
    const time = prompt('Насколько секунд желаете засечь таймер?').trim()
    let seconds = parseInt(time)

    if (!isNaN(seconds) && seconds > 0) {
      const timerElement = document.createElement('div')
      document.body.appendChild(timerElement)
      const resultOfRandomColor = getRandomColor()
      timerElement.style.background = resultOfRandomColor

      function removeTimerElement() {
        timerElement.remove()
      }
      const interval = setInterval(() => {
        timerElement.className = 'timer-element'
        if (seconds > 0) {
          timerElement.textContent = `Осталось секунд: ${seconds}`
          seconds--
        } else {
          timerElement.textContent = 'Время вышло!'
          clearInterval(interval)
          setTimeout(removeTimerElement, 2000)
        }
      }, 1000)
    } else {
      alert('Введеное значение не является числом либо меньше или равно нулю!')
    }
  }
}
