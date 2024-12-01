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

const data = [
    "Taj Mahal, Agra",
    "Jaipur, Rajasthan",
    "Varanasi, Uttar Pradesh",
    "Goa Beaches",
    "Kerala Backwaters",
    "Leh-Ladakh",
    "Rishikesh, Uttarakhand",
    "Hampi, Karnataka"
];

const naturalPlaces = [
    "Backwaters of Kerala",
    "Valley of Flowers, Uttarakhand",
    "Dal Lake, Srinagar",
    "Great Rann of Kutch, Gujarat",
    "Sundarbans, West Bengal",
    "Munnar, Kerala",
    "Andaman and Nicobar Islands",
    "Coorg, Karnataka"
];

const adventurePlaces = [
    "Leh-Ladakh, Jammu and Kashmir",
    "Rishikesh (for River Rafting), Uttarakhand",
    "Jim Corbett National Park, Uttarakhand",
    "Gir National Park, Gujarat",
    "Kaziranga National Park, Assam",
    "Spiti Valley, Himachal Pradesh",
    "Ziro Valley, Arunachal Pradesh",
    "Manali, Himachal Pradesh"
];

const spiritualPlaces = [
    "Varanasi, Uttar Pradesh",
    "Rameswaram, Tamil Nadu",
    "Golden Temple, Amritsar",
    "Bodh Gaya, Bihar",
    "Tirupati, Andhra Pradesh",
    "Dwarka, Gujarat",
    "Jagannath Temple, Puri",
    "Haridwar, Uttarakhand"
];

const beachPlaces = [
    "Goa Beaches",
    "Pondicherry Beaches",
    "Gokarna, Karnataka",
    "Varkala, Kerala",
    "Marina Beach, Chennai",
    "Radhanagar Beach, Andaman",
    "Alleppey, Kerala"
];
function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsList = document.getElementById("searchResults");
    
    // Clear previous results
    resultsList.innerHTML = "";

    if (input) {
        const filteredData = data.filter(item => item.toLowerCase().includes(input));

        filteredData.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            resultsList.appendChild(listItem);
        });
    }
}