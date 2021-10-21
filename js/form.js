import './form-validity.js';
import './scale.js';
import {isEscapeKey} from './util.js';
import {uploadForm, uploadFile, uploadPopup, uploadOpen, hashtagField, descriptionField} from './form-validity.js';

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

  document.removeEventListener('keydown', onPopupEscKeydown);
};

// Событие показа модального окна
uploadFile.addEventListener('change', uploadOpen);

// Событие закрытия модального окна при нажатии на «крестик»
uploadCancel.addEventListener('click', () => {
  uploadClose();
});

export {onPopupEscKeydown};
