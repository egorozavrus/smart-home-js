const statusTemp = document.getElementById('status-temp');
const statusLight = document.getElementById('status-light');
const statusKettle = document.getElementById('status-kettle')
const btnOff = document.getElementById('master-off-btn');

window.addEventListener('storage', function(event) {
  
  if (event.key === 'roomTemp') {
    statusTemp.innerText = 'Termostat: ' + event.newValue + '°C';
  }
  
  if (event.key === 'lightBrightness') {
    statusLight.innerText = 'Jasność: ' + event.newValue + '%';
  }
  
  if (event.key === 'kettleStatus') {
    if (event.newValue === 'boiling') {
      statusKettle.innerText = 'Czajnik: Gotowanie... ⚡';
    } else {
      statusKettle.innerText = 'Czajnik: Gotowy! 🫖';
    }
  }
});

btnOff.addEventListener('click', function() {
  localStorage.setItem('masterCommand', 'kill-all');
  localStorage.removeItem('masterCommand');
});