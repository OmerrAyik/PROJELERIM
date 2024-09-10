//Tıklama Olayı
function toggleDetails(event) {
    const details = event.currentTarget;
    const summary = details.querySelector("summary");
    const expandIcon = summary.querySelector(".fa-solid");

    if (details.open) {
        console.log("Details opened"); // Detayların açıldığını kontrol ediyoruz
        expandIcon.classList.remove("fa-circle-plus");
        expandIcon.classList.add("fa-circle-minus");
    } else {
        console.log("Details closed"); // Detayların kapandığını kontrol ediyoruz
        expandIcon.classList.remove("fa-circle-minus");
        expandIcon.classList.add("fa-circle-plus");
    }
}

//Tüm details öğelerini seç ve tıklama olayını dinle
const detailsElement = document.querySelectorAll("details");
detailsElement.forEach(detail => {
    detail.addEventListener("toggle", toggleDetails);
});
