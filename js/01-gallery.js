import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({ description, original, preview }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`).join("");

gallery.innerHTML = markup;
gallery.addEventListener('click', handlerClick)
function handlerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `);
    modal.show();
    document.onkeydown = evt => {
        if (evt.key === "Escape") {
            modal.close();
        }
    }
}