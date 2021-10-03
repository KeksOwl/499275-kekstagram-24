// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntFromRange = (from, to) => {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

getRandomIntFromRange(4, 25); // Временный вызов функции

// Функция для проверки максимальной длины строки.
const checkStringMaxLength = (string, maxLength) => string.length <= maxLength;

checkStringMaxLength('hello', 10); // Временный вызов функции

// ДЗ: 4.9. Больше деталей

// Массив сообщений комментария
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив описаний к фотографиям
const DESCRIPTIONS = [
  'Люблю фотографировать всё вокруг и получать от этого одно только удовольствие',
  'Думаю, что фотография вышла забавной',
  'Животные - самые фотогеничные существа на земле',
  'Фотографии под солнцем - самые яркие, только посмотри',
  'Прекрасное время года, чтобы любоваться такими фотографиями',
];

// Массив первой части имён пользователей
const NAMES = [
  'Кекс',
  'Рудольф',
  'Снежок',
  'Семён',
  'Егор',
  'Чечевица',
  'Куркума',
];

// Массив знаков между частями имён пользователей
const SPACES = [
  ' ',
  '_',
  '-',
  '',
];

// Массив второй части имён пользователей
const SURNAMES = [
  'Бобр',
  '1337',
  'Мегапихарь',
  'Программист',
  'JS',
  'Гугленко',
];

const ARR_COMMENTS_COUNT = 4; // Количество комментариев
const ARR_OBJECTS_COUNT = 25; // Количество генерируемых объектов
const ARR_TOTAL_COMMENTS_COUNT = ARR_COMMENTS_COUNT * ARR_OBJECTS_COUNT; // Количество всех комментариев на сайте
const arrDescriptionIds = Array.from({length: ARR_OBJECTS_COUNT}, (_, i) => i + 1); // Неповторяющиеся идентификаторы описания от 1 до 25. Подглядел на https://coderoad.ru/3746725/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%89%D0%B8%D0%B9-1-N#:~:text=Array.from(%7Blength%3A%2010%7D%2C%20(_%2C%20i)%20%3D%3E%20i%20%2B%201)
const arrCommentsIds = []; // Массив для хранения случайных неповторяющихся ID (комментариев)

// Функция поиска случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntFromRange(0, elements.length - 1)];
};

// Функция генерации случайных неповторяющихся чисел в массиве. Подсмотрел на https://myrusakov.ru/js-random-numbers.html#:~:text=%D0%94%D0%BB%D1%8F%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D1%85%20%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%BE%D0%B2%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB%3A%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5%20%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%20%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8%20%D1%86%D0%B5%D0%BB%D1%8B%D0%BC%D0%B8%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0%D0%BC%D0%B8%2C%20%D0%BE%D1%82%D0%BA%D0%BB%D0%BE%D0%BD%D1%8F%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B5%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B5%20%D1%83%D0%B6%D0%B5%20%D0%B1%D1%8B%D0%BB%D0%BE%20%D1%80%D0%B0%D0%BD%D0%B5%D0%B5%20%D1%81%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%3A
// while (arrCommentsIds.length < ARR_TOTAL_COMMENTS_COUNT) {
//   const commentId = getRandomIntFromRange(0, 1e11);
//   let commentFoundCheck = false;
//   for (let i = 0; i < arrCommentsIds.length; i++) {
//     if (arrCommentsIds[i] === commentId) {
//       commentFoundCheck = true;
//       break;
//     }
//   }
//   if (!commentFoundCheck) { arrCommentsIds[arrCommentsIds.length]=commentId; }
// }

// Функция для создания комментариев к объекту (фотографии)
// const createComment = () => {
//   return {
//     id: arrCommentsIds[], // Доработать (вызов текущего элемента массива)
//     avatar: 'img/avatar-' + getRandomIntFromRange(1, 6) + '.svg',
//     message: getRandomArrayElement(MESSAGES),
//     name: getRandomArrayElement(NAMES) + getRandomArrayElement(SPACES) + getRandomArrayElement(SURNAMES),
//   };
// };

// Функция для создания объекта (фотографии)
// const createObject = () => {
//   return {
//     id: arrDescriptionIds[], // Доработать (вызов текущего элемента массива)
//     url: 'photos/' + arrDescriptionIds[] + '.jpg', // Доработать (вызов текущего элемента массива)
//     description: getRandomArrayElement(DESCRIPTIONS),
//     likes: getRandomIntFromRange(15, 200),
//     comments: Array.from({length: ARR_COMMENTS_COUNT}, createComment),
//   };
// };

// Функция для создания массива из 25 сгенерированных объектов
// const arrObjects = Array.from({length: ARR_OBJECTS_COUNT}, createObject);
