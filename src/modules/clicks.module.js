import { Module } from '../core/module'

export default class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    //Сюда добавляем реализацию
    trigger() {
        console.log("ClicksModule")
    }
}