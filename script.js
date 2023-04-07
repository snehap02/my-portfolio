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

const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

function selectItems(e){
    removeBorder();
    removeContent();
    this.classList.add('border-b-4', 'border-black', 'py-[10px]', 'lg:py-[8px]');
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}
function removeContent(){
    tabContentItem.forEach(item => item.classList.remove('show'))
}
function removeBorder(){
    tabItem.forEach(item => item.classList.remove('border-b-4', 'border-black', 'py-[10px]', 'lg:py-[8px]'));
}
tabItem.forEach(item => item.addEventListener('click', selectItems));