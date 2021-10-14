import {picturesBlock, pictures} from './pictures.js';

const picturesList = picturesBlock.querySelectorAll('.picture'); // Список всех картинок

const bigPicturesBlock = document.querySelector('.big-picture'); // Блок полноразмерных изображений
const bigPicturesCancel = bigPicturesBlock.querySelector('.big-picture__cancel'); // Кнопка для выхода из полноэкранного просмотра изображения

const bigPicturesComments = bigPicturesBlock.querySelector('.social__comments'); // Блок комментариев к фотографии
const bigPicturesCommentsTemplate = bigPicturesComments.querySelector('.social__comment'); // Шаблон комментариев
const bigPicturesCommentsFragment = document.createDocumentFragment();

bigPicturesBlock.querySelector('.social__comment-count').classList.add('hidden'); // Блок счётчика комментариев
bigPicturesBlock.querySelector('.comments-loader').classList.add('hidden'); // Загрузка новых комментариев

// Функция отрисовки картинок в полном размере
const bigPicturesOpen = (evt) => {
  bigPicturesBlock.classList.remove('hidden'); // Открытие фотографии в полном размере
  document.body.classList.add('modal-open'); // Отключение прокрутки контейнера с фотографиями
  const picturesSrc = evt.target.src; // Ссылка на инициатор события
  bigPicturesBlock.querySelector('.big-picture__img > img').src = picturesSrc; // Просмотр изображения (ссылка)

  // Поиск текущей картинки
  const picturesCurrent = pictures.find((picture) => {
    if (picturesSrc.indexOf(picture.url) !== -1) {
      return true;
    }
  });

  bigPicturesBlock.querySelector('.likes-count').textContent = picturesCurrent.likes; // Лайки текущего изображения
  bigPicturesBlock.querySelector('.comments-count').textContent = picturesCurrent.comments.length; // Кол-во комментариев текущего изображения
  bigPicturesBlock.querySelector('.social__caption').textContent = picturesCurrent.description; // Описание текущего изображения

  const picturesCurrentComments = picturesCurrent.comments; // Комментарии к текущему изображению

  picturesCurrentComments.forEach(({avatar, name, message}) => {
    bigPicturesComments.textContent = ''; // Очистка дефолтных комментариев из разметки
    const picturesComment = bigPicturesCommentsTemplate.cloneNode(true);
    picturesComment.querySelector('.social__picture').src = avatar;
    picturesComment.querySelector('.social__picture').alt = name;
    picturesComment.querySelector('.social__text').textContent = message;
    bigPicturesCommentsFragment.appendChild(picturesComment);
  });
  bigPicturesComments.appendChild(bigPicturesCommentsFragment);
};

// Функция срабатывания попапа по клику
const picturesPopup = () => {
  picturesList.forEach((picture) => {
    picture.addEventListener('click', bigPicturesOpen);
  });
};

// Закрытие модального окна при нажатии на крестик
bigPicturesCancel.addEventListener('click', () => {
  bigPicturesBlock.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

// Закрытие модального окна при нажатии на ESC
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicturesBlock.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});

export {picturesPopup};
