const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');

// Sample images array
const images = [
  { title: "Mountain", url: "https://source.unsplash.com/400x300/?mountain" },
  { title: "Beach", url: "https://source.unsplash.com/400x300/?beach" },
  { title: "Forest", url: "https://source.unsplash.com/400x300/?forest" },
  { title: "City", url: "https://source.unsplash.com/400x300/?city" },
  { title: "Desert", url: "https://source.unsplash.com/400x300/?desert" },
  { title: "River", url: "https://source.unsplash.com/400x300/?river" },
  { title: "Snow", url: "https://source.unsplash.com/400x300/?snow" },
];

// Render gallery
function renderGallery(filter = '') {
  gallery.innerHTML = '';
  images
    .filter(img => img.title.toLowerCase().includes(filter))
    .forEach(img => {
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-md-4 col-lg-3 mb-3';
      col.innerHTML = `
        <div class="card shadow-sm">
          <img src="${img.url}" class="card-img-top" alt="${img.title}">
          <div class="card-body p-2">
            <h5 class="card-title">${img.title}</h5>
          </div>
        </div>
      `;
      gallery.appendChild(col);
    });
}

// Initial render
renderGallery();

// Search functionality
searchInput.addEventListener('input', () => {
  renderGallery(searchInput.value.trim().toLowerCase());
});
