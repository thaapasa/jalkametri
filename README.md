# jAlkaMetri

jAlkaMetri is an alcometer and alcohol consumption tracking tool 
suitable for use in mobile phones and desktop browsers.

## Development

### Setup
- Checkout from git
- See that you have new npm (i.e., `sudo npm install -g npm`)
- Run `sudo npm install -g ts-node nodemon react-scripts-ts`
- Install Flyway CLI
- Run `npm install`
- Copy `flyway.conf.tmpl` to `flyway.conf`
- Create local postgresql database with name `jalkametri`, accessible for user `jalkametri` with password `password`
  - Or: edit `flyway.conf` to match your db name and credentials

### Development
- To start the server, run `npm run start-server:live`
- To start the live client, run `npm run start-client`

### Deployment
- Run `./script/deploy.sh` to auto-deploy to 
  https://jalkametri.pomeranssi.fi/

## Licenses

The software is licensed under MIT license (see `LICENSE`).

Free image assets have been taken from the internets. See file 
`material/README.md` for more information.
