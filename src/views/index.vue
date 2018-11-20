<template>
    <div>
        <x-header></x-header>
        <div class="contanier">
            <!-- 轮播图 -->
            <div class="banner">
                <div class="wrap" id="bannercontent" style="left:0px">
                    <div class="banner-list">
                        <a href="#"><img src="img/banner1.jpg" alt=""></a>
                    </div>
                    <div class="banner-list">
                        <a href="#"><img src="img/banner2.jpg" alt=""></a>
                    </div>
                    <div class="banner-list">
                        <a href="#"><img src="img/banner3.jpg" alt=""></a>
                    </div>
                    <div class="banner-list">
                        <a href="#"><img src="img/banner4.jpg" alt=""></a>
                    </div>
                    <div class="banner-list">
                        <a href="#"><img src="img/banner5.jpg" alt=""></a>
                    </div>
                </div>
                <div class="banner1">
                    <span class="swiper-pagination-switch swiper-active-switch"></span>
                    <span class="swinner"></span>
                    <span class="swiper-pagination-switch"></span>
                    <span class="swinner"></span>
                    <span class="swiper-pagination-switch"></span>
                    <span class="swinner"></span>
                    <span class="swiper-pagination-switch"></span>
                    <span class="swinner"></span>
                    <span class="swiper-pagination-switch"></span>
                    <span class="swinner"></span>
                    <span  class="swiper-pagination-switch"></span>
                </div>
            </div>
            <!-- 品牌简介投资政策 -->
            <div class="container-brand">
                <div class="brand">
                    <a href="#">
                        <img src="img/brandconcept.jpg" alt="">
                        <p>品牌简介</p>
                    </a>
                </div>
                <div class="c-invest">
                    <div class="invest">
                        <p class="title-invest">投资政策</p>
                        <p class="investor">特许商标使用金、货品保证金、装修预付金；每天营业额按比例分成，第二天到账...</p>
                        <div class="learn">
                            <a href="#">
                                <img src="img/graylink.png" alt="">
                                <img src="img/whitearrow.png" alt="">
                            </a>
                        </div>
                    </div>
                    <a href="" class="map">
                        <img src="img/distributor.jpg" alt="">
                        <div class="distributor">全球店铺分布</div>
                    </a>
                </div>
            </div>
            <!-- 优选好品 -->
            <div class="subnav">
                <div class="basetitle">优选好品</div>
            </div>
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
                </div>
            </div>
            <!-- 产品列表 -->
            <div class="subnavproducts">
                <div class="subproducts">
                    <a href="" class="productswrap">
                        <div class="subproductsimg">
                            <img src="img/detail1.jpg" alt="">
                        </div>
                        <h3 class="productstitle">小M小夜灯</h3>
                        <div class="productsexplain">
                            MINISO挪威设计师团队Permafrost原创设计
                            Permafrost四人组毕业于Oslo School of Architecture（挪威排名前三的设计学院）
                            为阿迪达斯等品牌设计过产品
                            现为MINISO服务
                            简约、实用、人性化的设计
                            秉承北欧设计理念
                            简约流畅的线条
                            纯净的米白
                            不受限的恒久品味   
                        </div>
                    </a>
                    <a href="" class="productswrap">
                        <div class="subproductsimg">
                            <img src="img/detail2.jpg" alt="">
                        </div>
                        <h3 class="productstitle">不锈钢泡面碗</h3>
                        <div class="productsexplain">
                            缤纷色彩，加大加深
                            可泡面又可用来保鲜食物，一碗多用
                            内部采用304不锈钢纸质
                            外部采用环保食品级PP材质，防滑防烫
                            盖子密封防溢、透气孔释压设计
                            透气开盖，携带方便
                            居家使用，冰箱收纳不串味
                            上班带饭，方便新鲜
                            外出野餐，快乐随行 
                        </div>
                    </a>
                    <a href="" class="productswrap">
                        <div class="subproductsimg">
                            <img src="img/detail3.jpg" alt="">
                        </div>
                        <h3 class="productstitle">柴犬系列公仔</h3>
                        <div class="productsexplain">
                            舒适亲肤，触感柔软，不怕挤压
                            拒绝使用黑心棉
                            坚持选用优质棉填充
                            给您意想不到的柔软触感
                            全程微电脑控制裁床
                            进口绣花机电绣、缝纫
                            充棉饱满，精密缝口 
                        </div>
                    </a>
                    <a href="" class="productswrap">
                        <div class="subproductsimg">
                            <img src="img/detail4.jpg" alt="">
                        </div>
                        <h3 class="productstitle">柴犬系列公仔</h3>
                        <div class="productsexplain">
                            一线品牌商供应商“奇华顿”原料合作
                            180年悠久历史的香料王国
                            DIOR、CHANEL、GUCCI等品牌的香料供应商
                            天然萃取植物精华
                            5款清香舒适怡人
                            淡雅清香，告别异味，舒缓身心
                            简约北欧风格，为家居增添优雅
                        </div>
                    </a>
                </div>
            </div>
            <!-- 新闻列表 -->
            <div class="subnav">
                <div class="basetitle">新闻列表</div>
            </div>
            <div class="newscontent">
            <div class="newslist">
                <a href="">
                    <img src="img/news1.jpg">
                </a>
                <h3>致歉函</h3>
                <div class="newsthems">
                    <a href="">广东葆扬投资管理有限公司向漫画家白关先生致歉。</a>
                </div>
            </div>
            <div class="newslist">
                <a href="">
                    <img src="img/news2.png" alt="">
                </a>
                <h3>2018年秋季广交会开幕，名创优品全新形象亮相</h3>
                <div class="newsthems">
                    <a href="">2018年10月23日，第124届中国贸易进出口交易会（简称2018年秋季广交会）第二期于广州市琶洲国际会展中心盛大举行。</a>
                </div>
            </div>
            <div class="newslist">
                <a href="">
                    <img src="img/news3.jpg" alt="">
                </a>
                <h3>
                    名创优品获腾讯与高瓴资本10亿战略投资
                </h3>
                <div class="newsthems">
                    <a href="">今日（9月30日），知名零售企业名创优品宣布与腾讯和高瓴资本签署关于合共10亿元人民币的战略投资协议。</a>
                </div>
            </div>
        </div>
        <x-footer></x-footer>
    </div>
    </div>
