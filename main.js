document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.food-inventory__form');
    const itemList = document.querySelector('.itemTable tbody');

    // Function to add a new row to the table
    function addRow(itemName, imageFile, itemPrice, brandName, UPCInput, SKUInput, department, stockCount, stockOnFloorInput, stockInBackRoomInput, orderInput, orderPlacedInput, inTransitInput) {
        const newRow = itemList.insertRow();
        newRow.addEventListener('click', editRow);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);
        const cell10 = newRow.insertCell(9);
        const cell11 = newRow.insertCell(10);
        const cell12 = newRow.insertCell(11);
        const cell13 = newRow.insertCell(12);
        const cell14 = newRow.insertCell(13);

        cell1.textContent = itemName;
        cell3.textContent = itemPrice;
        cell4.textContent = brandName;
        cell5.textContent = UPCInput;
        cell6.textContent = SKUInput;
        cell7.textContent = department;
        cell8.textContent = stockCount;
        cell9.textContent = stockOnFloorInput;
        cell10.textContent = stockInBackRoomInput;
        cell11.textContent = orderInput;
        cell12.textContent = orderPlacedInput;
        cell13.textContent = inTransitInput;

        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageFile);
        image.width = 100;
        image.height = 100;
        cell2.appendChild(image);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            itemList.deleteRow(newRow.rowIndex - 1);
        });
        cell14.appendChild(deleteButton);
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value;
        const imageFile = document.getElementById('imageUpload').files[0];
        const itemPrice = document.getElementById('itemPrice').value;
        const brandName = document.getElementById('brandName').value;
        const UPCInput = document.getElementById('UPCInput').value;
        const SKUInput = document.getElementById('SKUInput').value;
        const department = document.getElementById('department').value;
        const stockCount = document.getElementById('stockCount').value;
        const stockOnFloorInput = document.getElementById('stockOnFloorInput').value;
        const stockInBackRoomInput = document.getElementById('stockInBackRoomInput').value;
        const orderInput = document.getElementById('orderInput').value;
        const orderPlacedInput = document.getElementById('orderPlacedInput').value;
        const inTransitInput = document.getElementById('inTransitInput').value;


        addRow(itemName, imageFile, itemPrice, brandName, UPCInput, SKUInput, department, stockCount, stockOnFloorInput, stockInBackRoomInput, orderInput, orderPlacedInput, inTransitInput);

        form.reset();
    });

    // Function to edit the contents of a row
    function editRow(event) {
        const cell = event.target;
        const cellIndex = cell.cellIndex;
        const allowedIndices = [7, 8, 9, 10]; // Indices of cells that can be edited

        if (!allowedIndices.includes(cellIndex)) {
            return;
        }

        const currentValue = cell.textContent;
        cell.setAttribute('contentEditable', true);
        cell.focus();

        cell.addEventListener('blur', function() {
            const newValue = cell.textContent;
            cell.setAttribute('contentEditable', false);

            if (newValue !== currentValue) {
                cell.textContent = newValue;
            }
        });
    }
});

