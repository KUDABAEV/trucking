$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.nav,.header__burger-elements').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('select').styler();
})

const slider = document.querySelector('.slider');
const track = document.querySelector('.slider__track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const allItemSlider = document.querySelectorAll('.slider__item');
const sliderPage = document.querySelector('.slider__page');
const sliderPageMax = document.querySelector('.slider__page-max');

let index = 0;
let sliderWidth;

const init = () => {
    sliderWidth = slider.offsetWidth;
    track.style.width = sliderWidth * allItemSlider.length + 'px';
    sliderPage.textContent = 1;
    sliderPageMax.textContent = allItemSlider.length;
    checkBtn();
};

const prevClick = () => {
    index--;
    if (index < 0) {
        index = allItemSlider.length - 1;
    }
    const offset = sliderWidth * index;
    track.style.transform = `translateX(-${offset}px)`;
    console.log('prev')
    sliderPage.textContent = index + 1;
    checkBtn();
};

const nextClick = () => {
    index++;
    if (index > allItemSlider.length - 1) {
        index = 0;
    }
    const offset = sliderWidth * index;
    track.style.transform = `translateX(-${offset}px)`;
    console.log('next')
    sliderPage.textContent = index + 1;
    checkBtn();
};

const checkBtn = () => {
    if (index >= allItemSlider.length - 1) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    if (index === 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
}

prev.addEventListener('click', prevClick);
next.addEventListener('click', nextClick);

window.addEventListener('resize', init);

init();
