import './api.js';
import './gallery.js';
import './form.js';
import './form-validity.js';
import './sort.js';
import {getData} from './api.js';

import {renderPictures} from './pictures.js';
import {addPicturesClickEvent} from './gallery.js';
import {sortDefaultClick, sortRandomClick, sortDiscussedClick} from './sort.js';
import {uploadClose, setUserFormSubmit} from './form.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500; // Задержка перерисовки изображений

getData((pictures) => {
  renderPictures(pictures);
  addPicturesClickEvent(pictures);

  sortDefaultClick(debounce(
    () => renderPictures(pictures),
    RERENDER_DELAY,
  ));

  sortRandomClick(debounce(
    () => renderPictures(pictures),
    RERENDER_DELAY,
  ));

  sortDiscussedClick(debounce(
    () => renderPictures(pictures),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(uploadClose);
