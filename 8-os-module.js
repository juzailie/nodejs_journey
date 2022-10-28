const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptome in secods
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    relese: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)