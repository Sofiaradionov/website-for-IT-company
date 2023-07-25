const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');



navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "../img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "../img/icons/nav-open.svg";
    }
}

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});

AOS.init({
    duration: 1200,
});