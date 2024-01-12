function createGrid(rows, cols) {
	const container = document.getElementById('container');
	for (let r = 0; r < rows; r++) {
		const row = document.createElement('div');
		row.classList.add('grid-row');
		for (let c = 0; c < cols; c++) {
			const cell = document.createElement('div');
			cell.classList.add('grid-column');
			row.appendChild(cell)
		}
		container.appendChild(row);
	}
}

createGrid(16, 16);

function gridHover() {
	const cells = document.querySelectorAll('.grid-column');
	cells.forEach(cell => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'black'
		});
	});
}

gridHover();

function gridButtonPrompt(userInput) {
    const gridBtn = document.querySelector('#size-btn');
    gridBtn.addEventListener('click', () => {
        userInput = prompt('Enter new grid size from 1-64:');
        console.log(userInput);
        if (userInput > 64 || userInput < 1) {
            alert('Invalid. Choose a number between 1-64')
        }
    })
}

gridButtonPrompt();