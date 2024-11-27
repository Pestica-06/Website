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
[
    {
      "image": "./assets/images/beach.jpg",
      "altText": "India Tour",
      "title": "India Tour Packages",
      "tours": 0
    },
    {
      "image": "./assets/images/boy_pic.jpg",
      "altText": "International Tour",
      "title": "International Tour Packages",
      "tours": 0
    },
    {
      "image": "./assets/images/kerala.jpg",
      "altText": "Honeymoon Package",
      "title": "International Honeymoon Packages",
      "tours": 0
    },
    {
      "image": "./assets/images/beach.jpg",
      "altText": "Europe Tour",
      "title": "Europe Tour Packages",
      "tours": 0
    },
    {
      "image": "./assets/images/cable.webp",
      "altText": "Educational Tour",
      "title": "Educational Tour Packages",
      "tours": 0
    }
  ]