require('./alpine');

window.tes = function() {
  var s = document.getElementById("mysidebar");
  var h = document.getElementById("myheader");
  var m = document.getElementById("mymain");
  if (screen.width > 768) {
    s.classList.add("open");
    h.classList.add("open");
    m.classList.add("open");
  }

  if (screen.width < 768) {
    s.classList.remove("open");
    h.classList.remove("open");
    m.classList.remove("open");
  }
}

window.toggle = function() {
  var s = document.getElementById("mysidebar");
  var m = document.getElementById("mymain");
  var h = document.getElementById("myheader");
  s.classList.toggle("open");
  h.classList.toggle("open");
  m.classList.toggle("open");
}

document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.display = "none";
    window.addEventListener("DOMContentLoaded", tes);
  }
}

window.addEventListener("load", function() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.display = "block";
});

window.addEventListener("resize", tes);
