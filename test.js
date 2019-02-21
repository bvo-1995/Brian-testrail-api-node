var Testrail = require('testrail-api')

var testrail = new Testrail({
    host: 'https://nativo.testrail.net',
    user: 'bvo@nativo.com',
    password: 'hkeMsE0XS7xkEZX7qhup-QP2nLBVrY9FdbhczPFQP'
});

testrail.getCase(/*CASE_ID=*/1, function (err, response, testcase) {
    console.log(testcase);
  });

  testrail.getCase(/*CASE_ID=*/82, function (err, response, body) {
    console.log(body);
  });