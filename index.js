let modal = document.querySelector('.myModal')
dialogPolyfill.registerDialog(modal)

let dialogToast = document.querySelector('.toastBlock')
dialogPolyfill.registerDialog(dialogToast)

let toast = document.querySelector('.normalToast')

let toastModal = document.querySelector('.toastModal')
dialogPolyfill.registerDialog(toastModal)

function showHideModal() {
  if (modal.open) {
    modal.close()
  } else {
    modal.showModal()
  }
}

function showHideDialogToast () {
  if (dialogToast.open) {
    dialogToast.close()
  } else {
    dialogToast.show()
  }
}

function showHideToast () {
  if (toast.classList.contains('invisible')) {
    toast.classList.remove('invisible')
  } else {
    toast.classList.add('invisible')
  }
}

function showHideModalToast () {
  if (toastModal.open) {
    toastModal.close()
  } else {
    toastModal.showModal()
  }
}
