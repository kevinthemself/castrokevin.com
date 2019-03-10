document.addEventListener('DOMContentLoaded', function () {
  // parallax
  const parallaxElems = document.querySelectorAll('.parallax');
  const parallaxiInstances = M.Parallax.init(parallaxElems, {});

  // sidenav
  var sidenav = document.querySelectorAll('.sidenav');
  var instance = M.Sidenav.init(sidenav, {});
});