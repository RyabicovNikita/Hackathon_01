// Модуль "Поменять фигуру"
import { Module } from '../core/module'
import { random } from '../utils'

export default class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        let shape;
        if (shape) {
            return;
        }
        shape = document.createElement('div');

        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

        shape.style.backgroundColor = color;
        shape.style.width = `${random(50, 200)}px`;
        shape.style.height = `${random(50, 200)}px`;

        shape.style.position = 'absolute';
        shape.style.top = `${random(0, window.innerHeight - 200)}px`;
        shape.style.left = `${random(0, window.innerWidth - 200)}px`;

        document.body.append(shape);

        if (random(0, 1)) {
            shape.style.borderRadius = '50%';
        } else {
            shape.style.borderRadius = '0';
        }
        setTimeout(() => {
            shape.style.opacity = 0;
            shape.style.transition = 'opacity 10s';
        }, 0);
    }
}