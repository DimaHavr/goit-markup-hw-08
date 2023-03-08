const allBtn = document.getElementById('all-btn');
const webBtn = document.getElementById('web-btn');
const appBtn = document.getElementById('app-btn');
const designBtn = document.getElementById('design-btn');
const marketingBtn = document.getElementById('marketing-btn');

const portfolioItems = document.querySelectorAll('.portfolio__item');

allBtn.addEventListener('click', () => {
  filterItems('all');
});

webBtn.addEventListener('click', () => {
  filterItems('web');
});

appBtn.addEventListener('click', () => {
  filterItems('app');
});

designBtn.addEventListener('click', () => {
  filterItems('design');
});

marketingBtn.addEventListener('click', () => {
  filterItems('marketing');
});

function filterItems(filter) {
  portfolioItems.forEach(item => {
    if (filter === 'all' || item.id === filter) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
