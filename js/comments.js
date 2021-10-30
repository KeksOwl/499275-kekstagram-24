// import {getRandomIntFromRange, getRandomArrayElement} from './util.js';
// import {MESSAGES, NAMES, SPACES, SURNAMES, COMMENTS_COUNT, TOTAL_COMMENTS_COUNT} from './data.js';

// const arrCommentsIds = []; // Массив для хранения случайных неповторяющихся ID (комментариев)

// // Функция генерации случайных неповторяющихся чисел в массиве комментариев.
// while (arrCommentsIds.length < TOTAL_COMMENTS_COUNT) {
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

// // Переменная для хранения текущего «набора» комментариев (для индексации массива неповторяющихся id)
// let commentIdCounter = 0;

// // Функция для создания комментариев к объекту
// function createComment() {
//   const arrayComments = new Array(COMMENTS_COUNT).fill().map((j, index) => ({
//     id: arrCommentsIds[commentIdCounter + index + 1],
//     avatar: `img/avatar-${getRandomIntFromRange(1, 6)}.svg`,
//     message: getRandomArrayElement(MESSAGES),
//     name: getRandomArrayElement(NAMES) + getRandomArrayElement(SPACES) + getRandomArrayElement(SURNAMES),
//   }));
//   commentIdCounter += COMMENTS_COUNT;
//   return arrayComments;
// }

// export {createComment};
