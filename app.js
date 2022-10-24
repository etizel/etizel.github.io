

function tapWeiter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index, array) => {
    console.log(letter, index, array)
  })
}



const title = document.querySelector('h1');
tapWeiter(title);
