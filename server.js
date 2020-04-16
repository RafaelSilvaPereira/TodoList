const connect = require('connect');
const serveStatic = require('serve-static');
const PORT = 9777;
connect().use(serveStatic(__dirname)).listen(PORT, function () {
    console.log('server run on:');
    console.log('http://localhost:9777/');
});
