const ClientRequest = require('../ClientRequest');
const Servers = require('./methods/server');
const Users = require('./methods/user');

function Mixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name))
        });
    });
}

class Client extends ClientRequest { }
Mixins(Client, [Users, Servers]);

module.exports = Client;