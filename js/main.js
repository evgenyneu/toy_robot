// The entry point of the program that runs the simulation.

import * as ui from './ui.js';
import * as robot from './robot.js';

function processInput(input) {
  let output = robot.processInput(input);
  ui.appendToLog(output);
}

/**
 * The entry function of the simulation. Initialises the simulation and
 * then runs it.
 */
function main() {
  ui.init(processInput);
}

window.onload = () => main();
