// Contains the logic of the simulation

export function processCommand(state, command) {
  return `processCommand ${command}`;
}

export function processInput(state, input) {
  // Extract individual lines from the multi-line text
  const commands = input.split(/\r?\n/);
  var output = commands.map(command => processCommand(state, command));
  return output;
}
