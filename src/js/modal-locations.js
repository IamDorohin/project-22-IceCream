const buttonLocation = document.querySelectorAll('.contacts__location');
const buttonFranchise = document.querySelectorAll('.contacts__franchise');
const overlayLocation = document.querySelector('.overlay-location');

buttonLocation.forEach(buttonLocation => {
  buttonLocation.addEventListener('click', () => {
    overlayLocation.classList.add('overlay-active');
  });
});

buttonFranchise.forEach(buttonFranchise => {
  buttonFranchise.addEventListener('click', () => {
    overlayLocation.classList.add('overlay-active');
  });
});

overlayLocation.addEventListener('click', event => {
  const target = event.target;

  if (target === overlayLocation || target.closest('.close-button')) {
    overlayLocation.classList.remove('overlay-active');
  }
});

// ! Карта

const map = L.map('map').setView([37.31267508561329, -95.58719171965691], 3.1);

// ! Иконка на карте

var coneIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2682/2682272.png',

  iconSize: [38, 38],
  shadowAnchor: [1, 1],
  popupAnchor: [0, -20],
});

var cupIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3372/3372531.png',

  iconSize: [32, 32],
  shadowAnchor: [1, 1],
  popupAnchor: [0, -20],
});

var stickIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2906/2906693.png',

  iconSize: [32, 32],
  shadowAnchor: [1, 1],
  popupAnchor: [0, -20],
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([40.70408655251643, -74.01314270422453], { icon: coneIcon })
  .addTo(map)
  .bindPopup('CAFE')
  .openPopup();

L.marker([41.86648817927191, -87.62405461465781], { icon: stickIcon })
  .addTo(map)
  .bindPopup('CAFE')
  .openPopup();

L.marker([33.97377903831772, -118.281373822565], { icon: cupIcon })
  .addTo(map)
  .bindPopup('FOOD TRUCK')
  .openPopup();
