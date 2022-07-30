import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryOfImages = createGallery(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryOfImages);

// console.log(galleryBox)

function createGallery(galleryItems) {
    const gallery = galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${preview}">
                <img class="gallery__image" src="${original}" alt="${description}" />
            </a >
        </li>
        `;
    }).join('');

    return gallery;
}

const lightbox = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionDelay: 250,
});
