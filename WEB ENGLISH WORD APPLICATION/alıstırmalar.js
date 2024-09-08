const mobile = document.querySelector(".mobile-buton");
const menu =document.querySelector(".menu");
const closes=document.querySelector("#closes");

mobile.addEventListener("click",function()
{
    menu.style.left = "0px";
    menu.style.transition ="2s";
});

closes.addEventListener("click",function()
{
    menu.style.left="-100%";
})

//Account Event
const account =document.getElementById("account");
const drop_account=document.getElementById("drop_account");

account.addEventListener("click", ()=>
{
    account.style.top="50px";
    drop_account.style.display="block";

});
// Click Outside
document.addEventListener("click", function (event) {
    if (!event.composedPath().includes(drop_account) && !event.composedPath().includes(account)) {
        drop_account.style.display = "none";
        account.style.top="0px";
    }
  });

