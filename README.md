![myalgo-logo](./media/my-algo.png)
# CloudFlare MyAlgo Button App

Let your visitors summon their MyAlgo Wallet directly from your website!


This is the simplest way of integrating MyAlgo wallet to your website! This APP will create a button and a subdomain CNAME record, based on your declared subdomain name parameter value during installation, on your site's DNS, by the name of YOUR-SUB-DOMAIN.YOUR-DOMAIN-NAME (e.g. myalgo.yourdomain.com). This way the myalgo subdomain of your website will be always pointing to MyAlgo wallet access URL while there is a customizable button on your site to call it.

This is a simple first step contribution to make the initial integration step toward integration of Algorand and Cloudflare platforms & services.
No data is taken from users by this App and all it does is openning MyAlgo wallet access url in a new tab. Apps with deep integration to MyAlgo wallet using myalgo-connect as well as app with direct Algorand API access are on their way out to CloudFlare platform.

I (emg110@gmail.com) developed this App as a starting ground to get familiar with the process of Cloudflare App registration via a simpler scenario to move further with more complicated App scenarios ahead. 

I am not the author , owner or even affiliated to RandLab's MyAlgo. I just love it and want to extend the availablity. All images, banners and logos used in this App and it's GitHub repository belong to Randlabs MyAlgo wallet service.

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

 <a href="https://www.cloudflare.com/apps/developer/docs/install-json">Installer options</a> for CloudFlare MyAlgo Button App and configuration parameters, go here.

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


## Author's message

Author wishes to give thanks and salute both `Algorand` & `CloudFlare` platforms and services, also all amzing opensource libraries used to write & build this code.

As an Algorand ambassidor author intends to contribute more complex and handy tools to strenthen the integration between these two amazing services, started by this tiny , simple and humble one button App!



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




