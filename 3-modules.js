
// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
// const john = 'john';
// const peter = 'peter';

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)