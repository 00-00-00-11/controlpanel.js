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
                reject(error);
            });
        });
    }

    getServerData(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/servers/${serverid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
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
                reject(error);
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
                reject(error);
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
                reject(error);
            });
        });
    }
}

module.exports = Servers;