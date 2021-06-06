'use strict'

function OpenMenu() {
    document.body.classList.toggle('menu-open');
}

function openReadMore() {
    document.body.classList.add('more-open');
    var elModal = document.querySelector('.modal-read-more');
    elModal.style.display = "inline-block";
}

function closeModal() {
    document.body.classList.remove('more-open');
    var elModal = document.querySelector('.modal-read-more');
    elModal.style.display = "none";
    document.querySelector('#email-text').value = '';
}

function sendToEmail(ev) {
    ev.stopPropagation();
}