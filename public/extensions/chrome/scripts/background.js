// function scrapePage() {
// 
//   // alert("scapPage() is being loaded");
// 
//   var url="http://google.com";
// 
//   function handleStateChange(data) {
//     if(this.readyState == 2) { 
//       alert(this.getAllResponseHeaders())
//     }
//   };
// 
//   var client = new XMLHttpRequest();
//   client.onreadystatechange = handleStateChange; // Implemented elsewhere.
//   client.open("GET", chrome.extension.getURL(url), true);
//   client.send();
// 
// };

function handler() {
  switch() {
    case this.readyState == this.DONE:
      alert('DONE');
    break;
    case this.readyState == this.UNSET:
      alert('UNSET');
    break;
    case this.readyState == this.OPENED:
      alert('OPENED');
    break;
    case this.readyState == this.HEADERS_RECEIVED:
      alert('HEADERS_RECEIVED');
    break;
    case this.readyState == this.LOADING:
      alert('LOADING');
    break;
  }
};

function fetchStatus(address) {
  var client = new XMLHttpRequest();
  client.onreadystatechange = handler;
  client.open("HEAD", address);
  client.send();
};

chrome.browserAction.onClicked.addListener(function() {
  // alert('hey');
  // scrapePage();
  fetchStatus("http://www.google.com");
});










// Load require.js and whichever other modules

// (function loadScript(url, callback)
// {
//   alert('loadScript is running');
//   // var head             = document.getElementsByTagName('head')[0];
//   // var script           = document.createElement('script');
//   // script.data-main = "scripts/main";
//   // script.type      = 'text/javascript';
//   // script.src       = 'scripts/require.js';
// 
//   // then bind the event to the callback function 
//   // there are several events for cross browser compatibility
//   // script.onreadystatechange = callback;
//   // script.onload = callback;
// 
//   // fire the loading
//   // head.appendChild(script);
// 
//   alert("fetchPage is loading");
//   var url = "something.html";
//   alert('url is being defined as' + url);
//   $.ajax({
//     type: "GET",
//     url: url,
//     error: function(request, status) {
//       alert('Error fetching ' + url);
//     },
//     success: function(data) {
//       var parsedPage = parse(data.responseText);
//       alert(parsedPage)
//       }
//     });
//   }) ();


// attempting to use the xhr2 stuff above instead
//   $.ajax({
//     type: "GET",
//     url: url,
//     error: function(request, status) {
// 
//       alert('Error fetching ' + url);
// 
//       alert("here's the request...");
//       for (var key in request) { 
//         if(request.hasOwnProperty(key)) {
//           alert(key + ": " + request[key])
//         }
//       };
// 
//       alert("here's the status...");
//       for (var key in status) { 
//         if(status.hasOwnProperty(key)) {
//           alert(key + ": " + status[key])
//         }
//       }
//     },
// 
//     success: function(data) {
//       alert(data);
//       // var parsedPage = parse(data.responseText);
//       }
//     });
// };


