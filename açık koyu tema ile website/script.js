const btn   =   document.querySelector(".btn");
const btn2   =   document.querySelector(".btn2");
const theme = "dark";
const theme2 = "light";

btn.addEventListener("click", ()=>
{
    if(theme === "dark")
    {
        document.documentElement.classList.add("dark-theme");
    }
    btn.style.color="white";
});

btn2.addEventListener("click",()=>
{
    if(theme2 === "light")
    {
        document.documentElement.classList.remove("dark-theme");
    }
    btn.style.color="black";
})

