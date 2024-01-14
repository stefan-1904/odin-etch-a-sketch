function createGrid(rows, cols) {
    const container = document.getElementById('container');

    for (let r = 0; r < rows; r++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-column');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

createGrid(16, 16);

function gridHover() {
    const container = document.getElementById('container');

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-column')) {
            event.target.style.backgroundColor = 'black';
        }
    });
}

gridHover();

function removeGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
}

function gridButtonPrompt() {
    const gridBtn = document.querySelector('#size-btn');
    gridBtn.addEventListener('click', () => {
        let userInput = prompt('Enter new grid size from 1-64:');
        userInput = parseInt(userInput);
        if (isNaN(userInput) || userInput < 1 || userInput > 64) {
            alert('Invalid. Choose a number between 1-64');
        } else {
            removeGrid();
            createGrid(userInput, userInput);
        }
    });
}

gridButtonPrompt();
