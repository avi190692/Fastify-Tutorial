const request = require('request-promise-native');
const nconf = require('nconf');
const externalAPITimeout = nconf.get('api.externalAPITimeout');
const getRequest = ({url, options}) => {
    newFunction(url);
    return request.get(url, {...options, timeout: externalAPITimeout, json: true });
} 


module.exports.autoload = true
module.exports = {
    getRequest
}

function newFunction(url) {
    console.log(`-----***************************----${url}`);
}
