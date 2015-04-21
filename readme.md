eBrary fix
==========

# What's the problem?

The reason why the books don't show up in eBrary is because there's a typo in one of the template files. Instead of ```%>``` it's actually ```% >``` (notice there's an space in between?). It only happens in three places but it causes the JavaScript to have error that stops the book from appearing properly. This Chrome extension detects the typo and automatically corrects it so the books appear normally. 

# How to install

1. Download the [extension](https://github.com/chrisle/ebrary-fix/raw/master/dist/ebrary-fix.crx). (Click this link to download the CRX file to your computer)
2. In Chrome, go to "Settings" then click on "Extension"s on the left hand side.
3. Take the file you downloaded and drag and drop it onto the Chrome browser.
4. Chrome will ask you to approve installing it. Say yes.

The next time you're in eBrary and you click to open a book online you'll see a band-aid icon in the address bar indicating that this extension is has automatically corrected the typo on this page. It will only apply a fix if it detects the typo. This extension will simply do nothing once eBrary fixes the typo permanently. When they do you can simply uninstall this plugin.

# How to uninstall

1. In Chrome, go to "Settings" then click on "Extensions" on the left hand side.
2. Find the "eBrary fix" extension and click on the trash can next to it.

---

![Fixed](https://raw.githubusercontent.com/chrisle/ebrary-fix/master/meme.png)
