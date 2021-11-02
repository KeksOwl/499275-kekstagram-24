const uploadForm = document.querySelector('.img-upload__form'); // Форма загрузки и редактирования изображений
const uploadPreview = uploadForm.querySelector('.img-upload__preview > img'); // Превью загружаемого изображения

const sliderElementBlock = uploadForm.querySelector('.effect-level'); // Блок со слайдером
const sliderElement = sliderElementBlock.querySelector('.effect-level__slider'); // Поле для отрисовки слайдера
const valueElement = uploadForm.querySelector('.effect-level__value'); // Поле значения (насыщенность)
const effectsValueHidden = uploadForm.querySelector('.effects__value--hidden'); // Скрытое поле значения (фильтры)

// Эффект «Оригинал» по умолчанию
uploadPreview.classList.add('effects__preview--none');

// Слайдер скрыт по умолчанию (эффект «Оригинал»)
sliderElementBlock.classList.add('hidden');

// Слайдер инстенсивности эффектов
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

// Функция смены эффектов
const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    uploadPreview.className = '';
    uploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    effectsValueHidden.value = `${evt.target.value}`;

    // Параметры слайдера при изменении эффектов
    if (evt.target.value === 'none') {
      sliderElementBlock.classList.add('hidden');
      uploadPreview.style.filter = 'none';
      valueElement.value = 'none';
    } else if (evt.target.value === 'chrome') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', (values, handle) => {
        uploadPreview.style.filter = `grayscale(${values[handle]})`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'sepia') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', (values, handle) => {
        uploadPreview.style.filter = `sepia(${values[handle]})`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'marvin') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });

      sliderElement.noUiSlider.on('update', (values, handle) => {
        uploadPreview.style.filter = `invert(${values[handle]}%)`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'phobos') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', (values, handle) => {
        uploadPreview.style.filter = `blur(${values[handle]}px)`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'heat') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', (values, handle) => {
        uploadPreview.style.filter = `brightness(${values[handle]})`;
        valueElement.value = values[handle];
      });
    }
  }
};

export {onFilterChange, uploadPreview, sliderElementBlock, valueElement};
