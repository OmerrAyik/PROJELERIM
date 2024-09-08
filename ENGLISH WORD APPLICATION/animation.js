const buttons =document.querySelectorAll(".anime-buton");
const modal=document.querySelector(".Modal");
const video =document.querySelector(".video");

buttons.forEach((button)=>
{
    button.addEventListener("click",(event)=>
    {
        modal.classList.remove("hidden");
        const videoLink= event.target.getAttribute("data-video");
        video.setAttribute('src',videoLink);
    })
});

