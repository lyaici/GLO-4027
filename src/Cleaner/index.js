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

  cleanUsersv2() {
    const usersv2 = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    const newUsersv2 = usersv2.filter(element => element.country_destination !== 'NDF');
    fs.writeFileSync('./Data/usersv3.json', JSON.stringify(newUsersv2));
  }

}

module.exports = new Cleaner();