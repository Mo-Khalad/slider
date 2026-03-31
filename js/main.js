var imgs=Array.from(document.querySelectorAll(".img-fluid"));
var lightboxContainer=document.getElementById("lightbox-container");
var lightboxItem=document.getElementById("lightbox-item");
var closeIcon=document.getElementById("close");
var nextIcon=document.getElementById("next");
var prevIcon=document.getElementById("prev")
var index;
let Interval = ''

//slider show function
for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
    Interval = setInterval( getNext ,2000)  
    lightboxContainer.style.display="flex";
    let imgSrc=e.target.src;
    lightboxItem.style.backgroundImage=`url(${imgSrc})`;
    index=imgs.indexOf(e.target)
})
}

// arrow next function
function getNext(){
index++;
if(index==imgs.length){
    index=0;
}
let imgSrc=imgs[index].src;
lightboxItem.style.backgroundImage=`url(${imgSrc})`;

}
nextIcon.addEventListener("click", getNext)

// arrow prev function
function getPrev(){
index--;
if(index<0){
    index=imgs.length-1
}
var imgSrc=imgs[index].src;
lightboxItem.style.backgroundImage=`url(${imgSrc})`;
}
prevIcon.addEventListener("click",getPrev)

//slider hide function
function getClose(){
     lightboxContainer.style.display="none";
     clearInterval(Interval)
}

lightboxContainer.addEventListener('click',function(e){
    if(e.target!=lightboxItem&&e.target!=prevIcon&&e.target!=nextIcon){
        getClose();
    }
})
//Use the keyboard function to navigate between the next, previous, and hide items.
function getKeyboard(e){
 if(e.key=='ArrowRight'){
        getNext()
    }
    else if(e.key=="ArrowLeft"){
        getPrev()
    }
    else if(e.key=='Escape'){
        getClose();
    }
}
document.addEventListener("keydown", getKeyboard)




