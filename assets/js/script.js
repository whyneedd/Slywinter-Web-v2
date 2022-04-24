const humbger = document.querySelector(".humbger");
const humbgermenu = document.querySelector(".humbgermenu");
const cursor = document.querySelector(".cursor");



document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})
humbger.onclick = function() {
    humbger.classList.toggle("active");
    humbgermenu.classList.toggle("active");
}
window.addEventListener("load", ShowAff)


var loading;

function ShowAff () {
    loading = setTimeout(ShowPages, 10);
}

function ShowPages() {
    document.querySelector(".loading").style.display="none"
    document.querySelector(".pages").style.display="block"
}