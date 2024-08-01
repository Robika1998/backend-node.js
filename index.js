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

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url === '/users') {
        return res.end('USERS')
    }
    if (req.url === '/POSTS') {
        return  res.end('POSTS')
    }

    res.end(req.url)

})


class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, handler){

    }
}


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));