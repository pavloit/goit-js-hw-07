import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems.map(({ description, original, preview }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`).join("");

new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        captionClass: 'caption' 
    });