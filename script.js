let CloseButton = document.querySelector('.close_btn');
let Container = document.querySelector('.container');

CloseButton.addEventListener('click', () => {
    Container.classList.toggle('Close_container');
});