var crypto = require('crypto');

var info = '';

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

cipher('aes-256-ecb', 'asdfjklc', 'applepurple', log);

function decipher(algorithm, key, encrypted, next) {
    var decrypted = '';
    var decipher = crypto.createDecipher(algorithm, key);
    decrypted += decipher.update(encrypted, 'hex', 'binary');
    decrypted += decipher.final('binary');
    next(decrypted);
}

decipher('aes-256-ecb', 'asdfjklc', info, log);
