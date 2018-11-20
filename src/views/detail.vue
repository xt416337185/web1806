<template>
    <div>
        <x-header></x-header>
        <div class="container">
            <!-- 上面大图 -->
            <div class="detail-banner">
                <img src="img/detail/product1.jpg" alt="">
                <div class="detail-header">
                    <h2>牛皮纸拉链卡包</h2>
                    <p class="detail-message">
                        环保牛皮纸材质，外观复古时尚<br>
                        简约大方，彰显品味<br>
                        做工精致细腻，采用优质五金拉链，顺滑不卡齿<br>
                        咬合紧密，经久耐用<br>
                        选用高韧度尼龙线，以高精度机器加固缝制而成<br>
                        结实耐用，不易断裂<br>
                        多卡位设计，小身材大容量<br>
                        能容纳更多的银行卡，轻松便捷<br>
                    </p>
                    <div class="detail-share">
                        <p>分享给朋友</p>
                        <a href="">
                            <img src="img/whiteweibo.png">
                        </a>
                        <a href="">
                            <img src="img/whiteqq.png">
                        </a>
                    </div>
                </div>
            </div>
            <!-- 产品详情 -->
            <div class="product-detail">
                <div class="product-title">Produce Detials</div>
                <div class="detail-tag">产品详情</div>
                <div class="detail-img">
                    <p>
                        <img src="img/detail/product1-2.jpg" alt="">
                    </p>
                    <p>
                        <img src="img/detail/product1-3.jpg" alt="">
                    </p>
                    <p>
                        <img src="img/detail/product1-4.jpg" alt="">
                    </p>
                    <p>
                        <img src="img/detail/product1-5.jpg" alt="">
                    </p>
                    <p>
                        <img src="img/detail/product1-6.jpg" alt="">
                    </p>
                </div>
            </div>
        </div>
        <x-footer></x-footer>
    </div>
</template>
<script>
import xHeader from '@/components/header.vue'
import xFooter from '@/components/footer.vue'
export default {
    data(){
        return{}
    },
    compoent:{
        xHeader,
        xFooter
    }
}
</script>
<style scoped>

.container{
    width:1200px;
    margin:0 auto;
}
/* 上面大图 */
.detail-banner{
    position: relative;
}
.detail-header{
    width: 310px;
    height: 504px;
    position: absolute;
    top: 70px;
    right: 113px;
}
.detail-header h2{
    color:#fff;
    font-size: 36px;
    width: 100%;
    text-align: center;
}
.detail-header .detail-message{
    width: 100%;
    height: 356px;
    overflow: hidden;
    font-size: 14px;
    color: #fff;
    line-height: 24px;
    margin-top: 30px;
    text-align: center;
}
.detail-share{
    width: 100%;
    color:#fff;
    border-top:1px solid #fff;
    padding-top:10px;
}
.detail-share p{
    margin-bottom:10px;
}
.detail-share a{
    text-decoration: none;
    margin-right:20px; 
}
/* 产品详情 */
.product-detail{
    margin:100px 0 60px
}
.product-title{
    font-size: 36px;
    color: #ddd;
    text-align: center;
}
.detail-tag{
    font-size: 36px;
    color: #000;
    text-align: center;
    margin-bottom:20px;
}
.detail-img{
    width:80%;
    margin:0 auto;
}
.detail-img img{
    width: 100%;
    display: block;
}
</style>


