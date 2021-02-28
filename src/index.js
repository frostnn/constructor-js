import { model } from './model';
import { templates } from './templates';
import './styles/main.css';
const site = document.querySelector('#site');

model.forEach((item) => {
  const toHTML = templates[item.type];
  if (toHTML) {
    site.insertAdjacentHTML('beforeend', toHTML(item));
  }
});
