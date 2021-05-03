 // Handle cell click
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

// The goal is to generate a grid of 8 cells*8

var invaderElement = document.getElementById('invader');

//We will count from 0 to 7 in a for instruction
for (let counter = 0; counter < 8; counter ++) {

    // Generate a div with the class 'row'
    var rowElement = document.createElement('div');
    rowElement.className = 'row';

    //insert The 'row' div inside 'invader' div.
    invaderElement.appendChild(rowElement);

    //count from 0 to 7
    //Use the same process as above
    for (var cellCounter = 0; cellCounter < 8; cellCounter ++){
        var cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.addEventListener('click', handleCellClick);
        rowElement.appendChild(cellElement);
    }
}



