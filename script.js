function addRow() {
	var table = document.getElementById("tableBody");
	var row = table.insertRow();
	var itemCell = row.insertCell(0);
	var linkCell = row.insertCell(1);
	var priceCell = row.insertCell(2);
	var orderedCell = row.insertCell(3);
	var deleteCell = row.insertCell(4); // New cell for delete button

	itemCell.innerHTML = "<input type='text' value='New Item'>";
	linkCell.innerHTML = "<input type='text' value='New Link'>";
	priceCell.innerHTML = "<input type='number' value='0' min='0'>";
	orderedCell.innerHTML = "<input type='number' value='0' min='0'>";
	deleteCell.innerHTML = "<button onclick='deleteRow(this)'>Delete</button>"; // Add delete button
}

function deleteRow(btn) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}
