//figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
//return prod keys
module.exports = require('./prod');

} else {
    //returnd dev keys
    module.exports = require('./dev');
}

