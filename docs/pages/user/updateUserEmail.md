# updateUserEmail()
Update a user email.

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'CONTROLPANEL_URL',
    apikey: 'CONTROLPANEL_APIKEY'
});

// The UserID can either be the user ID or the user Discord ID
client.updateUserEmail('userid', 'email').then(response => { 
    // response will be a JSON Array like below
    console.log(response)
}).catch((error) => {
    console.log(error);
});
```

```json
{
  "id": 1,
  "name": "admin",
  "role": "admin",
  "credits": 1000,
  "server_limit": 10,
  "pterodactyl_id": 1,
  "avatar": null,
  "email": "admin@admin.com",
  "email_verified_at": null,
  "created_at": "2021-06-06T19:34:41.000000Z",
  "updated_at": "2021-06-07T13:02:55.000000Z",
  "ip": null,
  "last_seen": null,
  "discord_verified_at": null
}
```