const fs = require('fs');
const es = require('event-stream');

class Converter {

  countLines() {
    fs.writeFileSync('./Data/sessionstest.json', '[');
    fs.createReadStream('./Data/sessions.csv')
    .pipe(es.split())
    .pipe(
      es.mapSync((file) => {
        const lines = file.split('\n');
        lines.forEach((element, i) => {
          const line = element.split(',');
          const object = {
            user_id: line[0],
            action: line[1],
            action_type: line[2],
            action_detail: line[3],
            device_type: line[4],
            secs_elapsed: line[5]
          };
          if (lines.length === i) {
            fs.appendFileSync('./Data/sessionstest.json', `${JSON.stringify(object)}`);  
          } else fs.appendFileSync('./Data/sessionstest.json', `${JSON.stringify(object)},`);
        });
      }).on('end', () => {
        fs.appendFile('./Data/sessionstest.json', ']');
      })
    )
    console.log('hey');
  }
}

module.exports = new Converter();