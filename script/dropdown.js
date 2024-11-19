document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-dropdown-header');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const content = dropdown.nextElementSibling;

            // Toggle visibility
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
