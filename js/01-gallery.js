import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const createItem = (item) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img 
          class="gallery__image" 
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>
  `
}

const items = galleryItems.map(item =>
  createItem(item)).join("");
gallery.innerHTML = items;

gallery.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600"/>
`)

  instance.show()

  gallery.addEventListener("keyup", e => {
    if (e.key === "Escape") {
      instance.close()
    }
  })
})