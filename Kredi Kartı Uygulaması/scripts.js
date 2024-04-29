//front of card
document.querySelector(".Inputnumber").oninput =()=>
{
    document.querySelector(".card-number-box").innerText=
    document.querySelector(".Inputnumber").value;
}

document.querySelector(".Owner").oninput=()=>
{
    document.querySelector(".cartOwner").innerText=
    document.querySelector(".Owner").value;
}

document.getElementById("month").oninput=()=>
{
    document.querySelector(".month-box").innerText=
    document.getElementById("month").value;
}

document.getElementById("year-Input").oninput=()=>
{
    document.querySelector(".year-box").innerText=
    document.getElementById("year-Input").value;
}


document.querySelector(".cvValue").onclick=()=>
{
    document.querySelector(".front").style.display="none";
    document.querySelector(".back").style.display="block";
};

