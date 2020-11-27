// Show the table with the robot

export function draw(state) {
  // Set the CSS variables for the number of rows and columns
  document.documentElement.style.setProperty("--colNum", state.xMax + 1);
  document.documentElement.style.setProperty("--rowNum", state.yMax + 1);

  // Add table cells
  let cellHtml = "<div class='ToyRobot-tableCell'></div>";
  let tableElement = document.querySelector(".ToyRobot-table");
  let totalCells = (state.xMax + 1) * (state.yMax + 1);
  tableElement.innerHTML = cellHtml.repeat(totalCells);
}
