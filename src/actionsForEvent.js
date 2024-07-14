//Функция обработки ПКМ
export function onContextMenu(event) {
  event.preventDefault();
  const { pageX: x, pageY: y } = event;
  //Если в контексном меню есть элементы перемещаем его в координаты клика и показываем пользователю
  if (this.el?.children?.length > 0) {
    this.moveToCoordinate(x, y);
    this.open();
  }
}
//Функция обработки клика на элемент контекстного меню
export function onElementMenuClick() {
  try {
    this.trigger();
  } catch {
    alert(`Произошла ошибка при вызове действия '${this.type}'`);
    console.error(`Произошла ошибка при вызове действия '${this.type}'`);
  }
}

// Обработчик для одиночных кликов
// Увеличивает счетчик одиночных кликов и обновляет окно статистики.
export function handleClickClicksModule(event) {
  event.preventDefault();
  if (this.startTime) {
    this.setClickCount(1);
    console.log("Зафиксирован одинарный клик.");
    this.updateClicksInfoWindow();
  }
}

// Обработчик для двойных кликов
// Увеличивает счетчик двойных кликов и обновляет окно статистики.
export function handleDoubleClickClicksModule(event) {
  event.preventDefault();
  if (this.startTime) {
    this.setDoubleClickCount(1);
    console.log("Зафиксирован двойной клик.");
    this.updateClicksInfoWindow();
  }
}
