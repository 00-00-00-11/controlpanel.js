# getVoucherData()
Will get all the information about a voucher.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.getVoucherData('VoucherID').then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
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
```