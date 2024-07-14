
import { onContextMenu } from './actionsForEvent';
import { ContextMenu } from './menu';
import BackgroundModule from './modules/background.module';
import ShapeModule from './modules/shape.module';
import MenuColorChanger from './modules/menu.color.changer';
import './styles.css'


//Создаём экземпляр класса контестного меню
const contextMenu = new ContextMenu();


//Добавляем модуль в контекстное меню
const backgroundModule = new BackgroundModule('background', 'Поменять цвет');
contextMenu.add(backgroundModule);

const shapeModule = new ShapeModule('shape', 'Поменять фигуру');
contextMenu.add(shapeModule);

const chengeColor = new MenuColorChanger('color', 'Сменить цвет контекстного меню');
contextMenu.add(chengeColor);

//Здесь вызываем метод .add, передавая туда модуль, тем самым добавляя его в меню (не забывая импортировать)

//Listener на вызов контекстного меню при нажатии ПКМ
document.body.addEventListener('contextmenu', onContextMenu.bind(contextMenu));



