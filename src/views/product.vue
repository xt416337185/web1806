<template>
    <div>
        <x-header></x-header>>
        <div class="container">
            <!-- 头部导航栏 -->
            <div class="navlistwrap">
                <div class="navlist">
                    <a href="">
                        <img src="img/superior1.png" class="show" data-img="img/superior1_h.png">
                        <!-- <img src="img/superior1_h.png" class="hidden"> -->
                        <div class="navcaption">创意家居</div>
                    </a>
                    <a href="">
                        <img src="img/superior2.png" class="show" data-img="img/superior2_h.png">
                        <!-- <img src="img/superior2_h.png" class="hidden"> -->
                        <div class="navcaption">生活百货</div>
                    </a>
                    <a href="">
                        <img src="img/superior3.png" class="show" data-img="img/superior3_h.png">
                        <!-- <img src="img/superior3_h.png" class="hidden"> -->
                        <div class="navcaption">健康美容</div>
                    </a>
                    <a href="">
                        <img src="img/superior4.png" class="show" data-img="img/superior4_h.png">
                        <!-- <img src="img/superior4_h.png" class="hidden"> -->
                        <div class="navcaption">时尚配饰</div>
                    </a>
                    <a href="">
                        <img src="img/superior5.png" class="show" data-img="img/superior5_h.png">
                        <!-- <img src="img/superior5_h.png" class="hidden"> -->
                        <div class="navcaption">数码配饰</div>
                    </a>
                    <a href="">
                        <img src="img/superior6.png" class="show" data-img="img/superior_h.png">
                        <!-- <img src="img/superior6_h.png" class="hidden"> -->
                        <div class="navcaption">食品</div>
                    </a>
                    <a href="">
                        <img src="img/superior7.png" class="show" data-img="img/superior_h.png">
                        <!-- <img src="img/superior6_h.png" class="hidden"> -->
                        <div class="navcaption">获奖作品</div>
                    </a>
                </div>
            </div>
            <!-- 产品列表 -->
            <div class="bannerwrap">
                <a href="/detail" >
                    <img src="img/product/product1-1.jpg" alt="">
                </a>
            </div>
            <div class="mainpush">
                <div class="mainpush-list">
                    <a href="">
                        <img src="img/product/product1-2.jpg" alt="" class="mainpushimg">
                        <div class="plistlayout">
                            <p class="mptitle">不锈钢泡面碗</p>
                            <p class="mpthems">缤纷色彩，加大加深
                                可泡面又可用来保鲜食物，一碗多用
                                内部采用304不锈钢纸质
                                外部采用环保食品级PP材质，防滑防烫
                                盖子密封防溢、透气孔释压设计
                                透气开盖，携带方便
                                居家使用，冰箱收纳不串味
                                上班带饭，方便新鲜
                                外出野餐，快乐随行
                            </p>
                            <img src="img/product/grayarrow.png" alt="" class="mplink">
                        </div>
                    </a>
                </div>
                <div class="mainpush-list">
                    <a href="">
                        <img src="img/product/product1-3.jpg" alt="" class="mainpushimg">
                        <div class="plistlayout">
                            <p class="mptitle">柴犬系列公仔</p>
                            <p class="mpthems">舒适亲肤，触感柔软，不怕挤压
                            拒绝使用黑心棉
                            坚持选用优质棉填充
                            给您意想不到的柔软触感
                            全程微电脑控制裁床
                            进口绣花机电绣、缝纫
                            充棉饱满，精密缝口
                            </p>
                            <img src="img/product/grayarrow.png" alt="" class="mplink">
                        </div>
                    </a>
                </div>
            </div>
            <div class="maintreamwrap">
                <div class="maintream">
                    <div class="miss">
                        <a href="" class="maintreamw">
                            <img src="img/product//product1-4.jpg" alt="">
                        </a>
                        <div class="mscon">
                            <a class="mstitle">北欧风香熏</a>
                            <p class="msthems">进口香精，法国奇华顿定制。 天然萃取植物精华，淡雅清香，告别异味，舒缓身心。</p>
                            <a href="">
                                <img src="img/whitearrow.png" alt="">
                                <img src="img/graylink.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 下面视频 -->
            <div class="productvideo">
            <div class="productvid">
                <img src="img/product/play.png" alt="" class="pvplay">
                <img src="img/product/video.jpg" alt="" class="pvbg" >
                <video src="img/product/product.mp4" controls="controls"></video>
            </div>
            <x-footer></x-footer>
        </div>
    </div>
    </div>
</template>
<script>
import xHeader from "@/components/header.vue"
import xFooter from "@/components/footer.vue"
export default {
    data(){
        return{}
    },
    mounted(){
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
    },
    components:{
        xHeader,
        xFooter
    }
}
</script>
<style scoped>
.container{
    width: 1200px;
    margin:0 auto;
}
/* 产品列表 */
.mainpush{
    display: flex;
    margin:20px 0;
    flex-wrap: wrap;
}
.mainpush .mainpush-list:first-child{
    margin-right:2%
}
.mainpush .mainpush-list{
    position: relative;
    width: 49%;
    height: 591px;
    overflow: hidden;
}
.mainpush .mainpush-list .mainpushimg{
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
}
.mainpush .mainpush-list:hover  .mainpushimg{
    transform: scale(1.1)
}
.mainpush .mainpush-list .plistlayout{
    width: 211px;
    position: absolute;
    top: 80px;
    right: 64px;
}
.mainpush .mainpush-list .plistlayout .mptitle{
    width: 211px;
    font-size: 30px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.mainpush .mainpush-list .plistlayout .mpthems{
    width: 201px;
    height: 40px;
    font-size: 14px;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 16px;
}
/* 单个产品 */
.maintreamwrap{
    background-color:#f9f9f9;
    padding:91px 0 109px;
    display: flex;
    position: relative;
    
}
.maintreamwrap .maintream{
    width: 1200px;
    border-bottom:1px solid #666;
    height: 450px;
}
.maintreamwrap .miss{
    width:596px;
    height:396px;
    overflow: hidden;
    margin-bottom:50px;
    
}
.maintreamwrap .maintream  .maintreamw img{
    width: 100%;
    height: 100%;
    transition:all 0.3s linear;
}
.maintreamwrap .maintream .maintreamw img:hover{
    transform: scale(1.1)
}
.mscon{
    position: absolute;
    left:630px;
    top:180px;
    width: 326px;
}
.mscon .mstitle{
    display: block;
    width: 326px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 30px;
    color: #000;
}
.mscon .msthems{
    height: 95px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #666;
    margin-top: 20px;
}
/* 下面视频 */
.productvideo{
    width:100%;
    margin-top:20px;
}
.productvideo .productvid{
    position: relative;
    display: flex;
    width:600px;
    height:376px;
}
.productvideo .productvid .pvplay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 94px;
    height: 94px;
    z-index: 4;
    opacity: 0.7;
}
.productvideo .productvid .pvplay:hover{
    opacity:1;
}
.productvideo .productvid .pvbg{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    max-height: 100%;
}
.productvideo .productvid video{
    width:600px;
    height:376px;
}


</style>


