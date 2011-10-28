Chrome has a `--user-agent` flag that is supposed to change the user agent, the current dev version (16.0.912.12) ignores the flag. See [bug 102220](http://crbug.com/102220) for more details.

This is the simplest User-Agent switcher for Google Chrome that I wrote several months ago but it didn't work yet. But now it works! Steps to use:

1. Change the Chrome shortcut: add the flag `--enable-experimental-extension-apis`
2. navigate to chrome://extensions
3. Check **Developer mode**
4. **Load unpacked extension...** and select the folder where you saved this extension.

Since it uses the [experimental WebRequest APIs](http://code.google.com/chrome/extensions/experimental.webRequest.html) which haven't been finalized, this extension will eventually fail. See the [bug](http://code.google.com/p/chromium/issues/detail?id=60101) to track progress of the API becoming stable. You also have to edit `manifest.json` to set the URL filter correctly.

To change the websites that this extension applies to, edit `manifest.json`.

To change the User-Agent that this extension spoofs, edit both `content_script.js` and `background.html`.

See also [User-Agent Switcher for Chrome](http://spoofer-extension.appspot.com/) for a more full-featured experimental extension. It most likely works and is easier to use, but theoretically it might fail on some websites that read `<script>var ua = navigator.userAgent</script>` at the very top of the page using Javascript.
