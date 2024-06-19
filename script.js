
const header = document.querySelector('#inicio');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});