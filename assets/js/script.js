
window.addEventListener("load", ShowAff)

var loading;

function ShowAff () {
    loading = setTimeout(ShowPages, 10000);
}

function ShowPages() {
    document.querySelector(".loading").style.display="none"
    document.querySelector(".pages").style.display="block"
}