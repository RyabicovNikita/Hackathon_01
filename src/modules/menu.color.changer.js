// Модуль "Сменить цвет контекстного меню"
import { Module } from '../core/module.js'
import { random } from '../utils.js'

export default class MenuColorChanger extends Module {
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        const menu = document.querySelector('.menu');
        const menuItems = document.querySelectorAll('.menu-item');
        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

        menu.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

        menuItems.forEach(item => {
            item.style.color = color;
        });
    }
}



