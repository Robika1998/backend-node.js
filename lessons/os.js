const os = require('os');
const cluster = require('cluster');

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)

if(cluster) {}

const cpus = os.cpus()

for (let i = 0; i < cpus.length - 2; i++) {
    const CPUcore = cpus[i]
    console.log('gaushvi kide erTi node.js procesi')
}

console.log(process.pid)