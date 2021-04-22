![myalgo-logo](./media/my-algo.png)
# CloudFlare MyAlgo Button App

Let your visitors call or refer to their MyAlgo Wallet directly from your website.
This is the simplest way of integrating MyAlgo wallet to your website!
This APP will create a button and a subdomain CNAME record, based on your declared subdomain name parameter value during installation, on your site's DNS, by the name of YOUR-SUB-DOMAIN.YOUR-DOMAIN-NAME.
This way the myalgo subdomain of your website will be always redirecting to wallet.myalgo.com and there is a customizable button on your landing page to call it.

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

All media asset files are located here. CloudFlare media templates and sketches can be a very profound start for any CloudFlare APP:

[Download <code class="inline">media-templates.sketch</code>](https://github.com/CloudflareApps/MediaTemplates/raw/master/media-templates.sketch)

### Troubleshooting

- <a href="https://www.cloudflare.com/apps/developer/docs/getting-started">The Cloudflare developer documentation</a> for examples and API usage.
- <a href="https://www.cloudflare.com/apps/cloudflare-myalgo-btn-app/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install MyAlgo Button App"
    border="0"
    width="150">
</a>Install MyAlgo Button App

- <a href="https://wallet.myalgo.com/home">
  <img
    src="./media/MyAlgoFullBlue.svg"
    alt="MyAlgo Wallet Home"
    border="0"
    width="150" >
</a>MyAlgo Wallet Powered by  © Rand Labs






