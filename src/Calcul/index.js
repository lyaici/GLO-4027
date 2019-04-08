const fs = require('fs');

class Calcul {

  calculateDissimilarity() {
    const test_users = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    let res = 0;
    test_users.forEach(element => {
      test_users.forEach(inner_el => {
        res =+ (element.gender === inner_el.gender);
        res =+ Math.abs(element.age - inner_el.age);
        res =+ Math.abs(element.signup_flow - inner_el.signup_flow);
        res =+ (element.signup_method === inner_el.signup_method);
        res =+ (element.language === inner_el.language);
        res =+ (element.affiliate_channerl === inner_el.affiliate_channerl); 
      });
    });
    console.log(res);
  }

}

module.exports = new Calcul();