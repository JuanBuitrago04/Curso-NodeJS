const mymodule = require

const dirname = process.argv[2];
const ext = process.argv[3];

mymodule(dirname, ext, function(err, data){
    if(err) console.log(err);
    console.log(data);
})