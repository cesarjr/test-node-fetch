const fetch = require('node-fetch');
const MyClass = require('./myclass');

describe('MyClass', () => {
  describe('.query', () => {
    it('returns the response', () => {
      fetch.mock('*', {'result': {'fulfillment': {'speech': 'The answer'}}});

      expect.assertions(1);

      return MyClass.query('123', 'the question').then((data) => {
        expect(data.result.fulfillment.speech).toBe('The answer');
      });
    });
  });
});
