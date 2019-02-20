const fs = require('fs');
const es = require('event-stream');

let lines= [];

class Test {

  countLines() {
    fs.writeFileSync('./Data/sessionstest.txt', 'hey');
    fs.createReadStream('./Data/sessions.csv')
    .pipe(es.split())
    .pipe(
      es.mapSync((line) => {
        const string = `${line.split('\n')}\n`;
        fs.appendFileSync('./Data/sessionstest.txt', string);
      })
    )
    console.log('hey');
  }
}

module.exports = new Test();