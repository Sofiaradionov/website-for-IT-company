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

AOS.init({
  duration: 700,
});

const readMoreBtn = document.querySelectorAll(".read-more-btn");
const text = document.querySelectorAll(".moreText");

readMoreBtn.forEach((item, idx) => {
  item.addEventListener('click', () => {
    text[idx].classList.toggle('moreText')
    if (item.innerText === "Read More") {
      item.innerText = "Read Less";
    } else {
      item.innerText = "Read More";
    }
  })
})
