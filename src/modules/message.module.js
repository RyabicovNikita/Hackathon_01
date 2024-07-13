import { Module } from '../core/module'
import { random } from '../utils'
import { getRandomColor } from '../utils'

export default class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    //импортированная функция, даёт рандмное число из указанных
    const resultOfRandomNumber = random(0, 19)
    //импортированная функция, даёт рандмный цвет
    const resultOfRandomColor = getRandomColor()

    //массив случайных сообщений
    const messages = [
      'Прекрасно выглядите!',
      'Какой сегодня хороший день, правда?',
      'Кушать хочется...',
      'С днём вкусных шоколадок!',
      'Надо бы размяться...',
      'Я точно выключил плиту?',
      'Интересно, я ей нравлюсь?',
      'Самое лучшее случайное сообщение!',
      'Самое худшее случайное сообщение!',
      'Самое красивое случайное сообщение!',
      'Самое веселое случайное сообщение!',
      'Самое скучное случайное сообщение!',
      'Самое интересное случайное сообщение!',
      'Вы победитель по жизни!',
      'Купец!',
      'Как дела?',
      'Нет худа без добра!',
      'Любовь спасёт мир!',
      'Js - one love!',
      'Когда уже реакт?',
      'Пейте больше воды!',
    ]
    //перебираем массив сообщений и ищем по индексу соответствующее рандомному числу из функции
    const result = messages.find((item, index) => {
      return index === resultOfRandomNumber
    })
    //создаём элемент в DOM дереве
    const messageElement = document.createElement('div')
    messageElement.className = 'message-element'
    messageElement.innerText = result
    //меняем цвет фона сообщения на случайный
    messageElement.style.background = resultOfRandomColor

    document.body.appendChild(messageElement)

    //создаем функцию удаления элемента
    function removeElement() {
      messageElement.remove()
    }

    //удаляем элемент спустя некоторое время
    setTimeout(removeElement, 2500)
  }
}
