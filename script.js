const body = document.querySelector('body');
const nav = document.querySelector('.top-nav');
const topOfNav = nav.offsetTop;
const abc = document.querySelector('.clickForUp');
window.addEventListener('scroll', changes);


function changes() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
        document.body.style.paddingTop = 0 + 'px';
    }
    if (window.scrollY >= 1000) {
        document.body.classList.add('up');
    } else {
        document.body.classList.remove('up');
    }

}

abc.addEventListener('click', function() {
    window.scrollTo(0, 0);
});