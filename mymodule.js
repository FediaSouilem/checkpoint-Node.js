const fs = require('fs');
const path = require('path'); 
module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (err, list) => {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    })
}