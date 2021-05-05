 const invaderGame = {
    gridSize:8,
    element: document.getElementById('invader'),
    // Generate a new grid givin size
    //Param : number for the size of grid
    generateGrid : function (gridSize) {
        for (let counter = 0; counter < gridSize; counter ++) {
            // Generate a div with the class 'row'
            var rowElement = document.createElement('div');
            rowElement.className = 'row';

            //insert The 'row' div inside 'invader' div.
            invaderGame.element.appendChild(rowElement);

            //count from 0 to 7
            //Use the same process as above
            for (var cellCounter = 0; cellCounter < gridSize; cellCounter ++){
                var cellElement = document.createElement('div');
                cellElement.className = 'cell';
                cellElement.addEventListener('click', invaderGame.handleCellClick);
                rowElement.appendChild(cellElement);
            }
        }
    },
    // Complete the form with an input and a button
    completeForm : function () {
        var inputElem = document.createElement('input')
        inputElem.className = 'field';
        inputElem.setAttribute('type', 'number');
        inputElem.setAttribute('placeholder','Taille de la grille');
        // setAttribute https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

        var formElem = document.querySelector('.configuration');
        formElem.addEventListener('submit',invaderGame.handleFormSubmit);
        formElem.appendChild(inputElem);
        // Créer le bouton : 
        var buttonElem = document.createElement('button');
            // je m'exite pas et je check qu'il se soit bien créer 
                // console.log(buttonElem);
            // je le configure 
        buttonElem.className = 'action';
            // Pour lui attribuer une class nous aurion pu aussi faire buttonElem.setAttributr('class','action');
        buttonElem.setAttribute('type', 'submit');
            // je modifie son texte 
        buttonElem.textContent='Valider';
        // je l'insère dans son parent form
        formElem.appendChild(buttonElem);

    },
    //Toggle white class on click
    handleCellClick : function (event) {
        var cellElement = event.target;
        cellElement.classList.toggle('white');
    },

    //Generate new grid on submit
    handleFormSubmit: function (event){
        event.preventDefault();
        var inputElem = document.querySelector('.field');
        invaderGame.gridSize = inputElem.valueAsNumber;
        invaderGame.element.innerHTML =''; 
        inputElem.value='';
        invaderGame.generateGrid(invaderGame.gridSize);
    },  
 };

// Step 1: The goal is to generate a grid of 8 cells*8
invaderGame.generateGrid(invaderGame.gridSize);
invaderGame.completeForm();

