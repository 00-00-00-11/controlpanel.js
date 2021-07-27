const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Vouchers extends ClientRequest {

    /**
     * Returns all vouchers
     * @returns {object}
     */
    getVouchers() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/vouchers`,
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
     * Returns all the information about a voucher
     * @param {number} voucherid The voucher ID
     * @returns {object}
     */
    getVoucherData(voucherid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/vouchers/${voucherid}`,
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
     * Will create a voucher.
     * @param {string} memo The voucher Name
     * @param {string} code The voucher Code
     * @param {number} uses The voucher Users
     * @param {number} credits The voucher Credits
     * @param {string} expires The voucher expiration
     * @returns {object}
     */
    createVoucher(memo, code, uses, credits, expires) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: `${this.host}/api/vouchers`,
                maxRedirects: 5,
                data: {
                    memo: memo,
                    code: code,
                    uses: uses,
                    credits: credits,
                    expires_at: expires
                },
                headers: this.headers()
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }

    /**
     * Update a Voucher memo
     * @param {number} voucherid The voucher ID
     * @param {string} memo The memo of the voucher
     * @returns {object}
     */
    updateVoucherMemo(voucherid, memo) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
                maxRedirects: 5,
                data: {
                    memo: memo,
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
     * Update a Voucher code
     * @param {number} voucherid The voucher ID
     * @param {string} code The code of the voucher
     * @returns {object}
     */
    updateVoucherCode(voucherid, code) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
                maxRedirects: 5,
                data: {
                    code: code,
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
    * Update a Voucher uses
    * @param {number} voucherid The voucher ID
    * @param {number} uses The uses of the voucher
    * @returns {object}
    */
    updateVoucherUses(voucherid, uses) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
                maxRedirects: 5,
                data: {
                    uses: uses,
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
    * Update a Voucher credits
    * @param {number} voucherid The voucher ID
    * @param {number} credits The credits of the voucher
    * @returns {object}
    */
    updateVoucherCredits(voucherid, credits) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
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
    * Update a Voucher expiration date
    * @param {number} voucherid The voucher ID
    * @param {string} expires The expiration date of the voucher
    * @returns {object}
    */
    updateVoucherExpiration(voucherid, expires) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
                maxRedirects: 5,
                data: {
                    expires_at: expires
                },
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }

    /**
    * Delete a Voucher
    * @param {number} voucherid The voucher ID
    * @returns {object}
    */
    deleteVoucher(voucherid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'DELETE',
                url: `${this.host}/api/vouchers/${voucherid}`,
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

module.exports = Vouchers;