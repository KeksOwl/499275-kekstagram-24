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

// Длительность сообщения
const ALERT_SHOW_TIME = 5000;

// Сообщение с ошибкой
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Сообщение об успешной отправке
const showMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = 100;
  messageContainer.style.position = 'absolute';
  messageContainer.style.left = 0;
  messageContainer.style.top = 0;
  messageContainer.style.right = 0;
  messageContainer.style.padding = '10px 3px';
  messageContainer.style.fontSize = '30px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.backgroundColor = 'green';

  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomIntFromRange, getRandomArrayElement, isEscapeKey, showAlert, showMessage};
