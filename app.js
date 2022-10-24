

function tapWeiter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout( () => {
      element.innerHTML += letter;
    }, 75 * index)
  })
}



const title = document.querySelector('h1');
tapWeiter(title);
const p = document.querySelector('p');


function writeP(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout( () => {
      element.innerHTML += letter;
    }, 75 * index)
  })
}

writeP(p);