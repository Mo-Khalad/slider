var imgs=Array.from(document.querySelectorAll(".img-fluid"));
var lightboxContainer=document.getElementById("lightbox-container");
var lightboxItem=document.getElementById("lightbox-item");
var closeIcon=document.getElementById("close");
var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev")
var index;

for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
    lightboxContainer.style.display="flex";
    let imgSrc=e.target.src;
    lightboxItem.style.backgroundImage=`url(${imgSrc})`;
    index=imgs.indexOf(e.target)
})
}

function getNext(){
index++;
if(index==imgs.length){
    index=0;
}
let imgSrc=imgs[index].src;
lightboxItem.style.backgroundImage=`url(${imgSrc})`;

}
nextIcon.addEventListener("click", getNext)
function getPrev(){
index--;
if(index<0){
    index=imgs.length-1
}
var imgSrc=imgs[index].src;
lightboxItem.style.backgroundImage=`url(${imgSrc})`;
}
prevIcon.addEventListener("click",getPrev)

document.addEventListener("keydown",function(e){
    if(e.key=='ArrowRight')
    {
        getNext()
    }
    else if(e.key=="ArrowLeft")
    {
        getPrev()
    }
    else if(e.key=='Escape'){
        getClose();
    }
})
function getClose(){
     lightboxContainer.style.display="none";
}
lightboxContainer.addEventListener('click',function(e){
    if(e.target!=lightboxItem&&e.target!=prevIcon&&e.target!=nextIcon){
        getClose();
    }
})



