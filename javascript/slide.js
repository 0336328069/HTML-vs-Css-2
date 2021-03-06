

const slider = document.querySelector(".mgi__banner__bg-image");
const sliderMain = document.querySelector(".mgi__banner__container");
const sliderItems=document.querySelectorAll(".mgi__banner__slide");
const nextBtn=document.querySelector(".mgi__banner__next-button");
const prevBtn=document.querySelector(".mgi__banner__previous-button");
const dotItems=document.querySelectorAll(".mgi__banner__manual-btn");
const slideItemWidth = 20;
const slidesLength= sliderItems.length;
let positionX=0;
let index=0;
[...dotItems].forEach((item) => item.addEventListener("click", function(e){
    [...dotItems].forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
 const slideindex=parseInt(e.target.dataset.index);
 index = slideindex;
 positionX=-1*index* slideItemWidth;
 sliderMain.style=`transform: translateX(${positionX}%); transition:1.5s;`
}));
nextBtn.addEventListener("click",function(){
handleChangeSlide(1);
})
prevBtn.addEventListener("click",function(){
handleChangeSlide(-1);
})
function handleChangeSlide(direction){
    if(direction == 1)
    {
        if(index >= slidesLength - 1){
            positionX=positionX+(slidesLength*slideItemWidth);
            sliderMain.style=`transform: translateX(${positionX})% ; transition:1.5s`;
            index=-1;
        }
        positionX=positionX - slideItemWidth;
        sliderMain.style=`transform: translateX(${positionX}%) ; transition:1.5s`;
        index++;
    }
    else if (direction == -1){
        if(index <= 0) {
            positionX=positionX-(slidesLength*slideItemWidth);
            sliderMain.style=`transform: translateX(${positionX})% ; transition:1.5s`;
            index=slidesLength;
        }
        positionX=positionX + slideItemWidth;
        sliderMain.style=`transform: translateX(${positionX}%) ; transition:1.5s`;
        index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
}

// ---------------------------------
const body = document.querySelector(".mgi__project__body");
const sliders = document.querySelector(".mgi__project__slider");
const slickslider =document.querySelectorAll(".mgi__project__slider-item");
const slicknextBtn=document.querySelector(".slick-next");
const slickprevBtn=document.querySelector(".slick-prev");
document.addEventListener("DOMContentLoaded",function(){
    //reponsive
    window.addEventListener("resize",function(){
        clearInterval(autoplay);
        count=0;
        if(window.innerWidth >=992){
            
            make_slide(4);
        }
        else if(window.innerWidth >= 768){
            
            make_slide(2);
        }
        else {
            
            make_slide(1);
        }
    });
    
    const media = [
        window.matchMedia('(min-width:992px)'),
        window.matchMedia('(min-width:768px)')
    ];
    if(media[0].matches)
    {
        
        make_slide(4);
    }else if (media[1].matches){
        
        make_slide(2);
    }else{
        
        make_slide(1);
    }
})
function make_slide(amountSlideAppear){
    
    const widthItemAndMargin = body.offsetWidth/amountSlideAppear;
    
    let widthAllBox = widthItemAndMargin * slickslider.length;
    sliders.style.width=`${widthAllBox}px`
    slickslider.forEach(element =>{
        element.style="padding:0 10px";
        element.style.width=`${widthItemAndMargin}px`;
    })
    //handle slide btn
    let count=0;
    let spacing= widthAllBox - widthItemAndMargin *amountSlideAppear;
    
    autoplay = setInterval(() => {
        count+=widthItemAndMargin;
        if(count>spacing)
        {
            count=0;
        }
        sliders.style.transform =`translateX(${-count}px)`;
        sliders.style.transition="1s";
    }, 5000);
        slicknextBtn.addEventListener("click",function(){
            count += widthItemAndMargin;
            if(count>spacing)
            {
                count=0;
            }
            sliders.style.transform =`translateX(${-count}px)`
            sliders.style.transition="1s";
        })
        slickprevBtn.addEventListener("click",function(){
            count -= widthItemAndMargin;
            if(count<0)
            {
                count=spacing;
            }
            sliders.style.transform =`translateX(${-count}px)`
            sliders.style.transition="1s";
        })
    }
// --------------------------------------------------slider comment-----------------------------------------------
const commentContainer =document.querySelector(".mgi__clients-comment__container");
const commentSliders=document.querySelector(".mgi__clients-comment__slider");
const commentSlideItem=document.querySelectorAll(".mgi__clients-comment__slider-item");

document.addEventListener("DOMContentLoaded",function(){
    console.log(window.innerWidth);
    window.addEventListener("resize",function(){
        clearInterval(autoplay2);
        countcomment=0;
        if(window.innerWidth >=992){
            make_slide2(3);
        }
        else if(window.innerWidth >= 768){
            make_slide2(2);
        }
        else {
            make_slide2(1);
        }
    });
    
    const media = [
        window.matchMedia('(min-width:992px)'),
        window.matchMedia('(min-width:768px)')
    ];
    if(media[0].matches)
    {
        make_slide2(3);
    }else if (media[1].matches){
        make_slide2(2);
    }else{
        make_slide2(1);
    }
})

function make_slide2(amountSlideAppear){
    const widthCommentItemAndMargin = commentContainer.offsetWidth/amountSlideAppear;
    
    let widthCommentAllBox = widthCommentItemAndMargin * commentSlideItem.length;
    commentSliders.style.width=`${widthCommentAllBox}px`
    commentSlideItem.forEach(element =>{
        element.style.width=`${widthCommentItemAndMargin}px`;
    })
    //handle slide btn
    let countcomment=0;
    let spacingcomment= widthCommentAllBox - widthCommentItemAndMargin *amountSlideAppear;
    
    autoplay2=setInterval(() => {
        countcomment+=widthCommentItemAndMargin;
        if(countcomment>spacingcomment)
        {
            countcomment=0;
        }
        commentSliders.style.transform =`translateX(${-countcomment}px)`;
        commentSliders.style.transition="1s"
    }, 5000);
    }

// ---------------------------------------LastestNews Slider-----------------------------------------------------
const lastedContainer =document.querySelector(".mgi__lasted-news__container");
const lastedSliders=document.querySelector(".mgi__lasted-news__slider");
const lastedSlideItem=document.querySelectorAll(".mgi__lasted-news__slider-item");

document.addEventListener("DOMContentLoaded",function(){
    console.log(window.innerWidth);
    window.addEventListener("resize",function(){
        clearInterval(autoplay3);
        countlasted=0;
        if(window.innerWidth >=992){
            make_slide3(3);
        }
        else if(window.innerWidth >= 768){
            make_slide3(2);
        }
        else {
            make_slide3(1);
        }
    });
    
    const media = [
        window.matchMedia('(min-width:992px)'),
        window.matchMedia('(min-width:768px)')
    ];
    if(media[0].matches)
    {
        make_slide3(3);
    }else if (media[1].matches){
        make_slide3(2);
    }else{
        make_slide3(1);
    }
})

function make_slide3(amountSlideAppear){
    const widthLastedItemAndMargin = lastedContainer.offsetWidth/amountSlideAppear;
    
    let widthLastedAllBox = widthLastedItemAndMargin * lastedSlideItem.length;
    lastedSliders.style.width=`${widthLastedAllBox}px`
    lastedSlideItem.forEach(element =>{
        element.style="padding:0 10px";
        element.style.width=`${widthLastedItemAndMargin}px`;
    })
    //handle slide btn
    let countlasted=0;
    let spacinglasted= widthLastedAllBox - widthLastedItemAndMargin *amountSlideAppear;
    
    autoplay3=setInterval(() => {
        countlasted+=widthLastedItemAndMargin;
        if(countlasted>spacinglasted)
        {
            countlasted=0;
        }
        lastedSliders.style.transform =`translateX(${-countlasted}px)`;
        lastedSliders.style.transition="1s";
    }, 5000);
    }
// -----------------------------------------------------------------------------------------------------

// --------------------------------------------------NAVBAR-----------------------------------------------------
var navMobile=document.getElementById("nav-mobile");
var navPC=document.getElementById("navbar-pc")
window.onscroll= function()
{
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        
        document.getElementById("logo-black").style.display="block";
        navPC.style="position:fixed;left:0;right:0;background-color:white; color:black;animation:sticky ease 0.5s";
    }
    else 
    {   
        navPC.style="position:static;left:0;right:0;color:white;";
        document.getElementById("logo-black").style.display="none";
    }
}
// ------------------------------------------------------------------------------------------------

var x=document.getElementById("main");
function bodyoverflow(){
    if(x.className === 'overflow-hidden')
    {
        x.className = 'no-overflow';
    }
    else
    {
        x.className ='overflow-hidden';
    }
}
function removeoverflow(){
    x.className='no-overflow';
}
var barsiconMobile= document.getElementById("bars-mobile-icon");
var menuNav=document.getElementById("menu-nav-mobile");
var mainmenuNav=document.getElementById("main-bars-mobile");
var bodyblock=document.getElementById("body-block");


window.addEventListener("click", function(event) {
    if(event.target==menuNav){
        document.getElementById("bars-mobile").checked=  !document.getElementById("bars-mobile").checked;
        
    }
});
    
function resizePC(){
    window.open("http://127.0.0.1:5500/index.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1280,height=987");
}
function resizeTablet(){
    window.open("http://127.0.0.1:5500/index.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=993,height=987");
}
function resizeTabletxs(){
    window.open("http://127.0.0.1:5500/index.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=768,height=987");
}
function resizeMobile(){
    window.open("http://127.0.0.1:5500/index.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=450,height=987");
}
