"use strict";

const state = {
  tempEl: document.getElementById("temp"),
  tempConEl: document.getElementById("temp-container"),
  tempIncrease: document.getElementById("temp-increase"),
  tempDecrease: document.getElementById("temp-decrease"),
  tempVal: parseInt(document.getElementById("temp").textContent),
  landscapeEl: document.getElementById("landscape"),
}

// Wave2
const changeTempColor = () => {
  if (state.tempVal > 80) {
    state.tempEl.className = 'above80Temp';
    state.tempConEl.className = 'above80Bk';
  } else if (state.tempVal < 80 && state.tempVal > 69) {
    state.tempEl.className = 'temp69To80';
    state.tempConEl.className = 'temp69To80Bk';
  } else if (state.tempVal < 70 && state.tempVal > 59) {
    state.tempEl.className = 'temp59To70';
    state.tempConEl.className = 'temp59To70Bk';
  } else if (state.tempVal < 60 && state.tempVal > 49) {
    state.tempEl.className = 'temp49To60';
    state.tempConEl.className = 'temp49To60Bk';
  } else if (state.tempVal < 50) {
    state.tempEl.className = 'blow50';
    state.tempConEl.className = 'blow50Bk';
  };
}

const changeLandscape = () => {
  const landscapeImage = document.getElementById("landscape-img");
  if (state.tempVal >= 80) {
    landscapeImage.src = 'assets/landscapes/dunes.jpg';
    landscapeImage.alt = 'Desert dunes landscape';
  } else if (state.tempVal < 80 && state.tempVal >= 70) {
    landscapeImage.src = 'assets/landscapes/grass.jpg';
    landscapeImage.alt = 'Happy cow in lush grassy green hills landscape';
  } else if (state.tempVal < 70 && state.tempVal >= 33) {
    landscapeImage.src = 'assets/landscapes/forest.jpg';
    landscapeImage.alt = 'Foggy dense forest landscape';
  } else {
    landscapeImage.src = 'assets/landscapes/tundra.jpg';
    landscapeImage.alt = 'Icy expansive landscape';
  }
}

state.tempIncrease.addEventListener('click', (event) => {
  event.preventDefault()
  state.tempVal += 1;
  state.tempEl.textContent = state.tempVal;
  changeTempColor();
  changeLandscape();
})

state.tempDecrease.addEventListener('click', (event) => {
  event.preventDefault()
  state.tempVal -= 1;
  state.tempEl.textContent = state.tempVal;
  changeTempColor();
  changeLandscape();
})