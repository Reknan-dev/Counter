// Creazione dei pulsanti

let btnDec = document.createElement("button");
btnDec.setAttribute("class", "button-dec");
btnDec.innerHTML = "-";

let btnRes = document.createElement("button");
btnRes.setAttribute("class", "button-res");
btnRes.innerHTML = "R";

let btnInc = document.createElement("button");
btnInc.setAttribute("class", "button-inc");
btnInc.innerHTML = "+";
let container = document.querySelector(".button-container");

// Creazione dei contenitori per i pulsanti
let incContainer = document.createElement("div");
let decContainer = document.createElement("div");
let resContainer = document.createElement("div");

// Aggiunta delle classi ai contenitori
incContainer.setAttribute("class", "inc-container");
decContainer.setAttribute("class", "dec-container");
resContainer.setAttribute("class", "res-container");

// Aggiunta dei pulsanti ai rispettivi contenitori

decContainer.appendChild(btnDec);
resContainer.appendChild(btnRes);
incContainer.appendChild(btnInc);

container.appendChild(decContainer);
container.appendChild(resContainer);
container.appendChild(incContainer);

// Creazione del contatore e visualizzazione iniziale
let counter = 0;
let counterDisplay = document.createElement("div");
counterDisplay.setAttribute("id", "num");
counterDisplay.innerHTML = counter;
document.querySelector(".container .level-container").appendChild(counterDisplay);

// Aggiunta degli event listener per i pulsanti
btnInc.addEventListener("click", function () {
  counter++;
  counterDisplay.innerHTML = counter;
  incrementCounter();
  checkBackgroundColor();
  playButtonSound();
});

btnDec.addEventListener("click", function () {
  counter--;
  counterDisplay.innerHTML = counter;
  incrementCounter();
  playButtonSound();
});

btnRes.addEventListener("click", function () {
  counter = 0;
  counterDisplay.innerHTML = counter;
  incrementCounter();
  playResetSound();
});

// riferimento all'elemento Pokemon

let pokemonElement = document.querySelector(".pokemon-container .pokemon1");

function changePokemonClass(className) {
  const pokemonClasses = ["pokemon0", "pokemon1", "pokemon2", "pokemon3"];
  pokemonClasses.forEach((c) => pokemonElement.classList.remove(c));
  pokemonElement.classList.add(className);
}



function checkCounter() {
  if (counter <= -1) {
    changePokemonClass('pokemon0');
  } else if (counter >= 0 && counter < 16) {
    changePokemonClass('pokemon1');
  } else if (counter >= 16 && counter < 36) {
    changePokemonClass('pokemon2');
  } else if (counter >= 36) {
    changePokemonClass('pokemon3');
  }
}

// funzione per il cambio colore del background e del testo

function checkBackgroundColor() {
  if (counter == 0 || counter === 16 || counter === 36) {
    setTimeout(function () {
      document.getElementById("screen").style.backgroundColor = "black";
      document.querySelector(".container").style.backgroundColor = "white";
    });

    setTimeout(function () {
      document.getElementById("screen").style.backgroundColor = "";
    }, 2000);
  }
}

// funzione per il cambio nome

let pokemonName1 = document.querySelector(".container .pokemon-name1");

function changeName() {
  if (counter === -1) {
    pokemonName1.textContent = "???";
  } else if (counter >= 0 && counter < 16) {
    pokemonName1.textContent = "Charmander";
  } else if (counter >= 16 && counter < 36) {
    pokemonName1.textContent = "Charmeleon";
  } else if (counter >= 36) {
    pokemonName1.textContent = "Charizard";
  }
}

// funzione per la barra dell'esperienza

const experienceBar = document.querySelector(".container .fill");

function updateExperienceBar() {
  if (counter < 16) {
    experienceBar.style.width = `${(counter / 16) * 100}%`;
  } else if (counter >= 16 && counter < 36) {
    experienceBar.style.width = `${((counter - 16) / 20) * 100}%`;
  } else if (counter >= 36) {
    experienceBar.style.width = "100%";
  }
}

// funzione per l'inserimento dei suoni

const buttonSound = document.getElementById("button-sound");
const levelUpSound = document.getElementById("levelup-sound");
const resetSound = document.getElementById("reset-sound");

function playButtonSound() {
  buttonSound.currentTime = 0;
  buttonSound.play();
}

function playLevelUpSound() {
  levelUpSound.currentTime = 0;
  levelUpSound.play();
}

function levelUp() {
  if (counter === 16 || counter === 36) {
    playLevelUpSound();
  }
}

function playResetSound() {
  resetSound.currentTime = 0;
  resetSound.play();
}



// Funzione per incrementare il contatore

function incrementCounter() {
  counterDisplay.innerHTML = counter;
  checkCounter();
  changeName();
  updateExperienceBar();
  levelUp();
}

incrementCounter();



