// Модуль "Сменить цвет контекстного меню"
import { Module } from '../core/module.js'
import { getRandomColor } from '../utils.js'

export default class MenuColorChangerModule extends Module {
    trigger() {
        const menu = document.querySelector('.menu');
        const menuItems = document.querySelectorAll('.menu-item');
        const color = getRandomColor();
        menu.style.backgroundColor = getRandomColor();

        menuItems.forEach(item => item.style.color = color);
    }
}



