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
                reject(error);
            });
        });
    }

    getUserData(userid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }

    updateUserData(userid, name, email, credits, server_limit, role) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    name: name,
                    email: email,
                    credits: credits,
                    server_limit: server_limit,
                    role: role
                },
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
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
                reject(error);
            });
        });
    }
}

module.exports = Users;