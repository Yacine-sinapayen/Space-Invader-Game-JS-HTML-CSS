 // Step 2: Handle cell click
function handleCellClick (event){
    // Target the object representing the event : cellElement
    // console.log('click');
    // var cellElement = event.target;
    // classList https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // If cell it's  white
        // if(cellElement.classList.contains('white')){
    // we remove it
        //cellElement.classList.remove('white');

     //Otherwise we put it back in white
        // } else {
        //     cellElement.classList.add ('white');
        // }

    // we can do exactly the same thing (above) with only one line of code thanks to the classList.toggle. Attention ça mache seuelemnt quand il y a deux cas. 
    event.target.classList.toggle('white')
}

//step 3 : handle form click
function handleFormSubmit(event){
    console.log('je réagis au submit');

    // Par default la soumission actualise la page, donc pour empécher ce comportement par default on utilise la méthode suivante :
    event.preventDefault();

    //On cible notre champ pour récupérer la valeur
    var inputElem = document.querySelector('.field');
        // avec querySelector on peut tout cibler tandis qu'avec getelementby id on ne cible que l'id.
    console.log(inputElem);
    //je veux récupérer la valeur à l'intérieur de l'input pour trouver l'info faire un :
    console.dir(inputElem);
        // la propriété valueasnumber stock la valeur dans l'input
    var value = inputElem.valueAsNumber;
    // effacer la grille actuel avec la méthode inner.html et une chaîne de caractère vide à la soumission
    invaderElement.innerHTML =''; 
        console.log(invaderElement)
    // Vider le champ
    inputElem.value='';
    // et générer une new grid en se servant de la valeur du champ
    generateGrid(value);
}

// Step 1: The goal is to generate a grid of 8 cells*8
var invaderElement = document.getElementById('invader');

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
// la grille de base faitr 8 cases sur 8
generateGrid(8);

// Step 3: create field and button inside form
function completeForm() {
    // créer un champ :
        //créer un input 
    var inputElem = document.createElement('input')
        // le configurer
    inputElem.className = 'field';
    inputElem.setAttribute('type', 'number');
    inputElem.setAttribute('placeholder','Taille de la grille');
    // setAttribute https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

        // cibler un parent
    var formElem = document.querySelector('.configuration');
            // possible de faire des queryselector complexe du type "document.querySelector('body form.configuration:firdt-child)"
            // console.log(formElem);
            // console.dir(formElem);

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
completeForm();
//Target the field
// form configuartion
//target the form
//insert in the form



