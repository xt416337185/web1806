<template>
    <div class="nav">
        <div class="nav-logo">
            <img src="img/logo.png">
        </div>
        <div class="nav-right">
            <div class="language">
                <div class="language-ch">
                    <a class="language-item">简体</a>
                    <img src="img/rednext.png">
                    <ul class="language-list">
                        <li><a href="#">Enlish</a></li>
                        <li><a href="#">日本语</a></li>
                        <li><a href="#">繁體中文</a></li>
                    </ul>
                </div>
            </div>
            <div class="pc-nav">
                <ul class="nav-list">
                    <li class="nav1">
                        <a href="/">首页</a>
                    </li>
                    <li class="nav2">
                        <a href="">品牌</a>
                        <div class="nav2-list">
                            <a href="">品牌简介</a>
                            <a href="">创始人</a>
                            <a href="">发展历程</a>
                            <a href="">设计师团队</a>
                        </div>
                    </li>
                    <li class="nav3">
                        <a href="">产品</a>
                        <div class="nav3-list">
                            <a href="/product">创意家居</a>
                            <a href="">生活百货</a>
                            <a href="">健康美容</a>
                            <a href="">时尚配饰</a>
                            <a href="">数码配饰</a>
                            <a href="">食品</a>
                            <a href="">获奖作品</a>
                        </div>
                    </li>
                    <li class="nav4">
                        <a href="">新闻</a>
                        <div class="nav4-list">
                            <a href="">集团咨询</a>
                            <a href="">媒体报道</a>
                            <a href="">焦点动态</a>
                            <a href="">名声在外</a>
                        </div>
                    </li>
                    <li class="nav5">
                        <a href="">店铺</a>
                        <div class="nav5-list">
                            <a href="">全球店铺分布</a>
                            <a href="">店铺投资政策</a>
                            <a href="">店铺开业视频</a>
                        </div>
                    </li>
                    <li class="nav6">
                        <a href="">联系</a>
                        <div class="nav6-list">
                            <a href="">合作机会</a>
                            <a href="">供应商频道</a>
                            <a href="">人才招聘</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"xHeader",
    data(){
        return {}
    }
}
</script>
<style scoped>
.nav{
    width: 1200px;
    height: 127px;
    display: flex;
    border-top:3px solid #d10709;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;
    padding-top:27px;
}
.nav .pc-nav{
    margin-top:19px;
}
.nav .pc-nav .nav-list{
    display: flex;
    list-style: none;
}
/* 语言选择 */
.nav .nav-right .language .language-ch{
    float:right;
}
.nav .nav-right .language::after{
    content: "";
    display: block;
    clear: both;
}
.nav .nav-right .language .language-ch{
    width: 73px;
    height: 18px;
    border-bottom: 1px solid #ccc;
    position: relative;
    padding-bottom: 6px;
}
.nav .nav-right .language .language-ch .language-item{
    width: 73px;
    font-size: 12px;
    color: #666;
    border: 0;
    outline: none;
    padding-left: 12px;
}
.nav .nav-right .language-list{
    display: none;
}

/* 导航栏 */
.nav .pc-nav .nav-list li{
    margin-right:53px;
    padding-bottom:20px;
    position: relative;
    
}
.nav .pc-nav .nav-list li:hover{
    border-bottom:2px solid #d10709;
}   
.nav .pc-nav .nav-list li:hover>a{
    color:#d10709;
}
.nav .pc-nav .nav-list .nav6{
    margin-right:0;
}
.nav .pc-nav .nav-list li>a{
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color:#333;
}

.nav .pc-nav .nav-list div{
    display: none; 
    top:44px;
    left:-67px;
    position: absolute;
    width: 172px;
    background:#fff;
}
.nav .pc-nav .nav-list li div a{
    font-size:14px;
    text-decoration: none;
    color:#333;
    background-color:#fff;
    width: 100%;
    line-height: 42px;
    text-align: center;
    display:block;
    font-weight: bold;
}
/* 鼠标悬停div显示 */
.nav .pc-nav .nav-list li:hover div{
    display: block;
    z-index: 5;
}
/* 鼠标悬停a标签改背景字体颜色 */
.nav .pc-nav .nav-list li div a:hover{
    display: block;
    background-color:#d10709;
    color:#fff;
}

</style>