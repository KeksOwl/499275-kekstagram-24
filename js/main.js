// 1) Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntFromRange = (from, to) => {
  from = Math.ceil(from); // Округление вверх
  to = Math.floor(to); // Округление вниз
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

// Math.random() приводит случайное число с «плавающей точкой» от 0 (включительно) до 1 (не включая).
// Посмотрел пример на MDN:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно

getRandomIntFromRange(); // Временный вызов функции

// 2) Функция для проверки максимальной длины строки.
const checkStringMaxLength = (stringLength, maxLength) => stringLength <= maxLength;

// Сделал сам

checkStringMaxLength(); // Временный вызов функции
