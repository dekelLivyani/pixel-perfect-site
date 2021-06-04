'use strict'

function overMoreRead(elBtnMoreRead) {
    elBtnMoreRead.innerText += '\xa0\xa0 ➡';
}

function overOutMoreRead(elBtnMoreRead) {
    var lenght = elBtnMoreRead.innerText.length;
    elBtnMoreRead.innerText = elBtnMoreRead.innerText.substring(0, lenght - 4);
}