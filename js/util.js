// Блок с сообщением об ошибке
const alertContainerTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

// Блок с сообщением об успехе
const messageContainerTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntFromRange = (from, to) => {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

// Функция для проверки максимальной длины строки.
const checkStringMaxLength = (string, maxLength) => string.length <= maxLength;

checkStringMaxLength('hello', 10); // Временный вызов функции

// Функция поиска случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomIntFromRange(0, elements.length - 1)];

// Проверка нажатия клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

// Сообщение с ошибкой
const showAlert = () => {
  const alertContainer = alertContainerTemplate.cloneNode(true);
  const alertCloseButton = alertContainer.querySelector('.error__button');

  alertContainer.style.zIndex = 100;

  document.body.append(alertContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseAlertClick();
    }
  };

  const onOutBoxClick = (evt) => {
    if (!alertContainer.querySelector('.error__inner').contains(evt.target)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseAlertClick();
    }
  };

  const onCloseAlertClick = () => {
    alertContainer.remove();
    alertCloseButton.removeEventListener('click', onCloseAlertClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onOutBoxClick);
  };

  alertCloseButton.addEventListener('click', onCloseAlertClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOutBoxClick);
};

// Сообщение об успешной отправке
const showMessage = () => {
  const messageContainer = messageContainerTemplate.cloneNode(true);
  const messageCloseButton = messageContainer.querySelector('.success__button');

  messageContainer.style.zIndex = 100;

  document.body.append(messageContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseMessageClick();
    }
  };

  const onOutBoxClick = (evt) => {
    if (!messageContainer.querySelector('.success__inner').contains(evt.target)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      onCloseMessageClick();
    }
  };

  const onCloseMessageClick = () => {
    messageContainer.remove();
    messageCloseButton.removeEventListener('click', onCloseMessageClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onOutBoxClick);
  };

  messageCloseButton.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOutBoxClick);
};

export {getRandomIntFromRange, getRandomArrayElement, isEscapeKey, showAlert, showMessage};
