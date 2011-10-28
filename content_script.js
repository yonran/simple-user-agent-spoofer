var s = document.createElement('script');
var nav = {
  appName: 'Netscape',
  appVersion: "5.0 (X11; en-US)",
  appCodeName: "Mozilla",
  osplatform: "Linux x86_64",
  oscpu: "Linux x86_64",
  product: "Gecko",
  vendor: "Ubuntu",
  vendorSub: "10.04",
  userAgent: "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.18) Gecko/20110628 Ubuntu/10.04 (lucid) Firefox/3.6.18"
};
s.textContent =
    '(function() {\n' +
    '  var n = navigator\n' +
    '    , m = navigator = ' +
    // Note: we must set userAgent BEFORE setting __proto__ to prevent the
    // defined no-op setter on Navigator object.
    JSON.stringify(nav) + '\n' +
    '  m.__proto__ = n;\n' +
    // '  console.log("deed is done");\n' +
    '})();';
document.documentElement.appendChild(s);
document.documentElement.removeChild(s);
