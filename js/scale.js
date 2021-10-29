const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки и редактирования изображений
const uploadPreview = uploadForm.querySelector('.img-upload__preview > img'); // Превью загружаемого изображения

const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller'); // Кнопка уменьшения масштаба изображения
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger'); // Кнопка увеличения масштаба изображения
const scaleControlValue = uploadForm.querySelector('.scale__control--value'); // Поле значения масштаба изображения

const scaleValueHidden = uploadForm.querySelector('.scale__value--hidden'); // Скрытое поле значения

// Масштабирование загружаемого изображения
const scaleSmaller = () => {
  if (scaleControlValue.value !== '25%') {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - 25}%`;
  }

  if (scaleControlValue.value === '75%') {
    uploadPreview.style.transform = 'scale(0.75)';
    scaleValueHidden.value = 75;
  } else if (scaleControlValue.value === '50%') {
    uploadPreview.style.transform = 'scale(0.5)';
    scaleValueHidden.value = 50;
  } else if (scaleControlValue.value === '25%') {
    uploadPreview.style.transform = 'scale(0.25)';
    scaleValueHidden.value = 25;
  }
};

const scaleBigger = () => {
  if (scaleControlValue.value !== '100%') {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + 25}%`;
  }

  if (scaleControlValue.value === '100%') {
    uploadPreview.style.transform = 'scale(1)';
    scaleValueHidden.value = 100;
  } else if (scaleControlValue.value === '75%') {
    uploadPreview.style.transform = 'scale(0.75)';
    scaleValueHidden.value = 75;
  } else if (scaleControlValue.value === '50%') {
    uploadPreview.style.transform = 'scale(0.5)';
    scaleValueHidden.value = 50;
  }
};

export {scaleControlSmaller, scaleControlBigger, scaleSmaller, scaleBigger, scaleValueHidden, scaleControlValue};
