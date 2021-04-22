import logo from '../media/MyAlgoFullWhite.svg'

(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    element = INSTALL.createElement(options.location, element)
    element.setAttribute('app', 'cloudflare-myalgo-btn-app')
    element.setAttribute('data-theme', options.theme)

    const logoContainer = document.createElement('a')
    logoContainer.className = 'logo-container'
    logoContainer.href = 'https://wallet.myalgo.com/'
    logoContainer.target = '_blank'
    logoContainer.innerHTML = logo

    element.appendChild(logoContainer)
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
