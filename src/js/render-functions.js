import SimpleLightbox from 'simplelightbox';
import { refs } from '../public/main';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>

        <div class="info">
          <div class="content">
            <p class="name">Likes</p>
            <p>${image.likes}</p>
          </div>

          <div class="content">
            <p class="name">Views</p>
            <p>${image.views}</p>
          </div>

          <div class="content">
            <p class="name">Comments</p>
            <p>${image.comments}</p>
          </div>

          <div class="content">
            <p class="name">Downloads</p>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.add('is-active');
}

export function hideLoader() {
  refs.loader.classList.remove('is-active');
}