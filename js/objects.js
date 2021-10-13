import {getRandomIntFromRange, getRandomArrayElement} from './util.js';
import {DESCRIPTIONS, OBJECTS_COUNT} from './data.js';
import {createComment} from './comments.js';

// Функция для создания объектов (фотографий)
function createObject() {
  const arrayObjects = new Array(OBJECTS_COUNT).fill().map((j, index) => ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntFromRange(15, 200),
    comments: createComment(),
  }));
  return arrayObjects;
}

export {createObject};
