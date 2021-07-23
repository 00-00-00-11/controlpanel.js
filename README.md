# ControlPanel.js

![Stars](https://img.shields.io/github/stars/hiekki4/controlpanel.js?style=for-the-badge) ![Issues](https://img.shields.io/github/issues/hiekki4/controlpanel.js?style=for-the-badge) ![Downloads](https://img.shields.io/npm/dy/controlpanel.js?style=for-the-badge) ![Version](https://img.shields.io/github/package-json/v/hiekki4/controlpanel.js?style=for-the-badge)

### About

ControlPanel.js is an easy to use API wrapper for [ControlPanel](https://controlpanel.gg), written in NodeJS.

### Installation

```bash
npm i controlpanel.js
```

### Example

```js
const { Client } = require('controlpanel.js')

const client = new Client({
    host: 'https://dash.evecloud.xyz',
    apikey: 'brruirbjh9thj9enb9tnbenrrg9trgjuod'
});


client.getUsers().then(response => { 
    console.log(response)
})

```

### Report Bugs

To report bugs and issues please use the GitHub issue reporting tool: https://github.com/Hiekki4/ControlPanel.js/issues. Any bugs and issues reports are very much appreciated since it helps us to improve ControlPanel.js. Thank you.

### License

```
Copyright (c) 2021 Hiekki4 (hiekki@evecloud.xyz)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
