document.addEventListener('DOMContentLoaded', () => {
  fetch('shared/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      document.querySelectorAll('.navbar-toggler').forEach(button => {
        button.addEventListener('click', () => {
          const target = document.querySelector(button.getAttribute('data-bs-target'));
          target.classList.toggle('show');
        });
      });
    })
    .catch(error => console.error('Error loading navbar:', error));
});
