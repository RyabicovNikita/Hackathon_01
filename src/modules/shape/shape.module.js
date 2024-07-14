// Модуль "Поменять фигуру"
import { Module } from "../../core/module";
import { random } from "../../utils";
import "./shape.css";

export default class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const secondsTransition = 2;
    const shape = document.createElement("div");
    shape.className = "figure";

    const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;

    shape.style.backgroundColor = color;
    shape.style.width = `${random(50, 200)}px`;
    shape.style.height = `${random(50, 200)}px`;

    shape.style.top = `${random(0, window.innerHeight - 200)}px`;
    shape.style.left = `${random(0, window.innerWidth - 200)}px`;

    if (random(0, 1)) {
      shape.style.borderRadius = "50%";
    } else {
      shape.style.borderRadius = "0";
    }
    shape.style.transition = `opacity ${secondsTransition}s linear`;

    document.body.append(shape);
    setTimeout(() => {
        shape.style.opacity = 0;
        setTimeout(() => {shape.remove()}, secondsTransition*1000);
    }, 500)
    
  }
}
