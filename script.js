// Function to toggle section visibility based on scroll position
function toggleSectionVisibility() {
    const section = document.querySelector('#about');

    const rect = section.getBoundingClientRect();
    console.log(window.innerHeight);
    console.log(rect);

    // Show when section is in viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        rect.classList.add('active');
    } else {
        rect.classList.remove('active');
    }
}

// window.addEventListener('scroll', toggleSectionVisibility);

let modal = document.querySelector("#my-modal");

let img = document.querySelector("#my-img");

let modalImg = document.querySelector("#img01");

let captionText = document.querySelector("#caption");

img.onclick = function () {
    console.log("inside");
    modal.style.display = "block";
    modalImg.style.width = "60%";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
let span = document.querySelectorAll(".close")[0];
console.log(span);
span.onclick = () => modal.style.display = "none";