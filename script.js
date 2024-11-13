function insert_Row() {
  const table = document.getElementById('sampleTable');
  
  // Clear the table (remove all rows except for the header)
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Create a new row
  const newRow = document.createElement('tr');
  
  // Create the first cell
  const newCell1 = document.createElement('td');
  newCell1.textContent = 'New Cell1';  // Add text content for the first cell
  
  // Create the second cell
  const newCell2 = document.createElement('td');
  newCell2.textContent = 'New Cell2';  // Add text content for the second cell
  
  // Append the cells to the new row
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  
  // Insert the new row at the top of the table
  table.insertBefore(newRow, table.firstChild);
}
