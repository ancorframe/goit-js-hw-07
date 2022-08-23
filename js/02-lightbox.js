import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryItemsRender = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
  })
  .join("");

// console.log(galleryItemsRender);
galleryEl.innerHTML = galleryItemsRender;

new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay:250,
});


