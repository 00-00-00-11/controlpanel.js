class ClientRequest {
    constructor(config) {
        this.host = this.resolveURL(config.host)
        this.apikey = config.apikey
    }

    headers() {
        return {
            'Authorization': 'Bearer ' + this.apikey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    HttpError(error) {
        let err = {};

        switch (error.response.status) {
            case 400:
                err.message = 'bad request';
                err.code = 400;
                break;
            case 401:
                err.message = 'unauthorized';
                err.code = '401';
                break;
            case 404:
                err.message = 'requested resource does not exist';
                err.code = 404;
                break;
            case 422:
                err.message = 'validation error';
                err.code = 422;
                break;
            case 429:
                err.message = 'too many requests';
                err.code = 429;
                break;
            case 500:
                err.message = 'internal error'
                err.code = 500;
                break;
            default:
                err.message = 'unknown error';
                err.code = error.response.status;
        }

        return err;
    }

    resolveURL(url) {
        if (url.endsWith('/')) {
            url = url.slice(0, -1);
        }
        return url;
    }
}

module.exports = ClientRequest;