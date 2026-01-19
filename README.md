# Archive.is Redirect Chrome Extension

A simple Chrome extension that automatically redirects specific websites to their archive.is version.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" 
4. Select the `archive-redirect-extension` folder

## Usage

Once installed, whenever you navigate to a URL from one of the configured domains, you'll be automatically redirected to the archive.is version.

## Configuration

To add or remove domains, edit `config.js` and update the `REDIRECT_DOMAINS` array:

```javascript
export const REDIRECT_DOMAINS = [
    "www.example.com",
    "www.another-site.com"
    // Add more domains here
];
```

After making changes, go to `chrome://extensions/` and click the refresh icon on the extension card.
