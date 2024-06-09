gsap.from('.img2', 1.2, {opacity:0, y:-150, delay: 0.5});
gsap.from('.img3', 1.2, {opacity:0, y:150, delay:1.9});
gsap.from('.img4', 1.2, {opacity:0, y:350, delay: 3.3});
gsap.from('.img5', 1.2, {opacity:0, y:200, delay:2.6});
gsap.from('.img6', 1.2, {opacity:0, y:-150, delay: 1.2});
gsap.from('.img7', 1.2, {opacity:0, y:-80, delay:4});
gsap.from('h1', 1.2, {opacity:0, y:-150, delay:4.2});
gsap.from('h2', 1.2, {opacity:0, y:-150, delay:4.5});

const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    menu.classList.toggle('active');
}