# deleteServer()
Deletes a server.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.deleteServer('ServerID').then(response => { 
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
  "updated_at": "2021-06-07T13:41:06.000000Z"
}
```