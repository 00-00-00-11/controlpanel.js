const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Users extends ClientRequest {

    /**
     * Returns all users attached to the dashboard
     * @returns {object}
     */
    getUsers() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/users`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * Returns all the information about a user
     * @param {number} userid The user ID
     * @returns {object}
     */
    getUserData(userid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * Update a user name
     * @param {number} userid The user ID
     * @param {string} name The name of the user
     * @returns {object}
     */
    updateUserName(userid, name) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    name: name,
                },
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * Update a user email
     * @param {number} userid The user ID
     * @param {string} email The email of the user
     * @returns {object}
     */
    updateUserEmail(userid, email) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    email: email,
                },
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
    * Update a user credits
    * @param {number} userid The user ID
    * @param {number} credits The credits of the user
    * @returns {object}
    */
    updateUserCredits(userid, credits) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    credits: credits,
                },
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
    * Update a user server limit
    * @param {number} userid The user ID
    * @param {number} server_limit The server limit of the user
    * @returns {object}
    */
    updateUserServerLimit(userid, server_limit) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    server_limit: server_limit,
                },
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
    * Update a user role
    * @param {number} userid The user ID
    * @param {string} role The role of the user
    * @returns {object}
    */
    updateUserRole(userid, role) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                data: {
                    role: role,
                },
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * Deletes a user attached to the dashboard
     * @param {number} userid The user ID
     * @returns {object}
     */
    deleteUser(userid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'DELETE',
                url: `${this.host}/api/users/${userid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                reject(error);
            });
        });
    }
}

module.exports = Users;