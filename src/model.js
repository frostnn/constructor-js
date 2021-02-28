import image from './img/image2.png';

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-aligain': 'center',
        padding: '10px',
      },
    },
  },
  { type: 'text', value: 'here we go for text' },
  { type: 'columns', value: ['111', '222', '333', '444'] },
  { type: 'images', value: image },
];
