const refs = {
  closeModalButton: document.querySelector(".register-modal-close-button"),
  modal: document.querySelector(".backdrop"),
  input: document.querySelector(".js-input"),
  form: document.querySelector(".js-register-modal-form"),
  submitButton: document.querySelector(".js-register-modal-form-button"),
  headerUserName: document.querySelector(".js-header-second-text"),
};
let savedWord = ""

function toggelModal() {
  refs.modal.classList.toggle("is-hidden");
}

function onBackdropClick(event) {
  console.log(event.target);
  if (event.target === refs.modal) {
    toggelModal();
  }
}

function onEscPress(event) {
  if (event.code === "Escape" && !refs.modal.classList.contains("is-hidden")) {
    toggelModal();
  }
} 

function onInputChange(event) {
  event.preventDefault();
  savedWord = refs.input.value;
  if (savedWord) {
    refs.headerUserName.textContent = `Вітаємо, ${savedWord}!`;
  }
  toggelModal();
}

(() => {
  refs.modal.addEventListener("click", onBackdropClick);
  refs.closeModalButton.addEventListener("click", toggelModal);
  document.addEventListener("keydown", onEscPress);
  refs.form.addEventListener("submit", onInputChange);
})();
