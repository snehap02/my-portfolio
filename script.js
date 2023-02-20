AOS.init({
    duration: 1000
});

const inputName = document.getElementById('namebox');
const box = document.querySelectorAll('input');
const msg = document.getElementById('message');

inputName.addEventListener('click', () => {
    for(let singlebox of box){
        singlebox.classList.add('border-l-4', 'border-r-4', 'border-yellow', 'transition-all');
    }
    msg.classList.add('border-l-4', 'border-r-4', 'border-yellow', 'transition-all');
})