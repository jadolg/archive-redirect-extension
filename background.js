import { REDIRECT_DOMAINS } from './config.js';

chrome.webNavigation.onBeforeNavigate.addListener(
    (details) => {
        if (details.frameId !== 0) return;

        const url = new URL(details.url);

        if (REDIRECT_DOMAINS.includes(url.hostname)) {
            const archiveUrl = `https://archive.is/newest/${details.url}`;
            chrome.tabs.update(details.tabId, { url: archiveUrl });
        }
    },
    {
        url: REDIRECT_DOMAINS.map(domain => ({ hostEquals: domain }))
    }
);
