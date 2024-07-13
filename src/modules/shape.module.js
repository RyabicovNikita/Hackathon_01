// Модуль "Поменять фигуру"
import { Module } from '../core/module'

export default class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    trigger() {
        let shape;
        function generateRandomShape() {
            if (shape) {
                return;
            }
            function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            shape = document.createElement('div');

            const color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

            shape.style.backgroundColor = color;
            shape.style.width = `${getRandomNumber(50, 200)}px`;
            shape.style.height = `${getRandomNumber(50, 200)}px`;

            shape.style.position = 'absolute';
            shape.style.top = `${getRandomNumber(0, window.innerHeight - 200)}px`;
            shape.style.left = `${getRandomNumber(0, window.innerWidth - 200)}px`;

            document.body.append(shape);

            if (getRandomNumber(0, 1)) {
                shape.style.borderRadius = '50%';
            } else {
                shape.style.borderRadius = '0';
            }
            setTimeout(() => {
                shape.style.opacity = 0;
                shape.style.transition = 'opacity 10s';
            }, 0);
        }
        document.addEventListener(`click`, generateRandomShape);
    }

}