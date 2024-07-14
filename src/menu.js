import { Module } from './core/module'
import { Menu } from './core/menu'
import { onElementMenuClick } from './actionsForEvent';

export default class ContextMenu extends Menu {
    constructor(selector = "#menu") {
        super(selector);
    }
    //Перемещает контекстное меню по координатам клика
    moveToCoordinate(x, y) {
        if (!this.el) return;
        this.el.style.left = x + "px";
        this.el.style.top = y + "px";
    }
    open() {
        //Если контекстное меню существует и не содержит класс open добавляем 
        if (this.el && !this.el.classList.contains('open')) this.el.classList.add('open');
    }
    close() {
        //Если контекстное меню существует и содержит класс open удаляем 
        if (this.el && this.el.classList.contains('open')) this.el.classList.remove('open');
    }
    add(newModule) {
        if(!this.el) return;
        //Если модуль передан и принадлежит к классу Module
        if (newModule && newModule instanceof Module) {
            //Т.к. метод toHTML() отдаёт нам String чтобы повесить addEventListener нужно сначала преобразовать его к HTML
            const blockDiv = document.createElement('div');
            blockDiv.innerHTML = newModule.toHTML();
            const elementMenu = blockDiv.querySelector('.menu-item');
            if(!elementMenu) return;
            elementMenu.addEventListener('click', onElementMenuClick.bind(newModule));
            //Добавляем модуль в контекстное меню
            this.el.append(elementMenu);
        } else {
            //Если с модулем что то не так создаём исключение, но чтобы не останавливать работу программы сразу обрабатываем, выводя пользователю сообщение об ошибке и дублируем в консоль
            try {
                throw new Error('Один из модулей контекстного меню был передан некорректно.');
            }
            catch(error) {
                console.error(error);
                alert(error);
            }
        }
    }
}