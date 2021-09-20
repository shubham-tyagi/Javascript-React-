'use strict';

const clsModalBtn = document.querySelector('.close-modal');
const opnModalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < opnModalBtn.length; i++) {
  opnModalBtn[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

clsModalBtn.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);
