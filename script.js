const galleryItems = document.querySelectorAll('.art-card img');
const lightbox = document.getElementById('lightbox');
const fullImg = document.getElementById('full-img');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        fullImg.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox if user clicks outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== fullImg) {
        lightbox.style.display = 'none';
    }
});
