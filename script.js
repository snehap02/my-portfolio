AOS.init({
    duration: 1000
});

const inputName = document.getElementById('namebox');
const box = document.querySelectorAll('input');
const msg = document.getElementById('message');
const forms = document.getElementById('form');

forms.addEventListener('click', () => {
    for(let singlebox of box){
        singlebox.classList.add('border-l-4', 'border-r-4', 'border-yellow', 'transition-all');
    }
    msg.classList.add('border-l-4', 'border-r-4', 'border-yellow', 'transition-all');
})

// const mouseCursor = document.querySelector('.cursor');

// function cursor(e){
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
// }

// window.addEventListener('mousemove', cursor);

const nav = document.getElementById('navbar');

let scrollT = 0;
window.addEventListener('scroll', () => {
    
})