// Модуль "сменить цвета"
import { Module } from '../core/module'
export default class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        function randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }
        document.body.style.backgroundColor = randomColor();
    }
}
