const viewer = document.querySelector('#lightbox');
const enlargedImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const originalLink = document.querySelector('#original-link');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    enlargedImage.src = button.dataset.image;
    enlargedImage.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    originalLink.href = button.dataset.image;
    viewer.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('#close-lightbox').addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => document.body.classList.remove('modal-open'));
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
document.querySelectorAll('.video-detail').forEach(detail => {
  detail.addEventListener('toggle', () => { if (!detail.open) detail.querySelector('video').pause(); });
});
