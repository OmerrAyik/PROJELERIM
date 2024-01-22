function sidebarFunction()
{
//! Home Sidebar Start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const closes = document.querySelector("#close");

btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
})
closes.addEventListener("click", function () {
  sidebar.style.left = "-100%";
  sidebar.style.transition = "2s"
})

// Click Outside
document.addEventListener("click", function (event) {
  if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "2s";
  }
})
//! Home Sidebar end
}
function searchModalFunction()
{
    //! Modal Search Start
const search = document.querySelector("#togglebutton");
const modalSearch = document.querySelector(".modal-search");
const modalClose = document.querySelector("#modalclose");
//modal search show
search.addEventListener("click", function () {
  modalSearch.style.visibility = "visible";
  modalSearch.style.zIndex = "2";
  modalSearch.style.opacity = "1";
})

//modal search close
modalClose.addEventListener("click", function () {
  modalSearch.style.visibility = "hidden";
  modalSearch.style.opacity = "0";
})


// Click Outside

document.addEventListener("click", function (event) {
  if (event.composedPath().includes(modalSearch)) {
    modalSearch.style.visibility = "hidden";
  }
})

//! Modal Search End
}

export default function()
{
    sidebarFunction();
    searchModalFunction();
}

