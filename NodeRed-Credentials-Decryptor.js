const crypto = require('crypto');

var encryptionAlgorithm = "aes-256-ctr";

function decryptCreds(key, cipher) {
  var flows = cipher["$"];
  var initVector = Buffer.from(flows.substring(0, 32),'hex');
  flows = flows.substring(32);
  var decipher = crypto.createDecipheriv(encryptionAlgorithm, key, initVector);
  var decrypted = decipher.update(flows, 'base64', 'utf8') + decipher.final('utf8');
  return JSON.parse(decrypted);
}

var creds = require("./" + process.argv[1])
var secret = process.argv[2]

var key = crypto.createHash('sha256').update(secret).digest();

console.log(decryptCreds(key, creds))
