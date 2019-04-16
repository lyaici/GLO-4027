const fs = require('fs');

class Calcul {

  calculateDissimilarity() {
    console.time('function');
    const test_users = JSON.parse(fs.readFileSync('./Data/test_usersv2.json', 'utf8'));
    const userv2 = JSON.parse(fs.readFileSync('./Data/usersv3.json', 'utf8'));
    const result = [];
    let i = 0;
    let res = 0;
    let maxSimil = 0;
    let destination = 'NDF';
    test_users.forEach(element => {
      maxSimil = 0;
      destination = 'NDF';
      userv2.forEach(inner_el => {
        res = 0;
        if(element.gender === inner_el.gender) res += 1;
        res += Math.abs(element.age - inner_el.age);
        res += Math.abs(element.signup_flow - inner_el.signup_flow);
        if(element.signup_method === inner_el.signup_method) res += 1;
        if(element.language === inner_el.language) res += 1;
        if(element.affiliate_channel === inner_el.affiliate_channel) res += 1;
        if(element.affiliate_provider === inner_el.affiliate_provider) res += 1;
        if(element.first_affiliate_tracked === inner_el.first_affiliate_tracked) res += 1;
        if(element.signup_app === inner_el.signup_app) res += 1;
        if(element.first_device_type === inner_el.first_device_type) res += 1;
        if(element.first_browser === inner_el.first_browser) res += 1;
        res = res / 11;
        if(res > 0.5 && res > maxSimil) {
          destination = inner_el.country_destination;
          maxSimil = res;
        }
      });
      result.push({ id : element.id, destination });
      i++;
      console.log(`${i}/${test_users.length}`);
    });
    console.timeEnd('function');
    fs.writeFileSync('./Data/resultatv2.json', JSON.stringify(result));
  }

}

module.exports = new Calcul();