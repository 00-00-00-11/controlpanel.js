# createVoucher()
Will create a voucher.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.createVoucher('memo', 'code', 'uses', 'credits', 'expires').then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
{
  "memo": "Testing Memo",
  "code": "TESTINGCODE",
  "uses": "100",
  "credits": "250",
  "expires_at": "2021-07-26T00:00:00.000000Z",
  "updated_at": "2021-07-15T19:26:08.000000Z",
  "created_at": "2021-07-15T19:26:08.000000Z",
  "id": 31,
  "used": 0,
  "status": "VALID"
}
```