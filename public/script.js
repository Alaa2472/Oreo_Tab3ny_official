var header = document.getElementById("mydiv");
var btns = header.getElementsByClassName("btoon");
 for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = 
      document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    thi.className += " active";
      });
 }

    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        document.getElementById ("pencil").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 2000); // 3000 milliseconds (3 seconds)
    });
