(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

window.addEventListener('load',
  function load() {
    window.removeEventListener('load', load, false);
    document.body.classList.remove('preload');
    document.body.className.replace('preload ','');
  },
false);

document.getElementById('contact').innerHTML = '\u0068\u0065\u006c\u006c\u006f\u0040\u0064\u006f\u006e\u0064\u0069\u002e\u0063\u0063';

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if (isIE () && isIE () < 11) {
  document.body.innerHTML += '<div style="margin:20px;"><p>Sorry, this site doesn’t support older versions of Internet Explorer. Use Edge or try again using Chrome or Firefox. Apologies for the inconvenience.<p></div>';
}
