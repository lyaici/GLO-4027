const fs = require('fs');

class Test {

  getMaxAge() {
    const test_user = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    let maxAge = 0;
    test_user.forEach(element => {
      if (parseInt(element.age) > maxAge ) maxAge = element.age;
    });
    console.log(`Age max test_usersv2 : ${maxAge}`);

    const users = JSON.parse(fs.readFileSync('./Data/usersv2.json', 'utf8'));
    let maxAgeUsers = 0;
    users.forEach(element => {
      if (parseInt(element.age) > maxAgeUsers ) maxAgeUsers = element.age;
    });
    console.log(`Age max usersv2 : ${maxAgeUsers}`);
  }

  getMaxSignupFlow() {
    const test_user = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    let maxSignupFlow = 0;
    test_user.forEach(element => {
      if (parseInt(element.signup_flow) > maxSignupFlow ) maxSignupFlow = element.signup_flow;
    });
    console.log(`SignupFlow max test_usersv2 : ${maxSignupFlow}`);

    const users = JSON.parse(fs.readFileSync('./Data/usersv2.json', 'utf8'));
    let maxSignupFlowUsers = 0;
    users.forEach(element => {
      if (parseInt(element.signup_flow) > maxSignupFlowUsers ) maxSignupFlowUsers = element.signup_flow;
    });
    console.log(`SignupFlow max usersv2 : ${maxSignupFlowUsers}`);
  }

}

module.exports = new Test();