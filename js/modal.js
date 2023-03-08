const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  form: document.querySelector('.modal-form'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  refs.form.reset();
  toggleModal();
  Toastify({
    text: 'Form submitted!',
    duration: 2000,
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: '#2196f3',
      color: '#fff',
    },
  }).showToast();
}
