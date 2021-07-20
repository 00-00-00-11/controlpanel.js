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

    resolveURL(url) {
        if (url.endsWith('/')) {
            url = url.slice(0, -1);
        }
        return url;
    }
}

module.exports = ClientRequest;