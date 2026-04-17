const crypto = require('crypto');

// Emo Key ഉണ്ടാക്കാനുള്ള ഫംഗ്ഷൻ
function createEmoKey() {
    const key = 'emo_' + crypto.randomBytes(16).toString('hex');
    console.log("Your New API Key: ", key);
}

createEmoKey();
