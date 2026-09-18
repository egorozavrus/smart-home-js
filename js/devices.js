const tempDisplay = document.getElementById('temp-display');
const btnDown = document.getElementById('temp-down');
const btnUp = document.getElementById('temp-up');
const ecoMode = document.getElementById('eco-mode');
let myTimer;

let currentTemp = 21;

function tempUp() {
  let maxLimit = 30;
  
  if (ecoMode.checked){
    maxLimit = 22;
  }
  
  if (currentTemp < maxLimit) {
    currentTemp++;
    updateDisplay();
  }
}

function tempDown() {
  if (currentTemp > 15) {
    currentTemp--;
    updateDisplay();
  }
}

function updateDisplay() {
  tempDisplay.innerText = currentTemp + '°C';
  
  if (currentTemp <= 20) {
    tempDisplay.style.color = 'blue';
  } else if (currentTemp >= 25) {
    tempDisplay.style.color = 'red';
  } else {
    tempDisplay.style.color = 'green';
  }
  localStorage.setItem('roomTemp', currentTemp);
}

btnUp.addEventListener('click', tempUp);
btnDown.addEventListener('click', tempDown);

ecoMode.addEventListener('change', function() {
  if (ecoMode.checked && currentTemp > 22) {
    currentTemp = 22;
    updateDisplay();
  }
});

// === LOGIKA OŚWIETLENIA ===
const lightBulb = document.getElementById('light-bulb');
const brightSlider = document.getElementById('brightness-slider');
const brightValue = document.getElementById('brightness-value');

function adjustLight() {
  brightValue.innerText = 'Jasność: ' + brightSlider.value + '%';
  lightBulb.style.opacity = brightSlider.value / 100;
  lightBulb.style.boxShadow = `0 0 ${brightSlider.value}px rgba(241, 196, 15, 0.5)`;
  
  localStorage.setItem('lightBrightness', brightSlider.value);
}

brightSlider.addEventListener('input', adjustLight);


// === LOGIKA CZAJNIKA Z STAPEREM ===
const kettleStatus = document.getElementById('kettle-status');
const timerBtn = document.getElementById('timer-btn');

function startBrewing() {
  let timeLeft = 5;
  
  localStorage.setItem('kettleStatus', 'boiling');
  
  kettleStatus.innerText = 'Woda się gotuje... ⚡';
  timerBtn.disabled = true;
  timerBtn.innerText = `Parzenie (${timeLeft} sek)`;
  
  myTimer = setInterval(function() {
    timeLeft--;
    timerBtn.innerText = `Parzenie (${timeLeft} sek)`;
    
    if (timeLeft === 0) {
      clearInterval(myTimer);
      kettleStatus.innerText = 'Herbata jest gotowa! 🫖';
      timerBtn.disabled = false;
      timerBtn.innerText = 'Parz (5 sek)';
      localStorage.setItem('kettleStatus', 'ready');
    }
  }, 1000);
}

timerBtn.addEventListener('click', startBrewing);


window.addEventListener('storage', function(event) {
  if (event.key === 'masterCommand' && event.newValue === 'kill-all') {
    brightSlider.value = 0;
    adjustLight();
    clearInterval(myTimer);
    kettleStatus.innerText = 'Status: Wyłączony';
    timerBtn.disabled = false;
    timerBtn.innerText = 'Parz (5 sek)';
    
    currentTemp = 20;
    ecoMode.checked = false;
    updateDisplay();
  }
});