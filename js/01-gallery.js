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


const linkprev = galleryEl.querySelectorAll(".gallery__link");
linkprev.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
);



galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightBoxOn(event.target.dataset.source);
}

function lightBoxOn(e) {
  const instance = basicLightbox.create(`
    <img src=${e} width="800" height="600">
`);
    
  instance.show();

  if (instance.visible()) {
    window.addEventListener("keydown", closeModal);
  }

  function closeModal(e) {
    if (e.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", closeModal);
    }
  }
}






