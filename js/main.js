var elSiteHeader = document.querySelector(".js-header");
var elShowMenuBtn = elSiteHeader.querySelector(".js-hamburg-btn");


elShowMenuBtn.addEventListener("click", function() {
  
  elSiteHeader.classList.toggle("show-menu");
  
  document.body.classList.toggle("no-scroll");
  
});