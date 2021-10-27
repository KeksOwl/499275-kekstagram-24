import {renderPictures} from './pictures.js';

fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderPictures(pictures);
    console.log(pictures); // Передать тот же массив в фуллскрин модуль
  });

// Добавьте обработку возможных ошибок при загрузке.

// Сейчас наша форма работает просто:
// при нажатии на кнопку «Опубликовать» происходит перенаправление на адрес,
// указанный в атрибуте action.
// Это не совсем удобно, и если оставить всё как есть,
// пользователю придётся самостоятельно возвращаться назад.
// Стоит ли говорить, что это далеко не оптимальное решение.
// Поэтому данные из формы мы будем передавать с помощью AJAX.

// Добавьте обработчик отправки формы,
// который бы отменял действие формы по умолчанию
// и отправлял данные формы посредством fetch на сервер.

// Реализуйте возвращение формы в исходное состояние при успешной отправке,
// а также показ сообщения пользователю.

// Если при отправке данных произошла ошибка запроса,
// покажите соответствующее сообщение.

// Доработайте обработчик закрытия формы,
// чтобы кроме закрытия формы он сбрасывал введённые пользователем данные
// и возвращал форму в исходное состояние.
// Аналогичных образом обработайте нажатие на кнопку сброса.