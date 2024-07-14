import { Module } from "../../core/module";

export default class ThemeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.currentTheme = "light";
  }

  trigger() {
    const root = document.body;
    const contextMenu = document.querySelector(".menu");
    const itemsMenu = document.querySelectorAll(".menu-item");

    if (this.currentTheme === "light") {
      root.style.backgroundColor = "white";
      itemsMenu.forEach(item => item.style.color = "white");
      contextMenu.style.backgroundColor = "#1b1a1a";
    } else {
      this.currentTheme = "dark";
      root.style.backgroundColor = "black";
      itemsMenu.forEach(item => item.style.color = "black");
      contextMenu.style.backgroundColor = "white";
    }
  }
}
