import {
  processCommand
} from './logic.js';

var expect = chai.expect;

describe('processCommand incorrect', () => {
  it('unknown', () => {
    let result = processCommand({}, 'jump');
    expect(result).to.equal("Unknown command 'jump'");
  });

  it('empty', () => {
    let result = processCommand({}, '');
    expect(result).to.equal("No command is given");
  });

  it('blank', () => {
    let result = processCommand({}, '  ');
    expect(result).to.equal("No command is given");
  });
});

describe('processCommand PLACE', () => {
  it('places', () => {
    state = {};
    let result = processCommand(state, 'place 2,3,WEST');
    expect(result).to.equal(null);
    expect(state.x).to.equal(2);
    expect(state.y).to.equal(3);
    expect(state.direction).to.equal('west');
  });
});
