import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

if (!form) {
  console.error('Form element not found: .form');
} else {
  form.addEventListener('submit', handlerButton);
}

function handlerButton(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search word!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchText)
    .then(images => {
      if (!images || images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
