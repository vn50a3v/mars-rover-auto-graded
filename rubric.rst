LC101 Graded Assignment #3 Rubric (JS Curriculum)
==================================================

For this "Mars Rover" assignment, the students must accomplish the following:

#. Create, export, and import JavaScript classes.
#. Use unit testing to validate the behavior of the constructor within an
   existing class.
#. Use test driven development (TDD) to guide the creation of new classes and
   methods.

Score your students' work based on the following criteria
----------------------------------------------------------

#. **Check the code** - Follow the submitted URL to your student's project.
   Open the two files listed below and examine their work. The code should look
   similar to the examples.

   .. list-table:: Mars Command file and rover test file.
      :header-rows: 1
      :align: center

      * - ``message.js`` code
        - ``rover.spec.js`` (First Rover class test)
      * - .. sourcecode:: JavaScript

             class Message {
               constructor(name, commands) {
                  this.name = name;
                  if (!name) {
                     throw Error("Message name required.");
                  }
                  this.commands = commands;
               }

             }

             module.exports = Message;

        - .. sourcecode:: JavaScript

             it("constructor sets position and default values for mode and generatorWatts", function() {
               let rover = new Rover(100);
               assert.strictEqual(rover.position, 100);
               assert.strictEqual(rover.mode, 'NORMAL');
               assert.strictEqual(rover.generatorWatts, 110);
             });

#. **Verify 13 passed tests** - Run the code as-is to verify that all of the
   tests pass. If the student completed the bonus mission, there will be 14
   tests. The output will look something like:

   .. sourcecode:: bash

      ...........
      13 specs, 0 failures

#. **Add one more test** - Paste the following test into the ``rover.spec.js``
   file (right after the last student test). Run the program again. If the new
   test passes, then the student's classes and methods operate as expected.

   .. sourcecode:: js

      it("responds to TA message & commands", function() {
         let rover = new Rover(100);
         let commands = [
            new Command('MOVE', 4321),
            new Command('STATUS_CHECK'),
            new Command('MODE_CHANGE', 'LOW_POWER'),
            new Command('MOVE', 3579),
            new Command('STATUS_CHECK')
         ];
         let message = new Message('TA power', commands);
         let response = rover.receiveMessage(message);
         assert.strictEqual(response.message,'TA power');
         assert.strictEqual(response.results[0].completed, true);
         assert.strictEqual(response.results[1].roverStatus.position, 4321);
         assert.strictEqual(response.results[2].completed, true);
         assert.strictEqual(response.results[3].completed, false);
         assert.strictEqual(response.results[4].roverStatus.position, 4321);
         assert.strictEqual(response.results[4].roverStatus.mode, 'LOW_POWER');
         assert.strictEqual(response.results[4].roverStatus.generatorWatts, 110);
      });

Feedback and Grades
--------------------

If a student's work passes the code check, the 13 required tests, and the
pasted-in test, assign them a score of 1/1 in Canvas.

As with the previous graded assignments, we encourage you to provide feedback
about your students' code style. Many new coders find unit testing to be a very
abstract concept, so any tips you can provide will be extremely helpful.

If a student's work fails one or more of the tests, *provide them with detailed
feedback* about which parts need to be improved. Be on the lookout for
hard-coded attempts to pass the required tests.
