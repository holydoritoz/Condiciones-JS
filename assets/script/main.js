
// Ejercicio N1.
// Se debe construir una página con una única imagen, al hacerle click a la imagen se
// le debe agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe
// quitar el borde.


function clickMe() {
  const userClick = document.getElementById('image');
  userClick.style.border = userClick.style.border === '2px solid red' ? 'none' : '2px solid red';
}


// Ejercicio N2.
//Se debe construir una página web que permita pedir hasta 10 stickers de los 3 tipos
//disponibles. Para eso deberá existir un input debajo de cada imagen donde el
//usuario podrá ingresar un número. En caso de que la suma de todos los stickers
//seleccionados sea menor o igual 10 se indicará en un párrafo nuevo la cantidad de
//stickers llevados. Ejemplo "llevas 5 stickers" en cualquier otro caso se mostrará un
//texto que dice "Llevas demasiados stickers".


function stickerCalculator() {
  let userSticker1 = Number(document.getElementById('sticker-1').value);
  let userSticker2 = Number(document.getElementById('sticker-2').value);
  let userSticker3 = Number(document.getElementById('sticker-3').value);
  let finalResult = document.getElementById('output');

  let stickerSum = userSticker1 + userSticker2 + userSticker3;

  if (stickerSum <= 10) {
    finalResult.innerHTML = (`Tienes ${stickerSum} sticker`);
  } else {
    finalResult.innerHTML = 'Superaste el límite permitido';
  }
}


// Ejercicio N3.
// Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer
// click a la opción ingresar se debe verificar que el password sea 911 y en ese caso
// mostrar debajo del botón ingresar, un párrafo con el contenido "password 1
// correcto", en caso de que el password sea 714 se debe mostrar en el párrafo
// "password 2 es correcto", si ingresa otro valor se debe mostrar "password
// incorrecto"

function passwordValidation() {
  const userOption1 = Number(document.getElementById('box-1').value);
  const userOption2 = Number(document.getElementById('box-2').value);
  const userOption3 = Number(document.getElementById('box-3').value);
  const passwordResult = document.getElementById('pass-output');
  let passwordMessage = 'Password incorrecto';

  if (userOption1 === 9 && userOption2 === 1 && userOption3 === 1) {
    passwordMessage = 'Password 1 es correcto';
  } else if (userOption1 === 7 && userOption2 === 1 && userOption3 === 4) {
    passwordMessage = 'Password 2 es correcto';
  }
  passwordResult.innerHTML = passwordMessage;
}
