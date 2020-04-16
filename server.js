const  connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(9777, function() {
});
