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

createGrid(16,16);

function gridHover() {
	let cells = document.querySelectorAll('.grid-column');
	cells.forEach(cell => {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'black'
		});
	});
}

gridHover()