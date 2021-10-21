import {uploadForm, uploadPreview} from './form-validity.js';

const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller'); // Кнопка уменьшения масштаба изображения
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger'); // Кнопка увеличения масштаба изображения
const scaleControlValue = uploadForm.querySelector('.scale__control--value'); // Поле значения масштаба изображения

// Масштабирование загружаемого изображения
scaleControlSmaller.addEventListener('click', () => {
  if (scaleControlValue.value !== '25%') {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - 25}%`;
  }

  // Займусь рефакторингом этой части, когда пойму как сделать ещё проще :)
  if (scaleControlValue.value === '75%') {
    uploadPreview.style.transform = 'scale(0.75)';
  } else if (scaleControlValue.value === '50%') {
    uploadPreview.style.transform = 'scale(0.5)';
  } else if (scaleControlValue.value === '25%') {
    uploadPreview.style.transform = 'scale(0.25)';
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (scaleControlValue.value !== '100%') {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + 25}%`;
  }

  // Займусь рефакторингом этой части, когда пойму как сделать ещё проще :)
  if (scaleControlValue.value === '100%') {
    uploadPreview.style.transform = 'scale(1)';
  } else if (scaleControlValue.value === '75%') {
    uploadPreview.style.transform = 'scale(0.75)';
  } else if (scaleControlValue.value === '50%') {
    uploadPreview.style.transform = 'scale(0.5)';
  }
});
