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

All media asset files are located here.

### Troubleshooting

- <script data-cfbadgetype="c" data-cfbadgeskin="dkblue" type="text/javascript">
//<![CDATA[
try{window.CloudFlare||function(){var a=window.document,b=a.createElement("script"),a=a.getElementsByTagName("script")[0];window.CloudFlare=[];b.type="text/javascript";b.async=!0;b.src="//ajax.cloudflare.com/cdn-cgi/nexp/cloudflare.js";a.parentNode.insertBefore(b,a)}(),CloudFlare.push(function(a){a(["cloudflare/badge"])})}catch(e$$5){try{console.error("CloudFlare badge code could not be loaded. "+e$$5.message)}catch(e$$6){}};
//]]>
</script>
  
- <a href="https://www.cloudflare.com/apps/cloudflare-myalgo-btn-app/install?source=button" target="_blank">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install MyAlgo Button App"
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






