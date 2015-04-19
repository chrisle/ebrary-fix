eBrary fix
==========

Fixes the eBrary interface so that it works.

There's currently a bug in their template. Instead of ```%>``` it's actually
```% >```. This causes an unhandled exception error that breaks the whole page.

This Chrome extension intercepts the JavaScript that compiles the template
and patches it so that it fixes the template before it's rendered.

# How to install

1. Download the [extension](https://github.com/chrisle/ebrary-fix/raw/master/dist/ebrary-fix.crx). (It's a CRX file.)
2. In Chrome, go to Settings > Extensions
3. Drag and drop the CRX file into the Chrome window.

When you view eBrary books online, you'll know it's working when you see a
band-aid icon in your address bar.

![Fixed](https://raw.githubusercontent.com/chrisle/ebrary-fix/master/meme.png)
