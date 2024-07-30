// const fs = require('fs');
// const path = require('path');
//
// // console.log('Start')
// //
// // fs.mkdir(path.join(__dirname, 'dir'), (err) =>{
// //     if (err) {
// //         console.log(err)
// //         return
// //     }
// //     console.log('faili sheiqmna')
// // });
// //
// // console.log('END')
//
//
// //---------------
//
// // fs.rmdir(path.resolve(__dirname, 'dir'));
// // if(err) {
// //     throw err;
// // }
//
// ///----------------
//
// // fs.watchFile(path.resolve(__dirname, 'test.txt'), '5 qqwerwr 32343', (err) => {
// //     if (err) {
// //         throw err
// //     }
// //     console.log('faili sheiqmna')
// // })
// //
// // fs.appendFile(path.resolve(__dirname, 'test.txt'), '5 qqwerwr 323ferfgerg43', (err) => {
// //     if (err) {
// //         throw err
// //     }
// //     console.log('faili sheiqmna')
// // })
//
//
// //----------
//
// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve,reject) => fs.writeFile(path,data),  (err) =>{
//         if (err) {
//             return reject(err.message);
//         }
//         resolve()
//     })
// }
//
// // const appendFileAsync = async (path, data) => {
// //     return new Promise((resolve,reject) => fs.appendFile(path. data , (err) =>{
// //         if (err) {
// //             return reject(err.message);
// //         }
// //         resolve()
// //     }))
// // }
//
// const readFileAsync = async (path) => {
//     return new Promise((resolve,reject) => fs.appendFile(path, {encoding: 'utf-8'}, (err) =>{
//         if (err) {
//             return reject(err.message);
//         }
//         resolve(data)
//     }))
// }
//
// const removeFileAsync = async (path) => {
//     return new Promise((resolve,reject) => fs.rm(path,  (err) =>{
//         if (err) {
//             return reject(err.message);
//         }
//         resolve()
//     }))
// }
//
// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'text.txt'), 'data'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'text.txt'), 'data'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'text.txt'), 'data'))
//     .then(()=> readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch( err => console.log('err'));
//
// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(()=> console.log('remove file'))
//





const fs = require('fs');
const path = require('path');

// Convert callbacks to Promises
const writeFileAsync = async (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                return reject(err.message);
            }
            resolve();
        });
    });
}

const appendFileAsync = async (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) {
                return reject(err.message);
            }
            resolve();
        });
    });
}

const readFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject(err.message);
            }
            resolve(data);
        });
    });
}

const removeFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.rm(filePath, (err) => {
            if (err) {
                return reject(err.message);
            }
            resolve();
        });
    });
}

// Path to the file
const filePath = path.resolve(__dirname, 'text.txt');

// Sequence of file operations
// writeFileAsync(filePath, 'data')
//     .then(() => appendFileAsync(filePath, 'data'))
//     .then(() => appendFileAsync(filePath, 'data'))
//     .then(() => appendFileAsync(filePath, 'data'))
//     .then(() => readFileAsync(filePath))
//     .then(data => console.log(data))
//     .catch(err => console.log('Error:', err))
//     .finally(() => removeFileAsync(filePath)
//         .then(() => console.log('File removed'))
//         .catch(err => console.log('Error removing file:', err))
//     );




const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
.then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
.then(data => data.split(' ').length)
.then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), ${count}))