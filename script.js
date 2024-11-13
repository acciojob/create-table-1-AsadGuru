function insert_Row() {
  // Select the table by its ID
  const table = document.getElementById('sampleTable');

  // Create a new row
  const newRow = document.createElement('tr');
  
  // Create the first cell
  const newCell1 = document.createElement('td');
  newCell1.textContent = 'New Cell1';
  
  // Create the second cell
  const newCell2 = document.createElement('td');
  newCell2.textContent = 'New Cell2';
  
  // Append the cells to the new row
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  
  // Insert the new row at the top of the table
  table.insertBefore(newRow, table.firstChild);
}

