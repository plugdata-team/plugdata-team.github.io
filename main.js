function toggleMenu() {
  var x = document.getElementById("menu-button").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("menu-button").setAttribute("aria-expanded", x);
}