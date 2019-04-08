const fs = require('fs');

class Normalizer {

  normalizeAge() {
    const users = JSON.parse(fs.readFileSync('./Data/users.json', 'utf8'));
    users.forEach(element => {
      let age = parseInt(element.age);
      age = ((age - 0) / (100 - 0));
      element.age = age;
    });
    fs.writeFileSync('./Data/usersv2.json', JSON.stringify(users));

    const test_user = JSON.parse(fs.readFileSync('./Data/test_users.json', 'utf8'));
    test_user.forEach(element => {
      let age = parseInt(element.age);
      age = ((age - 0) / (100 - 0));
      element.age = age;
    });
    fs.writeFileSync('./Data/test_usersv2.json', JSON.stringify(test_user));
  }

  normalizeSignupFlow() {
    const users = JSON.parse(fs.readFileSync('./Data/usersv2.json', 'utf8'));
    users.forEach(element => {
      let signupFlow = parseInt(element.signup_flow);
      signupFlow = ((signupFlow - 0) / (25 - 0));
      element.signup_flow = signupFlow;
    });
    fs.writeFileSync('./Data/usersv2.json', JSON.stringify(users));

    const test_user = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    test_user.forEach(element => {
      let signupFlow = parseInt(element.signup_flow);
      signupFlow = ((signupFlow - 0) / (25 - 0));
      element.signup_flow = signupFlow;
    });
    fs.writeFileSync('./Data/test_usersv2.json', JSON.stringify(test_user));
  }


}

module.exports = new Normalizer();