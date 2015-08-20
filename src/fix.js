
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    chrome.pageAction.show(details.tabId);

    console.log('patched', details);
    // Redirects the JavaScript to use a patched version inside this
    // chrome extension. If the filename changes on the server side,
    // this extension should stop working.
    return { redirectUrl: chrome.extension.getURL('src/build18_patched.js') };
  },
  { urls: ['https://kesher.jtsa.edu/optimizedresources/js/,DanaInfo=site.ebrary.com,CT=js+mayank_manual_optimized_build18.js'] },
  ['blocking']
);

// Test URL: https://kesher.jtsa.edu/lib/jewishts/,DanaInfo=site.ebrary.com+detail.action?docID=10331330&p00=james+kugel
