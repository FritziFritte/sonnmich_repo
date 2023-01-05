function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
  var images = document.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    var pk = images[i].getAttribute("data-pk");

    var currentTime = new Date();
    var targetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 14, 0, 0);
  
    var timeDifference = currentTime - targetTime; 
    var hoursDifference = Math.floor(timeDifference / 1000 / 60 / 60);
    var minutesDifference = Math.floor((timeDifference / 1000 / 60) - (hoursDifference * 60));

    //if (timeDifference <= 0) {
    //  document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' +  Math.abs(hoursDifference) + ':' + Math.abs(minutesDifference);
    //} else {
    //  document.getElementById('ct_' + pk).innerHTML = 'Noch ' + Math.abs(hoursDifference) + ':' + Math.abs(minutesDifference) + ' Sonne';
    //}
    //document.getElementById('ct_' + pk).innerHTML = "seconds " + timeDifference_seconds + " " + "minutes " + timeDifference_minutes;

    document.getElementById('ct_' + pk).innerHTML = hoursDifference + ':' + minutesDifference;
    
    
  }

  display_c();
}

window.onload = function() {
  display_ct();
}