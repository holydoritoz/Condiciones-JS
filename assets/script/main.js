
// Ejercicio N1.

function clickMe() {
  const userClick = document.getElementById('image');
  userClick.style.border = userClick.style.border === '2px solid red' ? 'none' : '2px solid red';
}


// Ejercicio N2.

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
