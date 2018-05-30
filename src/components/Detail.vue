<template>
  <div class="wrap">
    <div class="image-aboutus-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="lg-text">Unireare</h1>
            <p>Victory won't come to me unless I go to it.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" style="position: relative;">
        <div class="col-md-8 col-md-offset-2 header-bottom">
          <div class="left col-md-3 img-circle" style="float: left;">
            <!--此处为用户头像-->
            <img class="avatar avatar-lg" alt="100x100" src="https://s20.postimg.cc/wpqva9g65/100x100.jpg"/>
          </div>
          <div class="right col-md-offset-3" style="text-align: left">
            <div class=right1><p class="title" style="margin-top: 20px;">
              <!--此处为文章主题-->
              #高数高分笔记#，学霸带你学高数
            </p></div>
            <div class="right2" style="margin-right: 30px; margin-top: 20px;">
              <!--此处为昵称, 会员可显示为红色-->
              <div class="nick-name col-md-3 ">
                像一颗海草~
              </div>
              <div class="upload-time col-md-3 ">
                2018-05-26
              </div>
              <div class="pick-count upload-time  col-md-6">
                <img src="../../static/img/favorite.svg" style="width:17px;height: 17px;"/>
                <!--收藏数-->
                23
                <img src="../../static/img/comment.svg" style="width:19px;height: 17px;"/>
                <!--评论数-->
                10
                <img src="../../static/img/trade.svg" style="width:17px;height: 17px;"/>
                <!--购买数-->
                10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<hr style="height: 2px;background-color: gainsboro;margin-top:65px;"/>-->
    <div class="container">
      <div class="row col-md-8 col-md-offset-2" style="margin-top: 140px;">
        <div id="main-left">
          <div class="tabbable-panel">
            <div class="tabbable-line">
              <ul class="nav nav-tabs ">
                <li class="active">
                  <a href="#tab_default_1" data-toggle="tab">
                    笔记内容 </a>
                </li>
                <li>
                  <a href="#tab_default_2" data-toggle="tab">
                    精彩评论 </a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tab_default_1">
                  <div class="tab_content1">
                    <span class="header2">
                      <!--点一下收藏，收藏数+1-->
                      <a class="col-md-2 col-md-offset-6" @click="pick">
                        <img src="../../static/img/like1.svg" style="width:30px;height: 35px;" v-show="like"/>
                        <img src="../../static/img/like2.svg" style="width:30px;height: 35px;" v-show="!like"/>
                      </a>
                      <!--<div class="bdsharebuttonbox col-md-4">-->
                      <!--<a href="#" class="bds_more" data-cmd="more"></a>-->
                      <!--<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>-->
                      <!--<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>-->
                      <!--<a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>-->
                      <!--<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>-->
                      <!--<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>-->
                      <!--</div>-->
                      <!--<my-share ref="Share"/>-->
                    </span>
                    <span>
                      (笔记内容)谨以此游记，纪念一路上山的10人及最后走完全程的5人。尤其是要感谢走完全程的3个女生，真心的很难为她们了。谢谢你们：小媛媛，开水跟多多。还有法兰西。 全程这样安排的：周五晚上在萍乡住宿，2男四女，两间房，每人平均10块。 周六早上打车10个人花了300块钱，有些拥挤，一辆车的话180左右。
                      <br>
                      <br>
                      <!--笔记图片-->
                     <a href="#"><img
                       src="../../static/img/timg.jpg"
                       class="img-responsive"></a>
                    </span>

                  </div>
                  <div class="content-bottom">
                    <a href="支付页面">查看更多内容>>></a>
                  </div>
                  <div class="publish-comment">
                    <div class="row col-md-10 col-md-offset-1">
                      <div class="widget-area no-padding blank">

                        <form>
                          <textarea placeholder="我的评论……"></textarea>
                          <button type="submit" class="btn btn-success green" style="margin-bottom: 50px;"> 发表</button>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab_default_2">
                  <div class="tab_content1" v-for="comment in comments">
                      <span class="header2">
                        <span><img :src="comment.head"
                                   class="img-responsive" width="30px" height="30px"
                                   style="border: gainsboro 1px"> </span>
                        <span class="col-md-3 ">by:&nbsp;&nbsp;{{comment.author}} </span>
                      </span>
                    <span>
                        {{comment.text}}
                        <br>
                        <br>

                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import head from '../../static/img/head.jpg'
  // import myShare from 'src/components/share'
  export default {
    name: 'Publish',
    data() {
      return {
        comments: [{
          head: 'https://s20.postimg.cc/wpqva9g65/100x100.jpg',
          author: '评论作者昵称',
          text: '（评论内容）：  幸福似花儿开放， 年华如梦，岁月刚好！ 春日已暖， 让我们拥抱，相互问好！ 也许，你已经听到了我们的欢笑！'
        },
          {
            head: head,
            author: '评论作者昵称',
            text: '（评论内容）：  幸福似花儿开放， 年华如梦，岁月刚好！ 春日已暖， 让我们拥抱，相互问好！ 也许，你已经听到了我们的欢笑！'
          },
          {
            head: head,
            author: '评论作者昵称',
            text: '（评论内容）：  幸福似花儿开放， 年华如梦，岁月刚好！ 春日已暖， 让我们拥抱，相互问好！ 也许，你已经听到了我们的欢笑！'
          }
        ],
        like: true,
      }

    },
    methods: {
      pick: function () {
        this.like = !this.like
      }
    }

  }
  // window._bd_share_config = {
  //   "common": {
  //     "bdSnsKey": {},
  //     "bdText": "",
  //     "bdMini": "2",
  //     "bdMiniList": false,
  //     "bdPic": "",
  //     "bdStyle": "1",
  //     "bdSize": "16"
  //   }, "share": {}
  // };
  //此处一直报错
  //with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
