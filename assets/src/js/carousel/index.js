(function($){
    class SlickCarousel{
        constructor(){
            this.initiateCarousel();
        }
        initiateCarousel(){
            $('.posts-carousel').slick({
                autoplay: true,
                autoplaySpeed: 2000
            });
        }
    }

    new SlickCarousel();

})(jQuery);
