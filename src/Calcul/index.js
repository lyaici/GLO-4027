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
        if(element.gender === inner_el.gender) res += 2;
        res += (Math.abs(element.age - inner_el.age))*2;
        res += Math.abs(element.signup_flow - inner_el.signup_flow);
        if(element.signup_method === inner_el.signup_method) res += 1;
        if(element.language === inner_el.language) res += 2;
        if(element.affiliate_channel === inner_el.affiliate_channel) res += 1;
        if(element.affiliate_provider === inner_el.affiliate_provider) res += 1;
        if(element.first_affiliate_tracked === inner_el.first_affiliate_tracked) res += 1;
        if(element.signup_app === inner_el.signup_app) res += 1;
        if(element.first_device_type === inner_el.first_device_type) res += 1;
        if(element.first_browser === inner_el.first_browser) res += 1;
        res = res / 14;
        if(res > 0.9 && res > maxSimil) {
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

  proportion() {
    const resultat = JSON.parse(fs.readFileSync('./Data/resultatvf.json', 'utf8'));
    let us = 0;
    let fr = 0;
    let other = 0;
    let ndf = 0;
    let ca = 0;
    let gb = 0;
    let es = 0;
    let it = 0;
    let pt = 0;
    let nl = 0;
    let de = 0;
    let au = 0;
    resultat.forEach(element => {
      switch (element.destination) {
        case 'US' :
          us += 1;
          break;
        case 'CA' :
          ca += 1;
          break;
        case 'FR' :
          fr += 1;
          break;
        case 'GB' :
          gb += 1;
          break;
        case 'NDF' :
          ndf += 1;
          break;
        case 'ES' :
          es += 1;
          break;
        case 'IT' :
          it += 1;
          break;
        case 'PT' :
          pt += 1;
          break;
        case 'NL' :
          nl += 1;
          break;
        case 'DE' :
          de += 1;
          break;
        case 'AU' :
          au += 1;
          break;
        case 'other' :
          other += 1;
          break;
      }
    })
    console.log(`us : ${(us/resultat.length)*100}%`);
    console.log(`fr : ${(fr/resultat.length)*100}%`);
    console.log(`ca : ${(ca/resultat.length)*100}%`);
    console.log(`other : ${(other/resultat.length)*100}%`);
    console.log(`ndf : ${(ndf/resultat.length)*100}%`);
    console.log(`au : ${(au/resultat.length)*100}%`);
    console.log(`de : ${(de/resultat.length)*100}%`);
    console.log(`nl : ${(nl/resultat.length)*100}%`);
    console.log(`pt : ${(pt/resultat.length)*100}%`);
    console.log(`it : ${(it/resultat.length)*100}%`);
    console.log(`es : ${(es/resultat.length)*100}%`);
    console.log(`gb : ${(gb/resultat.length)*100}%`);
  }

}

module.exports = new Calcul();