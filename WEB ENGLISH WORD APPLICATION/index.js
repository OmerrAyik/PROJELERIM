const mobile = document.querySelector(".mobile-buton");
const menu =document.querySelector(".menu");
const closes=document.querySelector("#closes");

mobile.addEventListener("click",function()
{
    menu.style.left = "0px";
    menu.style.transition ="2s"
});

closes.addEventListener("click",function()
{
    menu.style.left="-100%";
})
