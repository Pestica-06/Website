function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  const isDropdownButton = event.target.matches(".dropbtn");
  const currentDropdown = event.target
    .closest(".dropdown")
    ?.querySelector(".dropdown-content");

  // Close all open dropdowns
  dropdowns.forEach((dropdown) => {
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove("show");
    }
  });

  // Toggle the clicked dropdown menu
  if (isDropdownButton && currentDropdown) {
    currentDropdown.classList.toggle("show");
  }
});

// Close the dropdown menu when clicking outside
document.addEventListener("click", function (event) {
  const isDropdown = event.target.closest(".dropdown");
  if (!isDropdown) {
    document.querySelectorAll(".dropdown-content.show").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }
});

// Fetch data from the JSON file and render the cards
let allPackages = [];

// Fetch data from the JSON file and render the initial cards
fetch("./assests/json/places.json")
  .then((response) => response.json())
  .then((data) => {
    allPackages = data.packages; // Store all packages for filtering
    renderPackages(allPackages); // Render all packages initially
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to render packages dynamically
function renderPackages(packages) {
  const container = document.getElementById("packages");
  container.innerHTML = ""; // Clear existing packages

  if (packages.length === 0) {
    container.innerHTML = `<p>No packages found.</p>`;
    vb;

    return;
  }

  packages.forEach((packageItem) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-image">
        <img src="${packageItem.image}" alt="${packageItem.title}">
      </div>
      <div class="card-content">
        <h3>${packageItem.title}</h3>
        <button class="button">${packageItem.count} TOURS</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => {
      localStorage.setItem("packageName", packageItem.title);
      window.location.href = "./assests/pages/packages.html";
    });
    container.appendChild(card);
  });
}

// Function to filter packages based on the search query
function filterPackages() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredPackages = allPackages.filter((packageItem) =>
    packageItem.title.toLowerCase().includes(query)
  );
  renderPackages(filteredPackages);
}

//form validation

document
  .getElementById("enquiryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name.length < 3) {
      alert("Please enter a valid name (at least 3 characters).");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (optional)
    if (phone && !/^\+?\d{10,15}$/.test(phone)) {
      alert("Please enter a valid phone number (10-15 digits).");
      return;
    }

    // Message validation
    if (message.length < 10) {
      alert("Your message should be at least 10 characters long.");
      return;
    }

    // If all validations pass
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById("enquiryForm").reset(); // Clear the form
  });

function selectCategory(category) {
  localStorage.setItem("selectedCategory", category);
  window.location.href = "./assests/pages/roughdetails.html"; // Redirect to the packages page
}
