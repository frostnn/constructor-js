export const row = (content, styles = '') =>
  `<div class="row" style="${styles}">${content}</div>`;

export const col = (content) => `<div class="col-sm">${content}</div>`;

export const css = (styles = {}) => {
  const keys = Object.keys(styles);
  const array = keys.map((key) => {
    return `${key}: ${styles[key]}`;
  });
  return array.join(';');
};
