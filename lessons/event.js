const Emitter = require('events');


const emitter = new Emitter()

emitter.on( 'message', (data, seconf, tring) => {
    console.log('gaugzavne mesage' + data)
    console.log('meore argumenti' + seconf)
})


const MESSAGE = process.env.message || '' ;

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 2123)
} else {
    emitter.emit('message', 'chven ar miutiteT message')
}