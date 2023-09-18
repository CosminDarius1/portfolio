// Function to toggle section visibility based on scroll position
function toggleSectionVisibility() {
    const section = document.getElementById('about');
    const rect = section.getBoundingClientRect();

    // Show when section is in viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
}

window.addEventListener('scroll', toggleSectionVisibility);
