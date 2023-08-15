// slick Slider
$('.right').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1  
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1 
        }
    }
    ]
});