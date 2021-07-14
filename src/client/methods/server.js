const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Servers extends ClientRequest {

    getServers() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/servers`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    getServerDetails(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/servers/${serverid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    suspendServer(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/servers/${serverid}/suspend`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    unsuspendServer(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/servers/${serverid}/unsuspend`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    deleteServer(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'DELETE',
                url: `${this.host}/api/servers/${serverid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }
}

module.exports = Servers;