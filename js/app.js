 // Handle cell click
function handleCellClick (){
    console.log('je réagis au click');
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



