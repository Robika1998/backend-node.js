const os = require('os');
const cluster = require('cluster');

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)

if(cluster. isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on(`exit`, (worker) => {
        console.log(`worker ${worker.process.pid} gaitisha`);
        cluster.fork(

        )
    })
} else {
    console.log(`vorker c pid= ${process.pid} gashvebulia`)

    setInterval(() => {
        console.log(`vorker c pid= ${process.pid} mushaobs kide`)
    }, 5000)
}

// const cpus = os.cpus()
//
// for (let i = 0; i < cpus.length - 2; i++) {
//     const CPUcore = cpus[i]
//     console.log('gaushvi kide erTi node.js procesi')
// }
//
// console.log(process.pid)