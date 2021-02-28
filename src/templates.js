import { col, row, css } from './utils/utils';

const title = (item) => {
  const { tag = 'h1', styles } = item.options;

  return row(col(`<${tag}>${item.value}</${tag}>`), css(styles));
};

const text = (item) => row(col(`<p>${item.value}</p>`));

const images = (item) => row(col(`<img src="${item.value}"/>`));

const columns = (item) => {
  const html = item.value.map((items) => col(items));
  return row(html.join(''));
};

export const templates = {
  title,
  text,
  images,
  columns,
};
