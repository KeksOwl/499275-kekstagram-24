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

const COMMENTS_COUNT = 4; // Количество комментариев
const OBJECTS_COUNT = 25; // Количество генерируемых объектов
const TOTAL_COMMENTS_COUNT = COMMENTS_COUNT * OBJECTS_COUNT; // Количество всех комментариев на сайте
const arrCommentsIds = []; // Массив для хранения случайных неповторяющихся ID (комментариев)

// Функция поиска случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntFromRange(0, elements.length - 1)];
};

// Функция генерации случайных неповторяющихся чисел в массиве. Подсмотрел на https://myrusakov.ru/js-random-numbers.html#:~:text=%D0%94%D0%BB%D1%8F%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D1%85%20%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D0%BE%D0%B2%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB%3A%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5%20%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%20%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D0%BC%D0%B8%20%D1%86%D0%B5%D0%BB%D1%8B%D0%BC%D0%B8%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0%D0%BC%D0%B8%2C%20%D0%BE%D1%82%D0%BA%D0%BB%D0%BE%D0%BD%D1%8F%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B5%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B5%20%D1%83%D0%B6%D0%B5%20%D0%B1%D1%8B%D0%BB%D0%BE%20%D1%80%D0%B0%D0%BD%D0%B5%D0%B5%20%D1%81%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%3A
while (arrCommentsIds.length < TOTAL_COMMENTS_COUNT) {
  const commentId = getRandomIntFromRange(0, 1e11);
  let commentFoundCheck = false;
  for (let i = 0; i < arrCommentsIds.length; i++) {
    if (arrCommentsIds[i] === commentId) {
      commentFoundCheck = true;
      break;
    }
  }
  if (!commentFoundCheck) { arrCommentsIds[arrCommentsIds.length]=commentId; }
}

// Переменная для хранения текущего «набора» комментариев (для индексации массива неповторяющихся id)
let commentIdCounter = 0;

// Функция для создания комментариев к объекту
function createComment() {
  const arrayComments = new Array(COMMENTS_COUNT).fill().map((j, index) => ({
    id: arrCommentsIds[commentIdCounter + index + 1],
    avatar: `img/avatar-${getRandomIntFromRange(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES) + getRandomArrayElement(SPACES) + getRandomArrayElement(SURNAMES),
  }));
  commentIdCounter += COMMENTS_COUNT;
  return arrayComments;
}

// Функция для создания объектов (фотографий)
function createObject() {
  const arrayDescriptions = new Array(OBJECTS_COUNT).fill().map((j, index) => ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntFromRange(15, 200),
    comments: createComment(),
  }));
  return arrayDescriptions;
}

console.log(createObject()); // Временный вызов функции в консоль
