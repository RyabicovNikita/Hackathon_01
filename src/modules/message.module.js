import { Module } from '../core/module'
import { random } from '../utils'

export default class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
  }
  // createMessageElement(message) {
  //   const messageElement = document.createElement('div')
  //   messageElement.className = 'message-element'
  //   messageElement.innerText = message
  //   document.body.appendChild(messageElement)
  // }
  trigger() {
    //импортированная функция, даёт рандмное число из указанных
    const resultOfRandom = random(0, 13)
    //массив случайных сообщений
    const messages = [
      'Прекрасно выглядите!',
      'Какой сегодня хороший день, правда?',
      'Кушать хочется...',
      'С днём вкусных шоколадок!',
      'Надо бы размяться...',
      'Я точно выключил плиту?',
      'Интересно, я ей нравлюсь?',
      'Самое лучшее случайное сообщение',
      'Самое худшее случайное сообщение',
      'Самое красивое случайное сообщение',
      'Самое веселое случайное сообщение',
      'Самое скучное случайное сообщение',
      'Самое интересное случайное сообщение',
      'Вы победитель по жизни!',
    ]
    //перебираем массив сообщений и ищем по индексу соответствующее рандомному числу из функции
    const result = messages.find((item, index) => {
      return index === resultOfRandom
    })
    //создаём элемент в DOM дереве
    const messageElement = document.createElement('div')
    messageElement.className = 'message-element'
    messageElement.innerText = result
    document.body.appendChild(messageElement)

    function removeElement() {
      messageElement.remove()
    }

    setTimeout(removeElement, 2500)
  }
}
