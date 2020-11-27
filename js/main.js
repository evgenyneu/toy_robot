// The entry point of the program that runs the simulation.

import * as ui from './ui.js';
import * as logic from './logic.js';
import * as table from './table.js';


/**
 * processInput - description
 *
 * @param  {type} state description
 * @param  {type} input description
 * @return {type}       description
 */
function processInput(state, input) {
  let output = logic.processInput(state, input);
  ui.appendToLog(output);
  table.draw(state);
}

/**
 * The entry function of the simulation. Initialises the simulation and
 * then runs it.
 * @param  {rows} number Number of rows on the table grid.
 * @param  {columns} number Number of columns on the table grid.
 */
export function main(rows, columns) {
  // State object that saves position of the robot and other settings
  var state = {
    x: null, y: null, direction: null,
    xMax: columns - 1, yMax: rows - 1
  };

  ui.init(input => processInput(state, input));
  table.draw(state);
}
