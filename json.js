const config = require('./config.json');
console.log(typeof config);
// console.log(config);

console.log(config.tenants[0].tts.config.voice);
