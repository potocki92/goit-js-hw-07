import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const createItem = (item) => {
  return `
      <a class="gallery__item" href="${item.original}">
        <img 
          class="gallery__image" 
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
  `
}

const items = galleryItems.map(item =>
  createItem(item)).join("");
gallery.innerHTML = items;

let lightbox = new SimpleLightbox(`.gallery a`, {
  captionDelay: 250,
  captionsData: 'alt',
  overlayOpacity: 0.7
})
lightbox.open(0)
lightbox.next()