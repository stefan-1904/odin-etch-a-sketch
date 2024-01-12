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
	const cells = document.querySelectorAll('.grid-column');
	cells.forEach(cell => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'black';
		});
	});
}

gridHover();

function gridButtonPrompt() {
    const gridBtn = document.querySelector('#size-btn');
    gridBtn.addEventListener('click', () => {
        let userInput = prompt('Enter new grid size from 1-64:');
        userInput = parseInt(userInput);
        if (userInput < 1 || userInput > 64) {
            alert('Invalid. Choose a number between 1-64');
        } else {
            gridSize(userInput);
        }
    });
}

gridButtonPrompt();

function gridSize(userInput) {
    let gridCells = document.querySelectorAll('.grid-row', 'grid-column');
    gridCells.forEach(gridCell => gridCell.remove());
    createGrid(userInput, userInput);
	gridHover();
}