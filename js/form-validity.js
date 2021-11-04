import {DESCRIPTION_MAX_LENGTH, HASHTAG_MIN_LENGTH, HASHTAG_MAX_LENGTH, HASHTAG_MAX_QUANTITY} from './data.js';
import {scaleControlSmaller, scaleControlBigger, onScaleSmallerClick, onScaleBiggerClick} from './scale.js';
import {onFilterChange} from './filters.js';
import {onPopupEscKeydown} from './form.js';

const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки и редактирования изображений
const uploadFile = uploadForm.querySelector('#upload-file'); // Поле загрузки изображения
const uploadPopup = uploadForm.querySelector('.img-upload__overlay'); // Всплывающее окно загружаемого изображения

const hashtagPattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/; // Паттерн (шаблон) хэш-тегов
const hashtagField = uploadForm.querySelector('.text__hashtags'); // Поле ввода хэш-тегов
let hashtags = [];

const descriptionField = uploadForm.querySelector('.text__description'); // Поле ввода описания (комментария)

// Получение массива хэш-тегов
const getHashtagArray = () => {
  hashtags = hashtagField.value.toLowerCase().split(/\s+/);
};

// Проверка валидности поля ввода хэш-тегов
const checkHashtagField = () => {
  // Проверка количества хэш-тегов
  if (hashtags.length > HASHTAG_MAX_QUANTITY) {
    hashtagField.setCustomValidity(`Нельзя указывать более ${HASHTAG_MAX_QUANTITY} хэш-тегов`);
    hashtagField.classList.add('img-upload__error');
  } else {
    hashtagField.setCustomValidity('');
    hashtagField.classList.remove('img-upload__error');

    // Проверка валидности каждого хэш-тега
    hashtags.forEach((value) => {
      if (value.length > HASHTAG_MAX_LENGTH) {
        hashtagField.setCustomValidity(`Максимальная длина одного хэш-тега ${HASHTAG_MAX_LENGTH} символов, включая решётку`);
        hashtagField.classList.add('img-upload__error');
      } else if (hashtags[0] === '') {
        hashtagField.setCustomValidity('');
        hashtagField.classList.remove('img-upload__error');
      } else if (!hashtagPattern.test(value)) {
        hashtagField.setCustomValidity(`Хэш-тег должен начинаться с символа # (решётка) и может включать в себя только буквы и числа (мин. ${HASHTAG_MIN_LENGTH - 1} символ после решётки)`);
        hashtagField.classList.add('img-upload__error');
      } else {
        hashtagField.setCustomValidity('');
        hashtagField.classList.remove('img-upload__error');

        // Проверка одинаковых хэш-тегов
        for (let i = 0; i < hashtags.length; i++) {
          const hashtagValue = hashtags[i];
          for (let j = 0; j < i; j++) {
            if (hashtags[j] === hashtagValue) {
              hashtagField.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
              hashtagField.classList.add('img-upload__error');
              break;
            }
          }
        }
      }
    });
  }
};

// Функция открытия модального окна
const uploadOpen = () => {
  uploadPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Обработчик хэш-тегов при вводе
  hashtagField.addEventListener('input', () => {
    getHashtagArray();
    checkHashtagField();
    hashtagField.reportValidity();
  });

  // Подсказка о максимальной длине описания (комментария)
  descriptionField.placeholder = `Ваш комментарий... (макс. длина ${DESCRIPTION_MAX_LENGTH} символов)`;

  descriptionField.addEventListener('input', () => {
    if (descriptionField.value.length <= DESCRIPTION_MAX_LENGTH) {
      descriptionField.setAttribute('title', `Осталось ${DESCRIPTION_MAX_LENGTH - descriptionField.value.length} символов`);
    }
  });

  // Масштабирование изображения
  scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleBiggerClick);

  // Обработчик фильтров изображения
  uploadForm.addEventListener('change', onFilterChange);

  document.addEventListener('keydown', onPopupEscKeydown); // Закрытие модального окна при нажатии на ESC

  // Нажатие на Esc не приводит к закрытию формы при фокусе в поле ввода хэш-тега
  hashtagField.addEventListener('keydown', (evt) => {
    evt.stopPropagation();
  });

  // Нажатие на Esc не приводит к закрытию формы при фокусе в поле ввода описания (комментария)
  descriptionField.addEventListener('keydown', (evt) => {
    evt.stopPropagation();
  });
};

export {uploadForm, uploadFile, uploadPopup, hashtagField, descriptionField, uploadOpen};
