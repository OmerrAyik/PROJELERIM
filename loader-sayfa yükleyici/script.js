// const myButton=document.getElementById("myButton");
// const loader=document.getElementById("loader");

// myButton.addEventListener("click",()=>
// {
//     loader.style.display="inline-block";
// })
function showLoader()
{
    document.getElementById("loader").style.display="block";  
}

function hideLoader()
{
    document.getElementById("loader").style.display="none";
    
}

const button=document.getElementById("myButton");

button.addEventListener("click",()=>
{
    button.style.display="none";
    showLoader();

    //API'den veri geliyormuş gibi bekletelim.
    
    setTimeout(() => {

        hideLoader();

        document.querySelector(".img").style.display="block";
    }, 2000);
})