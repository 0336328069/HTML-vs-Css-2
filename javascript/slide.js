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
        console.log(positionX);
        console.log(index)
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
    console.log(window.innerWidth);
    window.addEventListener("resize",function(){
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
        element.style.width=`${widthItemAndMargin - 20}px`;
    })
    //handle slide btn
    let count=0;
    let spacing= widthAllBox - widthItemAndMargin *amountSlideAppear;
    
    setInterval(() => {
        
        count+=widthItemAndMargin;
        if(count>spacing)
        {
            count=0;
        }
        sliders.style.transform =`translateX(${-count}px)`;
        sliders.style.transition="1s";
        console.log(count);
    }, 5000);
        slicknextBtn.addEventListener("click",function(){
            count += widthItemAndMargin;
            if(count>spacing)
            {
                count=0;
            }
            sliders.style.transform =`translateX(${-count}px)`
            sliders.style.transition="1s";
            console.log(count);
        })
        slickprevBtn.addEventListener("click",function(){
            count -= widthItemAndMargin;
            if(count<0)
            {
                count=spacing;
            }
            sliders.style.transform =`translateX(${-count}px)`
            sliders.style.transition="1s";
            console.log(count);
        })
    }
// --------------------------------------------------slider comment-----------------------------------------------
const commentContainer =document.querySelector(".mgi__clients-comment__container");
const commentSliders=document.querySelector(".mgi__clients-comment__slider");
const commentSlideItem=document.querySelectorAll(".mgi__clients-comment__slider-item");

document.addEventListener("DOMContentLoaded",function(){
    console.log(window.innerWidth);
    window.addEventListener("resize",function(){
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
        element.style.marginRight='20px';
        element.style.width=`${widthCommentItemAndMargin - 20}px`;
    })
    //handle slide btn
    let countcomment=0;
    let spacingcomment= widthCommentAllBox - widthCommentItemAndMargin *amountSlideAppear;
    
    setInterval(() => {
        countcomment+=widthCommentItemAndMargin;
        if(countcomment>spacingcomment)
        {
            countcomment=0;
        }
        commentSliders.style.transform =`translateX(${-countcomment}px)`;
        commentSliders.style.transition="1s";
        console.log(countcomment);
    }, 5000);
    }

// ---------------------------------------LastestNews Slider-----------------------------------------------------
const lastedContainer =document.querySelector(".mgi__lasted-news__container");
const lastedSliders=document.querySelector(".mgi__lasted-news__slider");
const lastedSlideItem=document.querySelectorAll(".mgi__lasted-news__slider-item");

document.addEventListener("DOMContentLoaded",function(){
    console.log(window.innerWidth);
    window.addEventListener("resize",function(){
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
        element.style.marginRight='20px';
        element.style.width=`${widthLastedItemAndMargin - 20}px`;
    })
    //handle slide btn
    let countlasted=0;
    let spacinglasted= widthLastedAllBox - widthLastedItemAndMargin *amountSlideAppear;
    
    setInterval(() => {
        countlasted+=widthLastedItemAndMargin;
        if(countlasted>spacinglasted)
        {
            countlasted=0;
        }
        lastedSliders.style.transform =`translateX(${-countlasted}px)`;
        lastedSliders.style.transition="1s";
        console.log(countlasted);
    }, 5000);
    }
// -----------------------------------------------------------------------------------------------------
// const notslides = document.querySelector(".mgi__clients-comment__img");
// const notslideritem= document.querySelectorAll(".mgi__clients-comment__img-item");
// document.addEventListener("DOMContentLoaded",function(){
//     console.log(window.innerWidth);
//     window.addEventListener("resize",function(){
//         if(window.innerWidth >=1280)
//         {
//             make_no_slide2(7);
//         }
//         else if(window.innerWidth >=992){
//             make_no_slide2(5);
//         }
//         else if(window.innerWidth >= 768){
//             make_no_slide2(3);
//         }
//         else {
//             make_no_slide2(2);
//         }
//     });
    
//     const media = [
//         window.matchMedia('min-width:1280px'),
//         window.matchMedia('(min-width:992px)'),
//         window.matchMedia('(min-width:768px)')
//     ];
//     if(media[0].matches)
//     {
//         make_no_slide2(7);
//     }else if (media[1].matches){
//         make_no_slide2(5);
//     }else if(media[2].matches)
//     {
//         make_no_slide2(3);
//     }else{
//         make_no_slide2(2);
//     }
// })

// function make_no_slide2(amountSlideAppear){
//     const widthImageItemAndMargin = commentContainer.offsetWidth/amountSlideAppear;
    
//     let widthImageAllBox = widthImageItemAndMargin * notslideritem.length;
//     notslides.style.width=`${widthImageAllBox}px`
//     notslideritem.forEach(element =>{
//         element.style.marginRight='20px';
//         element.style.width=`${widthImageItemAndMargin - 20}px`;
//     })
//     }
