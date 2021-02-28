import {
  ColumnsBlock,
  TextBlock,
  ImagesBlock,
  TitleBlock,
} from './classes/blocks';
import image from './img/image2.png';

export const model = [
  new TitleBlock('Lion express', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-aligain': 'center',
      padding: '10px',
    },
  }),
  new TextBlock(
    'Быстро передать документы, отправить ключи или букет любимой — найдем решение.',
    {
      styles: {
        padding: '10px',
      },
    }
  ),
  new ColumnsBlock(
    [
      'Курьер или машина будут у вас очень быстро',
      'Минимальная цена доставки в Москве. Отличается в других регионах',
      'Вы видите, где сейчас курьер с вашей посылкой',
      'Крупнейший в СНГ международный логи-стический и 3PL-оператор.',
    ],
    {
      styles: {
        color: '16px',
      },
    }
  ),
  new ImagesBlock(image, {
    styles: {
      padding: '10px',
    },
  }),
];
