
// These consts return null
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


// becuase the consts return null, these dont work
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


// this works fine
document.addEventListener("mouseenter", function() {
    console.log('It works on each visit!');
});
