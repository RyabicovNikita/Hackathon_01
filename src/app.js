import { onContextMenu } from './actionsForEvent'
import { ContextMenu } from './menu'
import MessageModule from './modules/message.module'
import './styles.css'

//Создаём экземпляр класса контестного меню
const contextMenu = new ContextMenu()

//Здесь вызываем метод .add, передавая туда модуль, тем самым добавляя его в меню (не забывая импортировать)
const randomMessage = new MessageModule('randomMessage', 'Cлучайное сообщение')
contextMenu.add(randomMessage)
//Listener на вызов контекстного меню при нажатии ПКМ
document.body.addEventListener('contextmenu', onContextMenu.bind(contextMenu))
