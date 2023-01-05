function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
  var images = document.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    var x = new Date();
    var pk = images[i].getAttribute("data-pk");
    document.getElementById('ct_' + pk).innerHTML = x.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
  }

  display_c();
}

window.onload = function() {
  display_ct();
}