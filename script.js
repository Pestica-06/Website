// Toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-content');
    const isDropdownButton = event.target.matches('.dropbtn');
    const isMenuButton = event.target.closest('.menu-icon');

    // Close dropdown if clicking outside of it (when it's open)
    if (!isDropdownButton && !isMenuButton && dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }

    // Toggle the dropdown menu when the button is clicked
    if (isDropdownButton) {
        dropdown.classList.toggle('show');
    }
});
