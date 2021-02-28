import { col, row, css } from '../utils/utils';

class Blocks {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error('Медот toHTML должен быть реализован');
  }
}

export class TitleBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImagesBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    return row(col(`<img src="${this.value}"/>`), css(styles));
  }
}

export class TextBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}

export class ColumnsBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options;
    const html = this.value.map((items) => col(items));
    return row(html.join(''), css(styles));
  }
}
