console.log('linked');

// Gets the items to be clicked on and class toggle to be applied to
const bird = document.querySelector('.bird');
const modal = document.querySelector('#modal');
const modalBird = document.querySelector('.center-bird');

// Creates function that toggles the classes on the modal
const toggleClass = () => {
  modal.classList.toggle('modal');
  modal.classList.toggle('none');
}

// When you click on the bird on a page, toggle the classes
bird.addEventListener(
  'click',
  toggleClass,
  false);

// When you click on the bird on the modal, closes the modal
modalBird.addEventListener(
  'click',
  toggleClass,
  false);
