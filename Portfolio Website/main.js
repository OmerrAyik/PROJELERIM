const SideMenu = document.querySelector(".side-menü");
const navigationDisplay = document.querySelector(".navigation-display");

SideMenu.addEventListener("click", () => {
    navigationDisplay.style.display = "block";
})

/*Download CV*/
const btnContact = document.getElementById("download");
btnContact.addEventListener("click", function () {
    const cvUrl = "download/CV-TÜRKCE.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "ÖMER-AYIK-CV.pdf");

    document.body.appendChild(link);
    link.click();

    //  Linki DOM'dan kaldırma
    document.body.removeChild(link);
});

/*My projects With slider*/
let currentIndex = 0;

function updateSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; /* Her seferinde %100 sola kayar */
}

function nextSlide() {
  const cards = document.querySelectorAll('.card');
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // İlk karta döner
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = document.querySelectorAll('.card').length - 1; // Son karta döner
  }
  updateSlider();
}






