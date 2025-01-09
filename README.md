# Electronic Travel Authorisation
Electronic Travel Authorisation (ETA) Application built using HOF (Home Office Forms) framework.

## Getting Started

### Prerequisities

- [Node.js](https://nodejs.org/en/) - Tested against LTS
- NPM (installed with Node.js) - Works with versions 2 and 3
- [Redis server](http://redis.io/download) running on the default port

### Env

- NOTIFY_KEY=<ETA Gov notify team api key>
- NOTIFY_TEMPLATE=<Gov notify email template>
- CASEWORKER_EMAIL=<caseworker test email address>

### Up & Running

```bash
$ cd eta
$ yarn install
$ yarn run start:dev
```
Then visit: [http://localhost:8080/](http://localhost:8080/)

