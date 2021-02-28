export const row = (content, styles = '') =>
  `<div class="row" style="${styles}">${content}</div>`;

export const col = (content) => `<div class="col-sm">${content}</div>`;

export const css = (styles = {}) => {
  if (typeof styles == 'string') {
    return styles;
  } else {
    const keys = Object.keys(styles);
    const array = keys.map((key) => {
      return `${key}: ${styles[key]}`;
    });
    return array.join(';');
  }
};

export function block(type) {
  return ` 
  <form name=${type}>
    <h5>${type}</h5>
    <div class="form-group mb-2">
      <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group  mb-2">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
  </form>  
  <hr/>
  `;
}
