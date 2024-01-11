function createGrid(rows, cols) {
    const container = document.getElementById('container');

    // Create rows
    for (let r = 0; r < rows; r++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        // Create cells inside each row
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-column');
            
            // Append cells to each row
            row.appendChild(cell)
        }
        // Append each row to the container
        container.appendChild(row);
    }
}

createGrid(16,16);