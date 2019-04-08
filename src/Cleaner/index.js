const fs = require('fs');

class Cleaner {

  cleanTestUser() {
    const test_user = JSON.parse(fs.readFileSync('./Data/test_users.json', 'utf8'));
    test_user.forEach(element => {
      if (parseInt(element.age) === '' || parseInt(element.age) > 100) element.age = 0;
      if (element.gender === '-unknown-') element.gender = undefined;
      delete element.date_first_booking;
      delete element.date_account_created;
      delete element.timestamp_first_active;
    });
    fs.writeFileSync('./Data/test_users.json', JSON.stringify(test_user));
  }

  cleanUser() {
    const test_user = JSON.parse(fs.readFileSync('./Data/users.json', 'utf8'));
    test_user.forEach(element => {
      if (parseInt(element.age) === '' || parseInt(element.age) > 100) element.age = 0;
      if (element.gender === '-unknown-') element.gender = undefined;
      delete element.date_first_booking;
      delete element.date_account_created;
      delete element.timestamp_first_active;
    });
    fs.writeFileSync('./Data/users.json', JSON.stringify(test_user));
  }

}

module.exports = new Cleaner();