const crypto = require('crypto');
const makeSecureRandom = (size) => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            if (err) return reject(err);
            resolve({
                length: buffer.length,
                random: buffer.toString('hex')
            })
        })
    })
}

module.exports = makeSecureRandom;