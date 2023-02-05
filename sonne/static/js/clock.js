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
    var stopTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 16, 0, 0);
  
    var timeDifference = currentTime - targetTime; 
    var hoursDifference = Math.floor(Math.abs(timeDifference / 1000 / 60 / 60));
    var minutesDifference = Math.floor(Math.abs(timeDifference / 1000 / 60) - (hoursDifference * 60));



    if (timeDifference <= 0) {
      if (hoursDifference<10) {
        if (minutesDifference<10) {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + '0' + hoursDifference + ':' + '0' + minutesDifference;
        } else {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + '0' + hoursDifference + ':' + minutesDifference;
        }
      } else {
        if (minutesDifference<10) {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + hoursDifference + ':' + '0' + minutesDifference;
        } else {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + hoursDifference + ':' + minutesDifference;
        }
      }
    } else {
      if (hoursDifference<10) {
        if (minutesDifference<10) {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + '0' + hoursDifference + ':' + '0' + minutesDifference;
        } else {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + '0' + hoursDifference + ':' + minutesDifference;
        }
      } else {
        if (minutesDifference<10) {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + hoursDifference + ':' + '0' + minutesDifference;
        } else {
          document.getElementById('ct_' + pk).innerHTML = 'Sonne in ' + hoursDifference + ':' + minutesDifference;
        }
      }
    }
  }




    //document.getElementById('ct_' + pk).innerHTML = "seconds " + timeDifference_seconds + " " + "minutes " + timeDifference_minutes;

    //document.getElementById('ct_' + pk).innerHTML = timeDifference;
  

  display_c();
}

window.onload = function() {
  display_ct();
}