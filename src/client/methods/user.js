const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Users extends ClientRequest {

    getUsers() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/users`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    getUserDetails(userid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    updateUserDetails(userid, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    name: params.name,
                    email: params.email,
                    credits: params.credits,
                    server_limit: params.server_limit,
                    role: params.role
                },
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    deleteUser(userid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'DELETE',
                url: `${this.host}/api/users/${userid}`,
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

module.exports = Users;