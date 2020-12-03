//MENU BUTTON

const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let nav = selectElement('body');
menuToggler.addEventListener('click', function() {
    nav.classList.toggle('show');
});