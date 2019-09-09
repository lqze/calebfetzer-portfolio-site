
/* Caleb Fetzer */

function hideNavOnScroll() {
  let navBar = document.querySelector('nav');
  window.addEventListener('scroll', function (e) {
    console.log(window.scrollY);
    console.log(e);
  })
}

export default { hideNavOnScroll };