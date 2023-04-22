/* JavaScript code for My Website */

/* Add event listener to navigation links */
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var sectionId = this.getAttribute('href'); // Get the section ID from the link href
        var section = document.querySelector(sectionId); // Find the section with the ID
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section with smooth animation
    });
}

/* Add current page highlighting to navigation */
var currentPage = window.location.pathname.split('/').pop(); // Get the current page file name
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var linkHref = link.getAttribute('href').split('/').pop(); // Get the href file name
    if (linkHref === currentPage) {
        link.classList.add('current-page'); // Add the current-page class to the link if it matches the current page
    }
}
