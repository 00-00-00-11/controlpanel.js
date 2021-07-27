const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Servers extends ClientRequest {

    /**
     * Returns all servers attached to the dashboard
     * @returns {object}
     */
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

    /**
     * Returns all the information about a server
     * @param {string} serverid The server ID
     * @returns {object}
     */
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

    /**
     * Suspend a server
     * @param {string} serverid The server ID
     * @returns {object}
     */
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

    /**
     * Unsuspend a server
     * @param {string} serverid The server ID
     * @returns {object}
     */
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

    /**
     * Delete a server
     * @param {string} serverid The user ID
     * @returns {object}
     */
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