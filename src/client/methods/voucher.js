const ClientRequest = require('../../ClientRequest');
const axios = require('axios');

class Vouchers extends ClientRequest {

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
                reject(this.HttpError(error));
            });
        });
    }

    getVouchersDetails(voucherid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url: `${this.host}/api/vouchers/${voucherid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    createVoucher({ memo: memo, code: code, uses: uses, credits: credits, expires: expires}) {
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
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    updateUserDetails(voucherid, { memo: memo, code: code, uses: uses, credits: credits, expires: expires}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/vouchers/${voucherid}`,
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
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

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
                reject(this.HttpError(error));
            });
        });
    }
}

module.exports = Vouchers;