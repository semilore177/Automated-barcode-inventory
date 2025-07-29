const params = new URLSearchParams(window.location.search);
const category = params.get('category');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const selected = data[category];
    if (!selected) {
      document.getElementById('categoryTitle').innerText = "Category not found.";
      return;
    }

    document.getElementById('categoryTitle').innerText = selected.title;

    const subDiv = document.getElementById('subcategories');
    selected.subcategories.forEach(sub => {
      const btn = document.createElement('button');
      btn.innerText = sub;
      btn.onclick = () => {
        window.location.href = `scanner.html?category=${category}&sub=${sub}`;
      };
      subDiv.appendChild(btn);
    });
  })
  .catch(error => {
    document.getElementById('categoryTitle').innerText = "Error loading category.";
    console.error(error);
  });
