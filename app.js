

function tapWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout( () => element.innerHTML += letter, 90 * index)
});
}


const title = document.querySelector('h1');
tapWriter(title);
