// const dotenv = require("dotenv");
// dotenv.config()
//
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)


///////

// if(Math.random() > 0.5){
//     while (true) {
//
//     }
// } else {
//     console.log('exit')
//     process.exit();
// }

//////////////////////////////////


const http = require('http');

const EventEmitter = require('events');

const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();

const server = http.createServer((req, res) => {
// res.writeHead(200, { 'Content-Type': 'application/json' });
//     if(req.url === '/users') {
//         return res.end('USERS')
//     }
//     if (req.url === '/POSTS') {
//         return  res.end('POSTS')
//     }

   const emitter = emitter.emit(`[${req.url}] ${req.method}]`, req,res)

    if (!emitter) {
        res.end()
    }
    // res.end(req.url)

})


class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, handler){
        if(!this.endpoints[path]) {
            this.endpoints[path]
        }

        const endpoint = this.endpoints[path]

        if(!endpoint[method]) {
            throw new Error(`Unknown endpoint: ${method} sam adresse ukve arsebobs ${path}`);
        }

        endpoint[method] = handler;
        emitter.on(`[${path}]:[${method}]`, (req,res)=>{
            handler(req, res);
        })

    }
    get(path, handler){
        this.request('GET', path, handler);
    }
    post(path, handler){
        this.request('POST', path, handler);
    }
    put(path, handler){
        this.request('PUT', path, handler);
    }
    delete(path, handler){
        this.request('DELETE', path, handler);
    }

}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})
router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));