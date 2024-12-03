const fs = require('fs');
const path = require('path');

module.exports = function (dirname, ext, callback) {
    fs.readdir(dirname, function (err, list) {
        if (err) {
            return callback(err);  
        }

        const result = list.filter(file => path.extname(file) === `.${ext}`);
        callback(null, result); 
    });
};
