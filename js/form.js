import './../nouislider/nouislider.js';
import './form-validity.js';
import './scale.js';
import './filters.js';
import {isEscapeKey} from './util.js';
import {uploadForm, uploadFile, uploadPopup, uploadOpen, hashtagField, descriptionField} from './form-validity.js';
import {scaleControlSmaller, scaleControlBigger, scaleSmaller, scaleBigger} from './scale.js';
import {onFilterChange} from './filters.js';

const uploadCancel = uploadForm.querySelector('#upload-cancel'); // «Крестик» для закрытия всплывающего окна

// Обработчик закрытия окна (формы)
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    uploadClose();
  }
};

// Закрытие модального окна
const uploadClose = () => {
  uploadPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadFile.value = '';
  hashtagField.value = '';
  descriptionField.value = '';

  scaleControlSmaller.removeEventListener('click', scaleSmaller);
  scaleControlBigger.removeEventListener('click', scaleBigger);
  uploadForm.removeEventListener('change', onFilterChange);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

// Событие показа модального окна
uploadFile.addEventListener('change', uploadOpen);

// Событие закрытия модального окна при нажатии на «крестик»
uploadCancel.addEventListener('click', () => {
  uploadClose();
});

export {onPopupEscKeydown};
