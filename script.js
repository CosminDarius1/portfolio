// Function to toggle section visibility based on scroll position
const text ="Hello there! I'm Cosmin, a passionate full-stack developer who is always looking to innovate and create meaningful solutions. I had the opportunity to develop my skills in HTML, CSS, JavaScript, PHP and MySQL at iO Academy, where I joined their award-winning bootcamp Full Stack Track Course. I also used frameworks like REACT and Slim to build projects by following Agile methodologies to work in a collaborative team environment. For a better glimpse of my work, please explore my projects below."
let charIndex= 0;
function type() {
    const element = document.querySelector("#typewriter-text");
    element.textContent += text.charAt(charIndex);
    charIndex++;
    if(charIndex < text.length) {
        setTimeout(type,30);
    }
}
type();

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
        modalImg1.style.width = "80%";
        modalImg1.src = this.src;
        captionText.innerHTML = this.alt;
}
img2.onclick = function () {
    console.log("inside");
    modal2.style.display = "block";
    this.id === 'my-img2'
    modalImg2.style.width = "80%";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
};
img3.onclick = function () {
    console.log("inside");
    modal2.style.display = "block";
    this.id === 'my-img2'
    modalImg2.style.width = "80%";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function () {
    console.log("inside");
    modal3.style.display = "block";
    this.id === 'my-img4'
    modalImg3.style.width = "80%";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function () {
    console.log("inside");
    modal3.style.display = "block";
    this.id === 'my-img5'
    modalImg3.style.width = "80%";
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