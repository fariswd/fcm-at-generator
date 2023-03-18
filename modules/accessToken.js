const { google } = require("googleapis");

const MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];

function getAccessToken({ client_email, private_key }) {
  return new Promise(function (resolve, reject) {
    const jwtClient = new google.auth.JWT(
      client_email,
      null,
      private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

module.exports = {
  getAccessToken,
};
