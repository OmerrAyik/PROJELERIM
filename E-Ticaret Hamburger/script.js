const mobilebuton =document.querySelector(".mobile-buton");
const nav =document.querySelector(".navigation");
const closes=document.querySelector(".fa-circle-xmark")

mobilebuton.addEventListener("click",function()
{
    nav.style.left="0";
    closes.style.display="block";
});

closes.addEventListener("click",function()
{
    nav.style.left="-200%";
    closes.style.display="none";
});

const search= document.getElementById("search");
const search_js=document.querySelector(".search_js");
const express_wrapper= document.querySelector(".express-wrapper");
const kapat=document.getElementById("kapat");

search.addEventListener("click",function(event)
{
    setTimeout(() => {
        search_js.style.display="flex";
        search_js.style.transition=" all linear";
    }, 200);
});

// express_wrapper.addEventListener("click",function(event)
// {
//     if(event.composedPath().includes(express_wrapper));
//     {
//         search_js.style.display="none";
//     }
// });

/*Search Buton*/
kapat.addEventListener("click",function()
{
    search_js.style.display="none";
})

/*Bag  Show*/
const bag=document.getElementById("bag");
const back_page=document.querySelector(".bag_page");
bag.addEventListener("click",function()
{
    back_page.style.display="block";
})


/*Bag Close*/
const bag_close_title=document.querySelector(".bag-close-title");
const bag_page=document.querySelector(".bag_page")

bag_close_title.addEventListener("click",function()
{
    bag_page.remove();
})

