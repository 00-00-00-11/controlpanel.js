# getUsers()
Gets all users attached to the dashboard.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

client.getUsers().then(response => { 
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
      "id": 1,
      "name": "admin",
      "role": "admin",
      "credits": 250,
      "server_limit": 1,
      "pterodactyl_id": 1,
      "avatar": null,
      "email": "admin@admin.com",
      "email_verified_at": null,
      "created_at": "2021-06-06T19:34:41.000000Z",
      "updated_at": "2021-06-06T19:34:41.000000Z",
      "ip": null,
      "last_seen": null,
      "discord_verified_at": null
    }
  ],
  "first_page_url": "http://localhost:8000/api/users?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "http://localhost:8000/api/users?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "http://localhost:8000/api/users?page=1",
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
  "path": "http://localhost:8000/api/users",
  "per_page": 50,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```