document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Dropdown Menu
    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function () {
            var dropdownMenu = dropdownToggle.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(function (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            });
        }
    });
});


// Hamburger menu functionality for mobile view
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle mobile menu
});
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("bg-fixed");
        } else {
            navbar.classList.remove("bg-fixed");
        }
    };
});