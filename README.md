![myalgo-logo](./media/my-algo.png)
# CloudFlare MyAlgo Button App

Let your visitors summon their MyAlgo Wallet directly from your website.
This is the simplest way of integrating MyAlgo wallet to your website!
This APP will create a button and a subdomain CNAME record, based on your declared subdomain name parameter value during installation, on your site's DNS, by the name of YOUR-SUB-DOMAIN.YOUR-DOMAIN-NAME (e.g. myalgo.yourdomain.com).
This way the myalgo subdomain of your website will be always pointing to MyAlgo wallet access URL while there is a customizable button on your site to call it.

## Usage

Install the dependencies with `npm install`

- `npm start` Watches for file changes and compile them.
- `npm run build` Compiles your JavaScript and CSS once for release.
- `npm run lint` Checks JavaScript formatting and attempts to fix any errors.

## Details

#### `source/app.js`

Containing all source code for APP. Your app technically resides here.

#### `source/app.css`

APP styles are located here.

#### `install.json`

Installer options for <a href="https://www.cloudflare.com/apps/developer/docs/install-json">CloudFlare MyAlgo Button App</a> and complementary APP metadata, go here.

<a href="http://install.json.is/">JSON schema syntaxing is used</a>, hence the use of related editors and linting tools are recommended.

#### `media/**`

All media asset files are located here.

### Direct installation on CloudFlare App

- <a href="https://www.cloudflare.com/apps/cloudflare-myalgo-btn-app/install?source=button" target="_blank">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install MyAlgo Button App"
    border="0"
    width="150"
    >
</a>

### Links

- <a href="https://www.cloudflare.com" target="_blank">
  <img
    src="./media/cf-logo-h.svg"
    alt="CloudFlare Platform & Services"
    border="0"
    width="150"
    >
</a>
  

- <a href="https://wallet.myalgo.com/home" target="_blank">
  <img
    src="./media/MyAlgoFullBlue.svg"
    alt="MyAlgo Wallet Home"
    border="0"
    width="150"
    >
</a>

## Finale

Author wishes to give thanks and salute both `Algorand` & `CloudFlare` platforms and services, also all amzing opensource libraries used to write & build this code.

As an Algorand ambassidor author intends to contribute more complex and handy tools to strenthen the integration between these two amazing services, started by this tiny , simple and humble one button App!




