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
let modal0 = document.querySelector("#my-modal0");
let modal1 = document.querySelector("#my-modal1");
let modal2 = document.querySelector("#my-modal2");
let modal3 = document.querySelector("#my-modal3");
let modal4 = document.querySelector("#my-modal4");

let img0 = document.querySelector('#my-img0');
let img1 = document.querySelector('#my-img1');
let img2 = document.querySelector('#my-img2');
let img3 = document.querySelector('#my-img3');
let img4 = document.querySelector('#my-img4');
let img5 = document.querySelector('#my-img5');
let img6 = document.querySelector('#my-img6');
let img7 = document.querySelector('#my-img7');

let modalImg0 = document.querySelector("#img0");
let modalImg1 = document.querySelector("#img01");
let modalImg2 = document.querySelector("#img02");
let modalImg3 = document.querySelector("#img03");
let modalImg4 = document.querySelector("#img04");

let captionText = document.querySelector("#caption");

img0.onclick = function () {
    console.log("inside");
    modal0.style.display = "block";
    this.id === 'my-img0'
    modalImg0.style.width = "80%";
    modalImg0.src = this.src;
    captionText.innerHTML = this.alt;
}

img1.onclick = function () {
    console.log("inside");
    modal1.style.display = "block";
    this.id === 'my-img1'
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
img6.onclick = function () {
    console.log("inside");
    modal4.style.display = "block";
    this.id === 'my-img6'
    modalImg4.style.width = "80%";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
}
img7.onclick = function () {
    console.log("inside");
    modal4.style.display = "block";
    this.id === 'my-img7'
    modalImg4.style.width = "80%";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
}
let span0 = document.querySelectorAll(".close0")[0];
let span1 = document.querySelectorAll(".close1")[0];
let span2 = document.querySelectorAll('.close2')[0];
let span3 = document.querySelectorAll('.close3')[0];
let span4 = document.querySelectorAll('.close4')[0];

console.log(span1);
span0.onclick = () => modal0.style.display = "none";
span1.onclick = () => modal1.style.display = "none";
span2.onclick = () => modal2.style.display = "none";
span3.onclick = () => modal3.style.display = "none";
span4.onclick = () => modal4.style.display = "none";