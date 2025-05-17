(() => {
  const refsq = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
  };

  refsq.openMenuBtn.addEventListener("click", toggleModal);
  refsq.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refsq.modal.classList.toggle("is-opens");
  }
})();
// =================

// (() => {
//     const refs = {
//       // Додати атрибут data-modal-open на кнопку відкриття
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       // Додати атрибут data-modal-close на кнопку закриття
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       // Додати атрибут data-modal на бекдроп модалки
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//       refs.modal.classList.toggle("is-open");
//     }
//   })();