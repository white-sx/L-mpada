let turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
  if (!isLampBroken ()) {
    lamp.src = 'image/ligada.jpg';
  }
}

function lampOff () {
  if (!isLampBroken ()) {
    lamp.src = 'image/desligada.jpg';
  }
}

function lampBroken () {
  lamp.src = 'image/quebrada.jpg';
}



turnOn.addEventListener('click', e => {
  document.getElementById('turnOn').innerHTML = 'Desligar';
  if (turnOn.textContent === 'Desligar') {
    lampOn();

  }
});

turnOn.addEventListener('dblclick', e => {
  document.getElementById('turnOn').innerHTML = 'Ligar';
  if (turnOn.innerHTML === 'Ligar') {
    lampOff();
  }
});

//turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken)