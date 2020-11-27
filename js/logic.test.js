import {
  processCommand,
  place
} from './logic.js';

var expect = chai.expect;

describe('processCommand incorrect', () => {
  describe('incorrect command', () => {
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

  describe('place', () => {
    it('places', () => {
      var state = {};
      let result = processCommand(state, 'place 2,3,WEST');
      expect(result).to.equal(null);
      expect(state.x).to.equal(2);
      expect(state.y).to.equal(3);
      expect(state.direction).to.equal('west');
    });
  });
});

describe('place', () => {
  describe('places', () => {
    it('places', () => {
      var state = {};
      let result = place(state, '2,3,WEST');
      expect(result).to.equal(null);
      expect(state.x).to.equal(2);
      expect(state.y).to.equal(3);
      expect(state.direction).to.equal('west');
    });

    it('with spaces', () => {
      var state = {};
      let result = place(state, '  2, 3, WEST  ');
      expect(result).to.equal(null);
      expect(state.x).to.equal(2);
      expect(state.y).to.equal(3);
      expect(state.direction).to.equal('west');
    });
  });

  describe('incorrect', () => {

    it('single word', () => {
      var state = {};
      let result = place(state, 'error');
      expect(result).to.equal("Incorrect PLACE command, should be in PLACE \
X,Y,F format, where F is EAST, WEST, NORTH or SOUTH.");

      expect(state).to.eql({});
    });

    it('undefined', () => {
      var state = {};
      let result = place(state, undefined);
      expect(result).to.equal("Incorrect PLACE command, should be in PLACE \
X,Y,F format, where F is EAST, WEST, NORTH or SOUTH.");

      expect(state).to.eql({});
    });

    it('non integer x', () => {
      var state = {xMax: 4, yMax: 6};
      let result = place(state, 'd,2,WEST');
      expect(result).to.equal("X position must be a number between 0 and 4");
      expect(state).to.eql({xMax: 4, yMax: 6});
    });

    it('non integer y', () => {
      var state = {xMax: 4, yMax: 6};
      let result = place(state, '3,a,WEST');
      expect(result).to.equal("Y position must be a number between 0 and 6");
      expect(state).to.eql({xMax: 4, yMax: 6});
    });

    it('x exceeds maximum', () => {
      var state = {xMax: 4, yMax: 6};
      let result = place(state, '6,2,WEST');
      expect(result).to.equal("X position must be a number between 0 and 4");
      expect(state).to.eql({xMax: 4, yMax: 6});
    });

    it('y exceeds maximum', () => {
      var state = {xMax: 4, yMax: 6};
      let result = place(state, '3,9,WEST');
      expect(result).to.equal("Y position must be a number between 0 and 6");
      expect(state).to.eql({xMax: 4, yMax: 6});
    });

    it('incorrect direction', () => {
      var state = {xMax: 4, yMax: 6};
      let result = place(state, '3,2,error');
      expect(result).to.equal("Incorrect direction 'error', must be EAST, WEST, \
NORTH or SOUTH");
      expect(state).to.eql({xMax: 4, yMax: 6});
    });
  });
});
