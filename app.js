
function tapInit() {
function tapWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout( () => element.innerHTML += letter, 90 * index)
});
}


const title = document.querySelector('h1');
tapWriter(title);
}
tapInit();


const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');



function scrollIntoSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}


linksInternos.forEach((link) => {
  link.addEventListener('click', scrollIntoSection);
})