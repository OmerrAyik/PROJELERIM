let url ="https://www.google.com/search?q=";
const searchInput= document.querySelector(".searchInput");
const searchBtn=document.querySelector(".search-btn");

searchBtn.addEventListener("click",()=>
{
    if(searchInput.value != "")
    {
        url += searchInput.value;
        window.open(url);

        searchInput.value ="";
        url ="https://www.google.com/search?q=";
    }
});