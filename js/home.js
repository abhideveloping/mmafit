let btn = document.querySelector('button');
let screenSize = document.querySelector('.screenSize');
let windowSize = document.querySelector('.windowSize');
let contentSize = document.querySelector('.contentSize');

btn.addEventListener('click', () => {
    screenSize.innerText = `Screen Height: ${screen.height} - Screen Width: ${screen.width}`;

    windowSize.innerText = `Window Height: ${window.outerHeight} - Window Width: ${window.outerWidth}`;

    contentSize.innerText = `Content Height: ${window.innerHeight} - Content Width: ${window.innerWidth}`;
});

