var crypto = require('crypto');

var info = '';
var key = '6c696e656b6f6e675f79696e67706569';

function cipher(algorithm, key, buff, next) {
    var encrypted = '';
    var cip = crypto.createCipher(algorithm, key);
    encrypted += cip.update(buff, 'binary', 'hex');
    encrypted += cip.final('hex');
    info = encrypted;
    next(encrypted);
}

function log(buff) {
    console.log(buff);
}

cipher('aes-256-ecb', key, 'ApplePurple', log);

function decipher(algorithm, key, encrypted, next) {
    var decrypted = '';
    var decipher = crypto.createDecipher(algorithm, key);
    decrypted += decipher.update(encrypted, 'hex', 'binary');
    decrypted += decipher.final('binary');
    next(decrypted);
}

decipher('aes-256-ecb', key, info, log);
