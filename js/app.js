 //Step 2 : Toggle white class on click
function handleCellClick (event){
    event.target.classList.toggle('white')
}

// Step 4.a : Generate new grid on submit
function handleFormSubmit(event){
    console.log('je réagis au submit');

    event.preventDefault();

    var inputElem = document.querySelector('.field');
    console.log(inputElem);
    console.dir(inputElem);
    var value = inputElem.valueAsNumber;
    invaderElement.innerHTML =''; 
        console.log(invaderElement)
    inputElem.value='';
    generateGrid(value);
}

// Step 4.b : Generate a new grid with the given size
//Param : number for teh size of grid
function generateGrid (gridSize){
    //We will count from 0 to 7 in a for instruction
    for (let counter = 0; counter < gridSize; counter ++) {
    
        // Generate a div with the class 'row'
        var rowElement = document.createElement('div');
        rowElement.className = 'row';
    
        //insert The 'row' div inside 'invader' div.
        invaderElement.appendChild(rowElement);
    
        //count from 0 to 7
        //Use the same process as above
        for (var cellCounter = 0; cellCounter < gridSize; cellCounter ++){
            var cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.addEventListener('click', handleCellClick);
            rowElement.appendChild(cellElement);
        }
    }
}


// Step 3: Create form with an inupt and button
function completeForm() {
    var inputElem = document.createElement('input')
    inputElem.className = 'field';
    inputElem.setAttribute('type', 'number');
    inputElem.setAttribute('placeholder','Taille de la grille');
    // setAttribute https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

        // cibler un parent
    var formElem = document.querySelector('.configuration');
            // possible de faire des queryselector complexe du type "document.querySelector('body form.configuration:firdt-child)"
    // on cible notre formulaire afin d'écouter l'événement submit
    formElem.addEventListener('submit',handleFormSubmit);
        
        // insérer l'input dans le parent
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

            //console.log(buttonElem);
        // je l'insère dans son parent form
        formElem.appendChild(buttonElem);

}; 


// Step 1: The goal is to generate a grid of 8 cells*8
var invaderElement = document.getElementById('invader');

generateGrid(8);
completeForm();



