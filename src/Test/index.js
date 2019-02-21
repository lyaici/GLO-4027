const fs = require('fs');
const es = require('event-stream');

class Test {

  countLines() {
    fs.writeFileSync('./Data/sessionstest.json', '[');
    fs.createReadStream('./Data/sessions.csv')
    .pipe(es.split())
    .pipe(
      es.mapSync((file) => {
        const lines = file.split('\n');
        lines.forEach(element => {
          const line = element.split(',');
          const object = {
            user_id: line[0],
            action: line[1],
            action_type: line[2],
            action_detail: line[3],
            device_type: line[4],
            secs_elapsed: line[5]
          };
          fs.appendFileSync('./Data/sessionstest.json', `${JSON.stringify(object)},`);
        });
      })
    )
    console.log('hey');
  }
}

module.exports = new Test();