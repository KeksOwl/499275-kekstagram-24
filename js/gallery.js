import './pictures.js';
import './big-pictures.js';
import {picturesBlock} from './pictures.js';
import {bigPicture, openBigPicture, bigPictureCommentsLoader} from './big-pictures.js';
import {isEscapeKey} from './util.js';

const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel'); // «Крестик» для закрытия полноразмерного изображения

// Обработчик закрытия окна (галереи)
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPicture();
  }
};

// Закрытие модального окна
const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  bigPictureCommentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

// Событие показа модального окна
const addPicturesClickEvent = (pictures) => {
  picturesBlock.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture') || evt.target.matches('.picture__img')) {
      openBigPicture(evt, pictures);
    }
  });
};

// Событие закрытия модального окна при нажатии на «крестик»
bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

export {onPopupEscKeydown, addPicturesClickEvent};
