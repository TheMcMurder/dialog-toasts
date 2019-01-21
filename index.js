function openModal() {
  let dialog = document.querySelector('.myModal')
  console.log('dialog', dialog, 'test')
  console.log('opening dialog as modal')
  dialog.showModal()
  console.log('modal open')
}

function closeModal() {
  let dialog = document.querySelector('.myModal')
  dialog.close()
}

function showToast () {
  $('.myToast').toast('show')
}
