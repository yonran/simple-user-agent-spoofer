Chrome has a `--user-agent` flag, but sometimes you want to modify the user-agent for only a select number of websites (e.g. Microsoft Outlook Web Access).

This is the simplest (code-wise) user-agent switcher possible, but not a very usable one. If you want a more full-featured user-agent switcher, see [User-Agent Switcher for Chrome](http://spoofer-extension.appspot.com/).

Steps to use:

1. Download the extension and modify `manifest.json`: Set the `permissions` and `matches` to the [wildcards](http://code.google.com/chrome/extensions/match_patterns.html) of the URLs you want the spoof to apply to.
2. Navigate to chrome://extensions
3. Check **Developer mode**
4. **Load unpacked extension...** and select the folder where you saved this extension.

Since it uses `chrome.webRequest` apis which are not yet in stable, it may not work in your browser yet (if you haven't signed up for the dev channel). See the [bug](http://code.google.com/p/chromium/issues/detail?id=60101) to track progress of the API becoming stable.

To change the User-Agent that this extension spoofs, edit both `content_script.js` and `background.html`.

See also [User-Agent Switcher for Chrome](http://spoofer-extension.appspot.com/) for a more full-featured experimental extension. It most likely works and is easier to use, but theoretically it might fail on some websites that read `<script>var ua = navigator.userAgent</script>` at the very top of the page using Javascript.