</template>
<script>
import xHeader from '@/components/header.vue'
import xFooter from '@/components/footer.vue'
export default {
    data(){
        return{}
    },
    mounted(){
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
/* 轮播图 */
.banner{
    width: 1200px;
    height: 700px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.wrap{
    width: 7200px;
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    transition: 0.3s;
}
.banner-list{
    position:relative;
}
.banner1{
    z-index: 10;
    display: flex;
}
.banner-index{
    z-index: 10;
}
.banner1{
    bottom: 30px;
    position: absolute;
    z-index: 99;
    left: 42%;
}
.banner1 .swiper-pagination-switch{
    background: #fff;
    margin: 0 30px 0 0;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
}
.banner1 .swinner{
    width: 23px;
    display: inline-block;
    border-top: 1px dashed #fff;
    margin: 3px 9px 3px -20px;
}
.banner1 .swiper-active-switch{
    background: #d9232e;
    border: 10px solid #da958e;
    border-radius: 50%;
    margin: 0 15px -10px 0;
}
/* 品牌简介 */
.container-brand{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    margin-top:20px;
}
.brand{
    position: relative;
    width: 600px;
    height: 700px;
    margin-right:20px;
}
.brand a{
    width: 600px;
    height: 700px;
    display: block;
}
.brand p{
    color:#fff;
    position: absolute;
    font-size: 48px;
    top:38px;
    right:47px;
}
.brand a:hover p{
    color:#d9232e;
}
/* 投资政策 */
.c-invest{
    display: flex;
    width: 580px;
    flex-wrap: wrap;
}
.c-invest .invest{
    width: 580px;
    height:340px;
    border:1px solid #d4d4d4;
} 
.c-invest .invest .title-invest{
    margin-top:76px;
    text-align: center;
    color:#222;
    font-size: 48px;
}
.c-invest .invest .investor{
    width:293px;
    margin:19px auto 38px;
    font-size:14px;
    line-height: 24px;
    height: 44px;
}
.c-invest .invest .learn a{
    display: block;
    width: 178px;
    height: 45px;
    margin: 0 auto;
}
.c-invest .map{
    display: block;
    width: 580px;
    height: 340px;
    margin-top:20px;
    position: relative;
}
.c-invest .map .distributor{
    width: 300px;
    height: 80px;
    position: absolute;
    font-size:48px;
    color:#fff;
    border-top:3px solid #fff;
    border-bottom:3px solid #fff;
    line-height: 80px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin:auto;
}
.c-invest .map:hover .distributor{
    color:#d9232e;
    border-top:3px solid #d9232e;
    border-bottom:3px solid #d9232e;
}
/* 优选好品 */
.subnav{
    width: 1200px;
    margin:79px auto 0;;
}
/*优选好品列表*/

/* 产品列表 */
.subnavproducts{
    width: 1200px;
    margin: 23px auto 0;
    display: flex;
}
.subproducts{
    width: 100%;
}
.subnavproducts .subproducts .productswrap{
    display: block;
    width: 25%;
    float:left;
    text-decoration: none;
    color:#666;
    
}
.subproductsimg{
    width:100%;
    height: 236px;
    position: relative;
}
.subproductsimg img{
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.subnavproducts .subproducts .productswrap .productstitle{
    font-size: 24px;
    color: #333;
    width: 100%;
    text-align: center;
    margin-top: 17px;
}
.subnavproducts .subproducts .productswrap .productsexplain{
    width: 143px;
    margin: 19px auto 33px;
    height: 44px;
    font-size: 14px;
    color: #666;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
/* 列表悬停图片放大字体颜色改变 */
.subnavproducts .subproducts .productswrap:hover .productstitle{
    color:#d9232e;
}
/* 新闻列表 */
.newscontent{
    width: 1200px;
    margin: 79px auto 0;
    display: flex;
}
.newscontent .newslist{
    width: 380px;
    margin-right:30px;
}
.newscontent .newslist a{
    display: block;
}
.newscontent .newslist h3{
    width: 359px;
    font-size: 18px;
    color: #333;
    line-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 31px;
    margin-top:30px;
}
.newscontent .newslist .newsthems{
    width: 344px;
    height: 76px;
    margin: 18px 0 42px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.newscontent .newslist .newsthems a{
    width: 100%;
    height: 76px;
    font-size: 14px;
    color: #666;
    line-height: 24px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
}
.newscontent .newslist:hover h3{
    color:#d9232e;
}



</style>


