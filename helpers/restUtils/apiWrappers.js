var restAPI = require("./restHelpers.js");
var request = require("request");
var jar = request.jar();


function requestPromise(data) {
    return new Promise((resolve, reject) => {
        request(data, function (error, response, body) {
            if (error) reject(error);

            resolve({
                response,
                body
            });
        });
    });
}

/**
 * 
 * 
 var login = {
  method: 'POST',
  url: 'https://qa-admin.nativo.com/login',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: { email: 'mishtest@nativo.com', password: 'Nativo123$' },
  jar: 'JAR'
};
 */
async function login(user, password, url) {
    // const loginData = {
    //     ...restAPI.login,
    //     form: {
    //         ...restAPI.form,
    //         email: user,
    //         password: password
    //     },
    //     url: url
    // };

    const loginData2 = { ...restAPI.login };
    url ? loginData2.url = url : null;
    user ? loginData2.form.email = user : null;
    password ? loginData2.form.password = password : null;

    return await requestPromise(loginData2);
}

module.exports = {
    login
}
