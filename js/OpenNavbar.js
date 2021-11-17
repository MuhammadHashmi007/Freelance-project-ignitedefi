function openNav() {
  document.getElementById("overlayBackground").style.visibility = "visible";
  document.getElementById("sidenav").style.width = "290px";
  document.getElementById("topBar").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("overlayBackground").style.visibility = "hidden";
  document.getElementById("topBar").style.visibility = "visible";
}