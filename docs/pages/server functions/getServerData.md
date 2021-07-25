# getServerData()
Will get all the information about a server.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.getServerData('ServerID').then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
{
  "id": "ufXmu5XKm2rhUiGILdqKu",
  "name": "Example server",
  "description": "Example Description",
  "suspended": null,
  "identifier": "48c7e0a1",
  "pterodactyl_id": 236,
  "user_id": 2,
  "product_id": "zohmY29LiKXTIj1Bycc3h",
  "created_at": "2021-06-07T13:33:17.000000Z",
  "updated_at": "2021-06-07T13:33:18.000000Z",
  "product": {
    "id": "zohmY29LiKXTIj1Bycc3h",
    "name": "Starter",
    "description": "64MB Ram, 1GB Disk, 1 Database, 140 credits p/m",
    "price": 140,
    "memory": 64,
    "cpu": 100,
    "swap": 64,
    "disk": 1000,
    "io": 500,
    "databases": 1,
    "backups": 1,
    "allocations": 0,
    "created_at": "2021-06-06T19:34:41.000000Z",
    "updated_at": "2021-06-06T19:34:41.000000Z",
    "disabled": 0
  }
}
```