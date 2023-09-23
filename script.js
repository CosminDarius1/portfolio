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
let modal2 = document.querySelector("#my-modal2");
let modal3 = document.querySelector("#my-modal3");

let img1 = document.querySelector('#my-img');
let img2 = document.querySelector('#my-img2');
let img3 = document.querySelector('#my-img3');
let img4 = document.querySelector('#my-img4');
let img5 = document.querySelector('#my-img5');

let modalImg1 = document.querySelector("#img01");
let modalImg2 = document.querySelector("#img02");
let modalImg3 = document.querySelector("#img03");

let captionText = document.querySelector("#caption");

img1.onclick = function () {
    console.log("inside");
    modal.style.display = "block";
    this.id === 'my-img'
        modalImg1.style.width = "60%";
        modalImg1.src = this.src;
        captionText.innerHTML = this.alt;
}
img2.onclick = function () {
    console.log("inside");
    modal2.style.display = "block";
    this.id === 'my-img2'
    modalImg2.style.width = "60%";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
};
img3.onclick = function () {
    console.log("inside");
    modal2.style.display = "block";
    this.id === 'my-img2'
    modalImg2.style.width = "60%";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function () {
    console.log("inside");
    modal3.style.display = "block";
    this.id === 'my-img4'
    modalImg3.style.width = "60%";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function () {
    console.log("inside");
    modal3.style.display = "block";
    this.id === 'my-img5'
    modalImg3.style.width = "60%";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}

let span = document.querySelectorAll(".close")[0];
let span2 = document.querySelectorAll('.close2')[0];
let span3 = document.querySelectorAll('.close3')[0];

console.log(span);
span.onclick = () => modal.style.display = "none";
span2.onclick = () => modal2.style.display = "none";
span3.onclick = () => modal3.style.display = "none";