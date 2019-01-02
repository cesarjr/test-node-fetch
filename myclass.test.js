const MyClass = require('./myclass');

const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = require('node-fetch');
nodeFetch.default = fetchMock;

describe('MyClass', () => {
  describe('.query', () => {
    it('returns the response', () => {
      fetchMock.mock('*', {'result': {'fulfillment': {'speech': 'The answer'}}});

      expect.assertions(1);

      return MyClass.query('123', 'the question').then((data) => {
        expect(data.result.fulfillment.speech).toBe('The answer');
      });
    });
  });
});
