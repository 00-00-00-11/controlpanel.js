# updateVoucherExpiration()
Update a voucher expiration date.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.updateVoucherExpiration('VoucherID','expires').then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
{
  "id": 32,
  "code": "TESTINGCODE",
  "memo": "test",
  "credits": "250",
  "uses": "100",
  "expires_at": "2021-07-25T00:00:00.000000Z",
  "created_at": "2021-07-15T19:27:35.000000Z",
  "updated_at": "2021-07-15T19:32:59.000000Z",
  "used": 0,
  "status": "VALID"
}
```