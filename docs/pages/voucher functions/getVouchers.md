# getVouchers()
Gets all vouchers.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.getVouchers().then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 27,
      "code": "y09sAT2iadoeifSxRR3g3ygnSP9MlEJ2S78p",
      "memo": "Example Voucher Memo",
      "credits": 250,
      "uses": 100,
      "expires_at": "2021-07-30T00:00:00.000000Z",
      "created_at": "2021-07-15T19:14:14.000000Z",
      "updated_at": "2021-07-15T19:14:14.000000Z",
      "used": 1,
      "status": "VALID"
    }
  ],
  "first_page_url": "http://localhost/api/vouchers?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://localhost/api/vouchers?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "http://localhost/api/vouchers?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": null,
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": null,
  "path": "http://localhost/api/vouchers",
  "per_page": 50,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```