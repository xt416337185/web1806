var wrap=document.querySelector(".wrap");
    function next(){
        var newLeft;
        if(wrap.style.left==="-4800px"){
            newLeft=0;
        }else{
            newLeft=parseInt(wrap.style.left)-1200;
        }
        wrap.style.left=newLeft+"px";
    }
    // function prev(){
    //     var newLeft;
    //     if(wrap.style.left==="0px"){
    //         newLeft=-2400;
    //     }else{
    //         newLeft=parseInt(wrap.style.left)+1200;
    //     }
    //     wrap.style.left=newLeft+"px"
    // }
    var timer=null;
    function autoPlay(){
        timer=setInterval(function(){
            next();
        },1000)
    }
    autoPlay();
    var banner=document.querySelector(".banner");
    banner.onmouseenter=function(){
        clearInterval(timer);
    }
    banner.onmouseleave=function(){
        autoPlay();
    }