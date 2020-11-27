// Contains the logic of the simulation

export function place(state, command) {
  let errorMessage = "Incorrect PLACE command, should be in PLACE \
X,Y,F format, where F is EAST, WEST, NORTH or SOUTH.";

  if (!command) return errorMessage;
  let args = command.split(",");

  if (args.length != 3) {
    return errorMessage;
  }

  let x = parseInt(args[0], 10);
  let y = parseInt(args[1], 10);
  let direction = args[2].trim().toLowerCase();

  if (isNaN(x) || x < 0 || x > state.xMax) {
    return `X position must be a number between 0 and ${state.xMax}`;
  }

  if (isNaN(y) || y < 0 || y > state.yMax) {
    return `Y position must be a number between 0 and ${state.yMax}`;
  }

  if (!["north", 'south', 'east', 'west'].includes(direction)) {
    return `Incorrect direction '${direction}', must be EAST, WEST, \
NORTH or SOUTH`;
  }

  state.x = x;
  state.y = y;
  state.direction = direction;

  return null;
}

export function move(state) {
  if (state.x === null) {
    return "Can't move because robot has not been placed yet";
  }

  var stateCopy = Object.assign({}, state);

  switch(state.direction) {
    case 'north':
      stateCopy.y += 1;
      break;

    case 'south':
      stateCopy.y -= 1;
      break;

    case 'east':
      stateCopy.x += 1;
      break;

    case 'west':
      stateCopy.x -= 1;
      break;
  }

  if (stateCopy.x < 0 || stateCopy.y < 0 ||
      stateCopy.x > state.xMax || stateCopy.y > state.yMax) {
    return "Reached the edge, can't move further";
  }

  Object.assign(state, stateCopy);

  return null;
}

export function left(state) {
  if (!state.direction) {
    return "Can't turn because robot has not been placed yet";
  }

  switch(state.direction) {
    case 'north':
      state.direction = 'west';
      break;

    case 'south':
      state.direction = 'east';
      break;

    case 'east':
      state.direction = 'north';
      break;

    case 'west':
      state.direction = 'south';
      break;
  }

  return null;
}

export function right(state) {
  if (!state.direction) {
    return "Can't turn because robot has not been placed yet";
  }

  switch(state.direction) {
    case 'north':
      state.direction = 'east';
      break;

    case 'south':
      state.direction = 'west';
      break;

    case 'east':
      state.direction = 'south';
      break;

    case 'west':
      state.direction = 'north';
      break;
  }

  return null;
}

export function report(state) {
  if (state.x === null || state.y === null || !state.direction) {
    return "Robot has not been placed yet";
  }

  return `${state.x},${state.y},${state.direction.toUpperCase()}`;
}

export function processCommand(state, command) {
  let splittedCommand = command.trim().split(/ (.+)/);
  let commandName = splittedCommand[0].toLowerCase();

  switch(commandName) {
    case 'place':
      return place(state, splittedCommand[1]);

    case 'move':
      return move(state);

    case 'left':
      return left(state);
    case 'right':
      return right(state);

    case 'report':
      return report(state);

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
  output = output.filter(x => x); // Remove empty output
  return output;
}
