import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemsRender = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
  })
  .join("");

// console.log(galleryItemsRender);
galleryEl.innerHTML = galleryItemsRender;

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

const instance = basicLightbox.create(
  `
    <img src='' width="800" height="600">
`,
  {
    onShow: () => {
      window.addEventListener("keydown", onCloselightBox);
    },
    onClose: () => {
      window.removeEventListener("keydown", onCloselightBox);
    },
  }
);

function onCloselightBox(e) {
  if (e.code === "Escape") {
    instance.close();
    return;
  }
}
