function createGrid(rows, cols) {
    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let r = 0; r < rows; r++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');

        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-column');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    attachEventListeners();
}

function attachEventListeners() {
    let container = document.getElementById('container');
    
    container.addEventListener('mouseover', handleGridHover);
}

function handleGridHover(event) {
    let cell = event.target;

    if (cell.classList.contains('grid-column')) {
        if (!cell.classList.contains('rainbow')) {
            cell.style.backgroundColor = 'black';
        } else {
            cell.style.backgroundColor = randomColour();
        }
    }
}

function removeGrid() {
    let container = document.getElementById('container');
    container.innerHTML = '';
}

function gridButtonPrompt() {
    let gridBtn = document.querySelector('#size-btn');

    gridBtn.addEventListener('click', () => {
        let userInput = prompt('Enter a new grid size from 1-100:');
        userInput = parseInt(userInput);

        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            alert('Invalid. Choose a number between 1-64');
        } else {
            removeGrid();
            createGrid(userInput, userInput);
            alert(`The grid is now ${userInput} x ${userInput}`);
        }
    });
}

function rainbowButton() {
    let rbwButton = document.getElementById('rbw-button');

    rbwButton.addEventListener('click', () => {
        toggleRainbowEffect();
    });
}

function toggleRainbowEffect() {
    let container = document.getElementById('container');
    container.removeEventListener('mouseover', handleGridHover);
    container.addEventListener('mouseover', handleRainbowHover);
    
    let cells = document.querySelectorAll('.grid-column');
    cells.forEach((cell) => {
        cell.classList.toggle('rainbow');
    });
}

function handleRainbowHover(event) {
    let cell = event.target;

    if (cell.classList.contains('grid-column') && cell.classList.contains('rainbow')) {
        cell.style.backgroundColor = randomColour();
    }
}

function randomColour() {
    return 'rgb(' + Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')';
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(16, 16);
    gridButtonPrompt();
    rainbowButton();
});