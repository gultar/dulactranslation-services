
function traduire(){
  var element = document.getElementById('translation-services');
  //  This gives you a string representing that element and its content
  var html = element.outerHTML;
  //  This gives you a JSON object that you can send with jQuery.ajax's `data`
  // option, you can rename the property to whatever you want.
  var data = { html: html };

  //  This gives you a string in JSON syntax of the object above that you can
  // send with XMLHttpRequest.
  var json = JSON.stringify(data);

  console.log(json);
}




function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'translation-services.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }
