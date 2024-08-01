const fs = require('fs');
const path = require('path');


// fs.readFile(path.resolve(__dirname, 'text.txt'),(err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })


// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));
//
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => console.log('end'))
// stream.on('open', () => console.log('open'))
// stream.on('error', (e) => console.log(e))



// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'));
// for (let i = 0; i <= 20; i++) {
//     writableStream.write(i + '/n')
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()



const http = require('http');

http.createServer((req, res) => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));
    // stream.on('data', (chunk) => res.write(chunk));
    // stream.on('end', (chunk) => res.end());

    stream.pipe(res);
})
