const path = require('path'); 
const mymodule = require('./mymodule'); 
const dir = process.argv[2]; 
const filterExtension = process.argv[3];

const callback = (err, list) => {
    if (err) { return callback(err) };
    list.forEach( (file) => {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);
