const invaderGame = {
  gridSize: 8,
  element: document.getElementById("invader"),
  // Générer une nouvelle grille en fonction de la taille
  generateGrid: function (gridSize) {
    for (let counter = 0; counter < gridSize; counter++) {
      // Générer les lignes via une div avec la class "row"
      var rowElement = document.createElement("div");
      rowElement.className = "row";

      // J'insère ma div = "rowElement" dans la div parent "invader"
      // invaderGame correspond à mon {}
      // element: document.getElementById('invader') cf plus haut
      invaderGame.element.appendChild(rowElement);

      // Générer les Cellules à l'intérieur des rows
      for (var cellCounter = 0; cellCounter < gridSize; cellCounter++) {
        var cellElement = document.createElement("div");
        cellElement.className = "cell";
        cellElement.addEventListener("click", invaderGame.handleCellClick);
        rowElement.appendChild(cellElement);
      }
    }
  },
  // Création d'un formulaire avec un boutton et un input
  completeForm: function () {
    var inputElem = document.createElement("input");
    inputElem.className = "field";
    inputElem.setAttribute("type", "number");
    inputElem.setAttribute("placeholder", "Taille de la grille");
    // setAttribute https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

    var formElem = document.querySelector(".configuration");
    formElem.addEventListener("submit", invaderGame.handleFormSubmit);
    formElem.appendChild(inputElem);
    // Créer le bouton :
    var buttonElem = document.createElement("button");
    // je m'exite pas et je check qu'il se soit bien créer
    // console.log(buttonElem);
    // je le configure
    buttonElem.className = "action";
    // Pour lui attribuer une class nous aurion pu aussi faire buttonElem.setAttributr('class','action');
    buttonElem.setAttribute("type", "submit");
    // je modifie son texte
    buttonElem.textContent = "Valider";
    // je l'insère dans son parent form
    formElem.appendChild(buttonElem);
  },
  // Basculer sur la class "white" au click
  handleCellClick: function (event) {
    var cellElement = event.target;
    cellElement.classList.toggle("white");
  },

  // À la soumission générer une nouvelle grille
  handleFormSubmit: function (event) {
    event.preventDefault();
    var inputElem = document.querySelector(".field");
    invaderGame.gridSize = inputElem.valueAsNumber;
    invaderGame.element.innerHTML = "";
    inputElem.value = "";
    invaderGame.generateGrid(invaderGame.gridSize);
  },
};

invaderGame.generateGrid(invaderGame.gridSize);
invaderGame.completeForm();
