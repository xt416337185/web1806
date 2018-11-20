var imgs=document.querySelectorAll(".show");
for(var i=0;i<imgs.length;i++){
    (function(index){
        imgs[index].onmouseenter=function(e){
            imgs[index].src=`img/superior${index+1}_h.png`;
        }
        imgs[index].onmouseleave=function(e){
            imgs[index].src=`img/superior${index+1}.png`;
        }      
    })(i)
}
