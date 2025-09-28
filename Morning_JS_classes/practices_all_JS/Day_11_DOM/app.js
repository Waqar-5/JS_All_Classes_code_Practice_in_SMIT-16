// Wait until the DOM is fully loaded before running any JS
document.addEventListener('DOMContentLoaded', () => {

    // Define the grid size (5x5 grid)
    const gridSize = 5;

    // Initialize player's starting position at top-left corner
    let playerPos = { x: 0, y: 0 };

    // Initialize the score
    let score = 0;

    // Get the container div where the grid will be displayed
    const grid = document.getElementById('game-grid');

    // 1. Create the game grid
    const cells = []; // Array to store references to all cell divs
    for (let y = 0; y < gridSize; y++) { // Loop through rows
        for (let x = 0; x < gridSize; x++) { // Loop through columns
            const cell = document.createElement('div'); // Create a new div for each cell
            cell.classList.add('cell'); // Add 'cell' class for styling
            cell.dataset.x = x; // Store x-coordinate in a custom data attribute
            cell.dataset.y = y; // Store y-coordinate in a custom data attribute
            grid.appendChild(cell); // Append cell to the grid container in the DOM
            cells.push(cell); // Keep a reference to the cell for later use
        }
    }

    // 2. Place the player on the grid
    function drawPlayer() {
        // Remove the 'player' class from all cells
        cells.forEach(c => c.classList.remove('player'));
        // Calculate the index of the current player position
        const idx = playerPos.y * gridSize + playerPos.x;
        // Add the 'player' class to the new position
        cells[idx].classList.add('player');
    }

    drawPlayer(); // Draw player initially at starting position

    // 3. Place items on the grid
    function placeItem(x, y, name) {
        // Calculate index of the cell where the item should be placed
        const idx = y * gridSize + x;
        const cell = cells[idx]; // Get the corresponding cell
        const item = document.createElement('span'); // Create a span to represent the item
        item.classList.add('item'); // Add 'item' class for styling
        item.innerText = name[0]; // Display first letter of the item as text
        item.dataset.item = name; // Store full item name in dataset for tracking
        cell.appendChild(item); // Add the item to the cell in the DOM
    }

    // Place some items on the grid
    placeItem(2, 2, 'Gold');
    placeItem(4, 0, 'Key');

    // 4. Movement function for player
    function move(dx, dy) {
        // Calculate new position
        const newX = playerPos.x + dx;
        const newY = playerPos.y + dy;

        // Check boundaries to prevent moving out of grid
        if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
            playerPos.x = newX; // Update player's x-coordinate
            playerPos.y = newY; // Update player's y-coordinate
            drawPlayer(); // Redraw player at new position
            checkItem(); // Check if player landed on an item
        }
    }

    // Add event listeners to movement buttons
    document.getElementById('up').addEventListener('click', () => move(0, -1)); // Move up
    document.getElementById('down').addEventListener('click', () => move(0, 1)); // Move down
    document.getElementById('left').addEventListener('click', () => move(-1, 0)); // Move left
    document.getElementById('right').addEventListener('click', () => move(1, 0)); // Move right

    // 5. Check & collect items
    function checkItem() {
        const idx = playerPos.y * gridSize + playerPos.x; // Find current cell
        const cell = cells[idx]; // Get the cell element
        const item = cell.querySelector('.item'); // Check if an item exists in the cell
        if(item) { // If an item is present
            score += 10; // Increase score
            document.getElementById('score').innerText = score; // Update score in DOM

            // Add the collected item to inventory panel
            const li = document.createElement('li'); 
            li.innerText = item.dataset.item;
            document.getElementById('items').appendChild(li);

            // Remove the item from the grid
            cell.removeChild(item);

            // Show alert to player
            alert(`You collected ${item.dataset.item}!`);
        }
    }

});
