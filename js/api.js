import {showMessage} from './util.js';
import {sortBlock} from './sort.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
      sortBlock.classList.remove('img-filters--inactive');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showMessage();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
