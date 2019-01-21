function openModal() {
  let dialog = document.querySelector('.myModal')
  dialog.showModal()
}

function closeModal() {
  let dialog = document.querySelector('.myModal')
  dialog.close()
}

function showToast () {
  let toast = document.querySelector('.myToast')
  toast.classList.remove('invisible')
}

function closeToast () {
  let toast = document.querySelector('.myToast')
  toast.classList.add('invisible')
}
