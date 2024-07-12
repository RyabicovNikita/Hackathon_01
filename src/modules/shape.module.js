import { Module } from '../core/module'

export default class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    //Сюда добавляем реализацию
    trigger() {
        console.log("ShapeModule")
    }
}