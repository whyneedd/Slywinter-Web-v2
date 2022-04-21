const humbger = document.querySelector(".humbger");
const humbgermenu = document.querySelector(".humbgermenu");

humbger.onclick = function() {
    humbger.classList.toggle("active");
    humbgermenu.classList.toggle("active");
}
window.addEventListener("load", ShowAff)

var loading;

function ShowAff () {
    loading = setTimeout(ShowPages, 1);
}

function ShowPages() {
    document.querySelector(".loading").style.display="none"
    document.querySelector(".pages").style.display="block"
}