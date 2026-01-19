# Archive.is Redirect Chrome Extension

A simple Chrome extension that automatically redirects specific websites to their archive.is version.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" 
4. Select the `archive-redirect-extension` folder

## Usage

Once installed, whenever you navigate to a URL from one of the configured domains, you'll be automatically redirected to the archive.is version.

## Adding More Domains

To add more domains, edit `background.js` and add the domain to the `REDIRECT_DOMAINS` array:

```javascript
const REDIRECT_DOMAINS = [
  "example.com"  // Add new domains here
];
```

Then also update `manifest.json` to include the new domain in `host_permissions`:

```json
"host_permissions": [
  "*://example.com/*"
]
```

After making changes, go to `chrome://extensions/` and click the refresh icon on the extension card.
