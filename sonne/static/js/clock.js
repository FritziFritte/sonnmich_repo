function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
  var objectList = [{name: "object1"}, {name: "object2"}];

  for (var i = 0; i < objectList.length; i++) {
    var x = new Date();
    document.getElementById('ct_' + (i + 1)).innerHTML = x.toTimeString();
  }

  display_c();
}

window.onload = function() {
  display_ct();
}
