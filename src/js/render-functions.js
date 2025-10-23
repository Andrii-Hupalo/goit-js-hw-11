const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img
              src="${image.webformatURL}"
              alt="${image.tags}"
              loading="lazy"
              width="300"
            />
          </a>
          <ul class="info">
            <li><b>Likes:</b> ${image.likes}</li>
            <li><b>Views:</b> ${image.views}</li>
            <li><b>Comments:</b> ${image.comments}</li>
            <li><b>Downloads:</b> ${image.downloads}</li>
          </ul>
        </li>
      `;
    })
    .join('');

  if (gallery) {
    gallery.insertAdjacentHTML('beforeend', markup);
  } else {
    console.warn('Gallery element not found in DOM');
  }

  return markup;
}

export function clearGallery() {
  if (gallery && gallery.innerHTML !== undefined) {
    gallery.innerHTML = '';
  }
}

export function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
    loader.setAttribute('aria-hidden', 'false');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
    loader.setAttribute('aria-hidden', 'true');
  }
}
