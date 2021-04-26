
const buttonOpen = document.getElementById('OpenModal');
const buttonClose = document.getElementById('CloseModal');
const modal = document.getElementById('modal');

const toogleActiveModal = () => {modal.classList.toggle('active')}
buttonClose.addEventListener('click', toogleActiveModal)
buttonOpen.addEventListener('click', toogleActiveModal)
