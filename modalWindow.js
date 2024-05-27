let showModalClick = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const closeModalUi = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModalUi = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const keyPress  = (e)  => {
  console.log('e:', e)
  if(e.key === "Escape") {
      // write your logic here.
  }
}

showModalClick.forEach((data) => data.addEventListener('click', openModalUi));

closeModal.addEventListener('click', closeModalUi);
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});

// #Esc key colse window Modal
const test =  document.addEventListener('keydown','keyPress()');
console.log('Test = ', test)