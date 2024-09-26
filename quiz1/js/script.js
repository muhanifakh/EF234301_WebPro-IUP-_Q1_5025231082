// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.id = 'backToTop';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundColor = '#28a745';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Toggle Dark Mode';
darkModeToggle.id = 'darkModeToggle';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '60px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.backgroundColor = '#333';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add styles for dark mode
const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #1c1c1c;
        color: white;
    }
    .dark-mode .border {
        border-color: #28a745 !important;
    }
    .dark-mode .btn-success, .dark-mode .btn-danger {
        background-color: #e73213 !important;
        border-color: #e73213 !important;
        color: #fff;
    }
    .dark-mode .btn-outline-secondary {
        color: #e73213;
        border-color: #e73213;
    }
    .dark-mode .btn-outline-secondary:hover {
        background-color: #e73213;
        color: #fff;
    }
    .dark-mode .card {
        background-color: #333;
        color: white;
        border: none; /* Adjust border if needed */
    }
    .dark-mode .card-title {
        color: #e6e6e6; /* Make sure card title stands out */
    }
    .dark-mode .card-text {
        color: #d3d3d3; /* Adjust card text color */
    }
    .dark-mode .tips-section {
        background-color: #333; /* Dark background for the tips section */
        color: white; /* Ensure the text is white */
        border-radius: 10px; /* Optional */
    }
    .dark-mode .tips-section .list-group-item {
        background-color: #333; /* Match background color */
        color: white; /* Ensure text is visible */
        border: none; /* Remove borders */
    }
`;




document.head.appendChild(darkModeStyles);
