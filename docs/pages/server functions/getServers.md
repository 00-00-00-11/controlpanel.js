# getServers()
Gets all servers attached to the dashboard.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.getServers().then(response => { 
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
  ],
  "first_page_url": "http://localhost:8000/api/servers?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://localhost:8000/api/servers?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "http://localhost:8000/api/servers?page=1",
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
  "path": "http://localhost:8000/api/servers",
  "per_page": 50,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```