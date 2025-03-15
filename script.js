var fullImgbox = document.getElementById("fullImgbox");
var fullImg = document.getElementById("fullImg");

function openfullimg(pic){
    fullImgbox.style.display = "flex";
    fullImg.src = pic;
}
function closefullimg(){
    fullImgbox.style.display = "none";
}
