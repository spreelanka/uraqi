// alert('the main file is being called');
// require(["background","jquery-1.7.2.min.js"], function(background) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
// });

$(document).ready(function() {

  alert('document is ready');
  scrapePage();

  function scrapePage() {

    alert('scapPage() is being loaded');

    var url = 'http://twitter.com';

    $.ajax({
      type: 'GET',
      url: url,
      error: function(req, resp) {
        console.log('Error fetching ' + url);

        console.log('req:');
        console.log(req);

        console.log('resp:');
        console.log(resp);
      },
      success: function(data) {
        console.log('success');
        // var parsedPage = parse(data.responseText);
      }
    });
    return false;
  }

});
