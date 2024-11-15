(function () {
    const closeBanners = document.querySelectorAll(".c-banner__close");
    closeBanners.forEach((closeBanner) => {
        closeBanner.addEventListener("click", (e) => {
            const banner = e.target.parentNode;
            banner.classList.add("collapse");

            banner.addEventListener("transitioned", function (e) {
                if (e.target == this) {
                    this.remove();
                }
            })
        })
    })
})();