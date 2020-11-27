// Contains the logic of the simulation

export function processCommand(state, command) {
  let splittedCommand = command.split(' ');
  let commandName = splittedCommand[0].toLowerCase();

  switch(commandName) {
    case 'place':
      return `place`;

    case 'move':
      return `move`;

    case 'left':
      return `left`;
    case 'right':
      return `right`;

    case 'report':
      return `report`;

    default:
      if (!commandName) {
        return `No command is given`;
      }

      return `Unknown command '${commandName}'`;
  }
}

export function processInput(state, input) {
  // Extract individual lines from the multi-line text
  const commands = input.split(/\r?\n/);
  var output = commands.map(command => processCommand(state, command));
  return output;
}
