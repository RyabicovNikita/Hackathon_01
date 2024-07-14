export default class HistoryMenu {
    #historyBlock = document.querySelector('.history-list')
    constructor(text) {
        this.text = text;
    }
    addNewRow() {
        if(!this.#historyBlock) return;
        const row = document.createElement('li');
        row.className = 'history-row';
        row.textContent = `В контектном меню была нажата кнопка "${this.text}"`;
        this.#historyBlock.append(row);
    }
}