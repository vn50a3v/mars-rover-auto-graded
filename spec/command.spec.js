const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type requireddd.'
      }
    );
  });

  it("constructor sets command type", function() {
    let command = new Command('STATUS_CHECK');
    assert.strictEqual(command.commandType, 'STATUS_CHECK');
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('MOVE', 20);
    assert.strictEqual(command.value, 20);
  });

});