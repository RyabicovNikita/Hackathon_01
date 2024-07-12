import { Module } from '../core/module'

export default class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    //Сюда добавляем реализацию
    trigger() {
        console.log("BackgroundModule")
    }
}