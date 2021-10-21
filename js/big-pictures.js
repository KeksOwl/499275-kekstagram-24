import {pictures} from './pictures.js';
import {onPopupEscKeydown} from './gallery.js';

const bigPicture = document.querySelector('.big-picture'); // Блок полноразмерного изображения

const bigPictureImage = bigPicture.querySelector('.big-picture__img > img'); // Картинка полноразмерного изображения
const bigPictureLikesCount = bigPicture.querySelector('.likes-count'); // Количество лайков полноразмерного изображения
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count'); // Количество комментариев полноразмерного изображения
const bigPictureCommentsCounter = bigPicture.querySelector('.social__comment-count'); // Счётчик комментариев
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader'); // Кнопка загрузки новых комментариев
const bigPictureComments = bigPicture.querySelector('.social__comments'); // Список комментариев полноразмерного изображения
const bigPictureCommentsTemplate = bigPictureComments.querySelector('.social__comment'); // Шаблон комментария полноразмерного изображения
const bigPictureCommentsFragment = document.createDocumentFragment(); // Фрагмент (комментариев)
const bigPictureDescription = bigPicture.querySelector('.social__caption'); // Описание полноразмерного изображения

// Функция открытия модального окна
const openBigPicture = (evt) => {
  document.body.classList.add('modal-open'); // Отключение скролла на странице
  bigPicture.classList.remove('hidden'); // Открытие модального окна
  bigPictureCommentsCounter.classList.add('hidden'); // Счётчик комментариев
  bigPictureCommentsLoader.classList.add('hidden'); // Загрузка новых комментариев

  let pictureSrc; // Переменная ссылки на изображение

  if (evt.target.matches('img')) {
    pictureSrc = bigPictureImage.src = evt.target.src; // Значение переменной при клике
  } else if (evt.target.matches('a')) {
    pictureSrc = bigPictureImage.src = evt.target.querySelector('.picture__img').src; // Значение переменной при нажатии на Enter
  }

  // Поиск текущего изображения
  const pictureCurrent = pictures.find((picture) => {
    if (pictureSrc.indexOf(picture.url) !== -1) {
      return true;
    }
  });

  bigPictureLikesCount.textContent = pictureCurrent.likes; // Лайки текущего изображения
  bigPictureCommentsCount.textContent = pictureCurrent.comments.length; // Количество комментариев текущего изображения
  bigPictureDescription.textContent = pictureCurrent.description; // Описание текущего изображения

  const pictureCurrentComments = pictureCurrent.comments; // Комментарии текущего изображения

  pictureCurrentComments.forEach(({avatar, name, message}) => {
    bigPictureComments.textContent = ''; // Очистка дефолтных комментариев из разметки
    const pictureComments = bigPictureCommentsTemplate.cloneNode(true);
    pictureComments.querySelector('.social__picture').src = avatar;
    pictureComments.querySelector('.social__picture').alt = name;
    pictureComments.querySelector('.social__text').textContent = message;
    bigPictureCommentsFragment.appendChild(pictureComments);
  });
  bigPictureComments.appendChild(bigPictureCommentsFragment);

  document.addEventListener('keydown', onPopupEscKeydown); // Закрытие модального окна при нажатии на ESC
};

export {bigPicture, openBigPicture};
