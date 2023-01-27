const secondTxt = document.querySelector('.second-text');
const first = document.querySelector('.first-text');

const loadText = () => {
    setTimeout(() => {
        secondTxt.innerText = 'Front-end Developer';
    },0);
    // setTimeout(() => {
    //     first.innerText = 'I am an'
    //     secondTxt.innerText = 'Illustrator';
    //     secondTxt.style.fontSize = '20px';
    // },4000);
}
loadText();
// setInterval(loadText, 8000)