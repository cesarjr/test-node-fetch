const fetch = require('node-fetch');

class MyClass {
  static query(sessionId, query) {
    const url = 'https://api.foobar.com';

    const body = {
      sessionId,
      query
    };

    return fetch(url, {
      method: 'post',
      body: JSON.stringify(body)
    })
      .then(res => res.json());
  }
}

module.exports = MyClass;
