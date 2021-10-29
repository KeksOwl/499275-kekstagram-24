import './api.js';
import './gallery.js';
import './form.js';
import './form-validity.js';
import {getData} from './api.js';

import {renderPictures} from './pictures.js';
import {addPicturesClickEvent} from './gallery.js';
import {uploadClose, setUserFormSubmit} from './form.js';

getData((pictures) => {
  renderPictures(pictures);
  addPicturesClickEvent(pictures);
});

setUserFormSubmit(uploadClose);
