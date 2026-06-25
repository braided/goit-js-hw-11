import iziToast from 'izitoast';
import { getImage } from './js/pixabay-api';
import {
  ImagesRender,
  offLouder,
  onImagesRenderClear,
  onImagesRenderLarge,
  onLouder,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSearchFormImages);

function onSearchFormImages(e) {
  e.preventDefault();

  const name = refs.input.value.trim();

  if (!name) {
    iziToast.error({
      message: 'Input is empty!',
      position: 'topRight',
    });
    return;
  }

  onLouder();
  onImagesRenderClear();

  getImage(name)
    .then(imageData => {
      if (imageData.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      ImagesRender(imageData.hits);
      onImagesRenderLarge();
    })
    .catch(error => {
      console.error(error);

      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      offLouder();
    });
}