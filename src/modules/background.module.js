// Модуль "сменить цвета"
import { Module } from '../core/module'
import { getRandomColor } from '../utils';
export default class BackgroundModule extends Module {
    trigger() {
        document.body.style.backgroundColor = getRandomColor();
    }
}
