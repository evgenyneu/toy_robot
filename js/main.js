// The entry point of the program that runs the simulation.

import * as ui from './ui.js';
import * as logic from './logic.js';

function processInput(state, input) {
  let output = logic.processInput(state, input);
  ui.appendToLog(output);
}

/**
 * The entry function of the simulation. Initialises the simulation and
 * then runs it.
 */
export function main() {
  var state = {x: null, y: null, direction: null, xMax: 4, yMax: 4};
  ui.init(input => processInput(state, input));
}
