import { onContextMenu } from './actionsForEvent'
import { ContextMenu } from './menu'
import MessageModule from './modules/message.module'
import { ClicksModule } from './modules/clicks.module'
import './styles.css'

//Создаём экземпляр класса контестного меню
const contextMenu = new ContextMenu();

// Создаём экземпляры класса ClicksModule и добавляем его в меню
const clicksModule = new ClicksModule('clicks', 'Считать клики');
const randomMessage = new MessageModule('randomMessage', 'Cлучайное сообщение');

//Здесь вызываем метод .add, передавая туда модуль, тем самым добавляя его в меню (не забывая импортировать)
contextMenu.add(clicksModule);
contextMenu.add(randomMessage);

//Listener на вызов контекстного меню при нажатии ПКМ
document.body.addEventListener('contextmenu', onContextMenu.bind(contextMenu));
