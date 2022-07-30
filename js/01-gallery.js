import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryOfImages = createGallery(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryOfImages);

// console.log(galleryBox)

function createGallery(galleryItems) {
    const gallery = galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${preview}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
        `;
    }).join('')

    return gallery;
}

galleryBox.addEventListener('click', onImageActive)

function onImageActive(evt) {
    evt.preventDefault()
    console.log(evt.target)

    const modal = new basicLightbox
        .create(`<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`);
    
    modal.show();

    window.addEventListener('keydown', evt => {
        if (evt.code === 'Escape' && modal.visible()) {
            modal.close();
        }
    })
}


