import { onContextMenu } from './actionsForEvent'
import ContextMenu from './menu'
import BackgroundModule from './modules/background.module'
import ShapeModule from './modules/shape.module'
import MessageModule from './modules/message/message.module'
import ClicksModule from './modules/clicks/clicks.module'
import TimerModule from './modules/timer/timer.module'
import './styles.css'

//Создаём экземпляр класса контестного меню
const contextMenu = new ContextMenu()

//Здесь вызываем метод .add, передавая туда модуль, тем самым добавляя его в меню (не забывая импортировать)
//Добавляем модуль в контекстное меню
const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
contextMenu.add(backgroundModule)
const shapeModule = new ShapeModule('shape', 'Поменять фигуру')
contextMenu.add(shapeModule)
const clicksModule = new ClicksModule('clicks', 'Считать клики')
contextMenu.add(clicksModule)
const timerModule = new TimerModule('timer', 'Засечь таймер')
contextMenu.add(timerModule)
const randomMessage = new MessageModule('randomMessage', 'Cлучайное сообщение')
contextMenu.add(randomMessage)

//Listener на вызов контекстного меню при нажатии ПКМ
document.body.addEventListener('contextmenu', onContextMenu.bind(contextMenu))
