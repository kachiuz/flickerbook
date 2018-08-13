function scrollFunction() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById("hiddenMenu").style.top = "0px";
    } else {
        document.getElementById("hiddenMenu").style.top = "-250px";
    }
}
function start (){
	window.onscroll = function() {scrollFunction()};
}
document.addEventListener("DOMContentLoaded",start,false);