export class Site {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }
  render(model) {
    this.elem.innerHTML = '';
    model.forEach((item) => {
      this.elem.insertAdjacentHTML('beforeend', item.toHTML());
    });
  }
}