</script>

<style scoped>
  .image-aboutus-banner {
    background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    padding-top: 110px;
    padding-bottom: 110px;
    text-align: left;
  }

  .lg-text {
    font-size: 52px;
    font-weight: 600;
    text-transform: none;
    color: #fff;
  }

  .header-bottom {
    position: absolute;
    top: -60px;
    border-bottom: 1px solid gainsboro;
    /**box-shadow: 0 1px 1px darkgray;*/
  }

  .title {
    color: white;
    font-family: "黑体", "幼圆";
    font-size: 27px;
    font-weight: bold;
  }

  .nick-name {
    color: #FF9700;
    font-family: "黑体", "幼圆";
    font-size: 16px;
  }

  .upload-time {
    color: #8c8c8c;
    font-family: "黑体", "幼圆";
    font-size: 15px;
  }

  /* 选项卡 */
  .tabbable-panel {
    border: 2px solid #eee;
    padding: 10px;
  }

  .tabbable-line > .nav-tabs {
    border: none;
    margin: 0px;
  }

  .tabbable-line > .nav-tabs > li {
    margin-right: 2px;
  }

  .tabbable-line > .nav-tabs > li > a {
    border: 0;
    margin-right: 0;
    color: #737373;
  }

  .tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {
    border-bottom: 4px solid #fbcdcf;
  }

  .tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {
    border: 0;
    background: none !important;
    color: rgba(255, 102, 51, 0.8);
  }

  .tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {
    margin-top: 0px;
  }

  .tabbable-line > .nav-tabs > li.active {
    border-bottom: 4px solid #f3565d;
    position: relative;
  }

  .tabbable-line > .nav-tabs > li.active > a {
    border: 0;
    color: rgba(255, 102, 51, 0.8);
  }

  .tabbable-line > .tab-content {
    margin-top: -3px;
    background-color: #fff;
    border: 0;
    border-top: 1px solid #eee;
    padding: 15px 0;
  }

  .portlet .tabbable-line > .tab-content {
    padding-bottom: 0;

  }

  .tab_content1 {
    width: 100%;
    margin-top: 20px;
    border-bottom: 2px #EEEEEE solid;
  }

  .tab_content1 > .header2 {
    display: block;
    height: 40px;
    position: relative;
  }

  .tab_content1 > span > span {
    display: block;
    float: left;
  }

  .tab_content1 > span > span:first-child {

    margin-left: 20px;
  }

  .tab_content1 > span > span:nth-child(2) {
    line-height: 30px;
    color: rgba(204, 0, 51, 1);
    font-size: 12px;
    font-family: "幼圆";
    font-weight: 600;

  }

  .tab_content1 > span > span:nth-child(2) > a {
    color: #FF9017;
    text-decoration: none;
    font-size: 18px;
    font-family: "幼圆";
  }

  .tab_content1 > span > span:nth-child(2) > a:hover {
    text-decoration: underline;
  }

  .tab_content1 > span > span:last-child {
    text-align: center;
    position: absolute;
    top: 0;
    left: 50px;
  }

  .tab_content1 > span > span:last-child > a {
    display: block;
    height: 30px;
    /*background: url(../../static/img/favorite.svg);*/
  }

  .tab_content1 > span:last-child {
    display: block;
    margin-top: 10px;
    color: #747474;
    font-size: 16px;
    text-align: left;
  }

  .content-bottom {
    margin-top: 20px;
    height: 50px;
    font-size: 20px;

  }

  .content-bottom > a {
    color: #f3565d;
    font-family: "幼圆";
    font-weight: bold;
  }

  .widget-area.blank {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
  }

  /*body .no-padding {*/
  /*padding: 0;*/
  /*}*/
  .widget-area {
    background-color: rgba(148, 148, 148, 0.29);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    margin-top: 50px;
    padding: 25px 30px;
    position: relative;
  }

  .widget-area form textarea {
    background: none repeat scroll 0 0 #fff;
    border: medium none;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    -ms-border-radius: 4px 4px 0 0;
    -o-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
    color: #777777;
    float: left;
    font-family: Lato;
    font-size: 14px;
    height: 142px;
    letter-spacing: 0.3px;
    padding: 20px;
    width: 100%;
    resize: vertical;
    outline: none;
    border: 1px solid #F2F2F2;
  }

  .widget-area form button {
    border: medium none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    float: right;
    font-family: Lato;
    font-size: 14px;
    letter-spacing: 0.3px;
    margin-right: 9px;
    margin-top: 9px;
    padding: 6px 15px;
  }
  @media (min-width: 768px){
    .avatar-lg {
      width: 70px;
      height: 70px;
    }
  }
  .avatar-lg {
    width: 100px;
    height: 100px;
  }
  .avatar {
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,.25);
    box-shadow: 0 0 0.5em rgba(0,0,0,.25);
  }

</style>
