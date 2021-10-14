import {createObject} from './objects.js';

const picturesBlock = document.querySelector('.pictures'); // Блок картинок

const picturesTemplate = document.querySelector('#picture').content; // Фрагмент содержимого шаблона картинок

const pictures = createObject();

const picturesFragment = document.createDocumentFragment();

pictures.forEach(({url, comments, likes}) => {
  const picturesElement = picturesTemplate.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.appendChild(picturesElement);
});

picturesBlock.appendChild(picturesFragment);

export {picturesBlock, pictures};
