// Search functionality
document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const roomCards = document.querySelectorAll('.room-card');

    // Remove any existing highlights
    roomCards.forEach(card => card.classList.remove('highlight'));

    // Highlight matching rooms
    let matchFound = false;
    roomCards.forEach(card => {
        const items = card.getAttribute('data-items').toLowerCase(); // Get items in lowercase
        if (items.includes(searchInput)) {
            card.classList.add('highlight');
            matchFound = true;
        }
    });

    if (!matchFound) {
        alert('Item not found in any room!');
    }
});

// Add item to the selected room
document.getElementById('add-item-button').addEventListener('click', function () {
    const itemInput = document.getElementById('item-input');
    const roomSelect = document.getElementById('room-select');

    const itemName = itemInput.value.trim().toLowerCase(); // Make item input case-insensitive
    const selectedRoom = roomSelect.value;

    if (!itemName) {
        alert('Please enter an item name.');
        return;
    }

    // Find the corresponding room card based on the selected room
    const roomCard = document.querySelector(`.room-card[data-items]`);
    if (!roomCard) {
        alert('Room not found!');
        return;
    }

    // Get the current items in the room
    let currentItems = roomCard.getAttribute('data-items').toLowerCase(); // Make current items case-insensitive

    // Add the new item to the list (avoid duplication)
    currentItems = currentItems ? `${currentItems}, ${itemName}` : itemName;
    roomCard.setAttribute('data-items', currentItems);  // Update the room's items

    // Update the displayed items (in the DOM)
    const roomItemsElement = roomCard.querySelector('.room-items');
    if (roomItemsElement) {
        roomItemsElement.textContent = `Items: ${currentItems}`;
    }

    // Clear the input field
    itemInput.value = '';
    alert(`${itemName} added to ${selectedRoom}!`);
});
