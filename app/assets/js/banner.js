/******/ (() => { // webpackBootstrap
(function () {
  var closeBanners = document.querySelectorAll(".c-banner__close");
  closeBanners.forEach(function (closeBanner) {
    closeBanner.addEventListener("click", function (e) {
      var banner = e.target.parentNode;
      banner.classList.add("collapse");
      banner.addEventListener("transitioned", function (e) {
        if (e.target == this) {
          this.remove();
        }
      });
    });
  });
})();
/******/ })()
;