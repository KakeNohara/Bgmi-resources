document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-dropdown-header');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const content = dropdown.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
