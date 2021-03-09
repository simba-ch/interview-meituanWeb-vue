<template>
  <div class="index">
    <div class="index-container center">
      <div class="banner-container cf">
        <div class="left-banner">
          <div class="category-nav-container">
            <div class="category-nav-title-wrapper">
              <div class="category-nav-title">全部分类</div>
            </div>
            <div class="category-nav-content-wrapper">
              <ul>
                <li
                  class="nav-li"
                  v-for="(type, name, index) in typeList"
                  :key="index"
                  @mouseenter="enter(type)"
                  @mouseleave="leave()"
                >
                  <i class="iconfontNew hc-icon-foodNew" :class="typeIcos[name]">
                    <span class="nav-text-wrapper">
                      <span>
                        <a href="javascript:;" class="link nav-text">
                          {{ name
                          }}<span class="nav-promotion" v-if="name === '酒店'"
                            >HOT</span
                          >
                        </a>
                      </span>
                    </span>
                    <i class="nav-right-arrow"></i>
                  </i>
                </li>
              </ul>
            </div>
            <div
              class="category-nav-detail-wrapper"
              v-if="active"
              @mouseenter="enterAside()"
              @mouseleave="leave()"
            >
              <div class="category-nav-detail">
                <div
                  class="detail-area"
                  v-for="(type, index) in currentAside"
                  :key="index"
                >
                  <div v-for="(arr, name) in type" :key="name">
                    <div class="detail-title-wrapper cf">
                      <h2>
                        <a href="javascript:;" class="link detail-title">{{
                          name
                        }}</a>
                        <a href="javascript:;" class="link detail-more">
                          更多
                          <i class="detail-right-arrow"></i>
                        </a>
                      </h2>
                    </div>
                    <div class="detail-content">
                      <a
                        href="javascript:;"
                        class="link detail-text"
                        v-for="item in arr"
                        :key="item"
                        >{{ item }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-banner">
          <div class="home-header-links">
            <a href="javascript:;" class="link waimai-link">美团外卖</a>
            <a href="javascript:;" class="link maoyan-link">猫眼电影</a>
            <a href="javascript:;" class="link hotel-link">美团酒店</a>
            <a href="javascript:;" class="link homestay-link">民宿/公寓</a>
            <a href="javascript:;" class="link merchant-link">商家入驻</a>
            <a href="javascript:;" class="link gongyi-link">美团公益</a>
          </div>
          <div class="banner-row cf">
            <div class="item banner-slider shadow position-relative">
              <img :src="currentImg" />
              <div class="slider-pagination">
                <div
                  class="pagination"
                  v-for="(image, index) in bannerList"
                  :key="index"
                  :class="[currentIndex === index ? 'active' : '']"
                  @click="changeIndex(index)"
                  @mouseenter="changeIndex(index)"
                ></div>
              </div>
              <div class="btn btn-next" @click="changeIndex(++currentIndex)">
                <i class="icofont iconfont">&#xe60d;</i>
              </div>
              <div class="btn btn-pre" @click="changeIndex(--currentIndex)">
                <i class="icofont iconfont">&#xe60d;</i>
              </div>
            </div>
            <a href="javascript:;">
              <img
                class="item shadow pic-1"
                src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg;"
              />
            </a>
            <div class="item banner-logincard">
              <div style="float: left">
                <div class="login-container">
                  <div class="default" v-if="userName === ''">
                    <div class="head-img-row">
                      <img
                        src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                        alt=""
                      />
                    </div>
                    <p class="user-name">Hi！你好</p>
                    <router-link class="btn-login" :to="{ name: 'Register' }"
                      >注册</router-link
                    >
                    <router-link class="btn-login" :to="{ name: 'Login' }"
                      >立即登录</router-link
                    >
                  </div>
                  <div class="default" v-if="userName !== ''">
                    <div class="setting">
                      <div class="icon"><i class="icofont">&#xe60d;</i></div>
                    </div>
                    <div class="head-img-row">
                      <img
                        src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
                        alt=""
                      />
                    </div>
                    <div class="nickname-row">
                      <p class="user-name">{{ userName }}</p>
                      <i
                        class="icofont iconfont iconfont_level icon-lable_level_2"
                        >&#xe60d;</i
                      >
                    </div>
                    <div class="fn-row cf">
                      <div class="fn-item">
                        <a href="javascript:;">
                          <div class="ico">
                            <i class="icofont iconfont">&#xe60d;</i>
                          </div>
                          <p class="fn-name">我的订单</p>
                        </a>
                      </div>
                      <div class="fn-item">
                        <a href="javascript:;">
                          <div class="ico">
                            <i class="icofont iconfont">&#xe60d;</i>
                          </div>
                          <p class="fn-name">我的收藏</p>
                        </a>
                      </div>
                      <div class="fn-item">
                        <a href="javascript:;">
                          <div class="ico">
                            <i class="icofont iconfont">&#xe60d;</i>
                          </div>
                          <p class="fn-name">抵用券</p>
                        </a>
                      </div>
                    </div>
                    <div class="fn-row cf">
                      <div class="fn-item">
                        <a href="javascript:;">
                          <div class="ico">
                            <i class="icofont iconfont">&#xe60d;</i>
                          </div>
                          <p class="fn-name">余额</p>
                        </a>
                      </div>
                      <div class="fn-item">
                        <a href="javascript:;">
                          <div class="ico">
                            <i class="icofont iconfont">&#xe60d;</i>
                          </div>
                          <p class="fn-name">更多</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-row cf">
            <img
              class="item pic-2 shadow"
              src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
              alt=""
            />
            <img
              class="item pic-3 shadow"
              src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
              alt=""
            />
            <img
              class="item pic-4 shadow"
              src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
              alt=""
            />
            <div class="item download-app">
              <div class="qrcode-box">
                <img
                  src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                  alt=""
                />
              </div>
              <p class="app-name">美团APP手机版</p>
              <p class="s1">
                <span class="red">1元起</span><span class="gary">吃喝玩乐</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Frame
        top-bar="maoyan-container"
        content="scenes-body"
        bg-color="bg-red"
        :list="movieList"
        :nav="movie"
        who="movie"
        @change-list="changeList"
      >
        <div class="slider">
          <div class="slider-content cf" :style="currentPosition">
            <div
              class="slider-item-film"
              v-for="(item, index) in currentMovieList"
              :key="index"
            >
              <a href="javascript:;">
                <img :src="item.img" />
                <img
                  class="film-mark"
                  v-if="item.mark"
                  :src="item.mark"
                  alt=""
                />
                <div class="film-info">
                  <p class="film-score">
                    <b v-if="item.score">
                      观众评
                      <span>{{ item.score }}</span>
                    </b>
                    <b v-if="item.want">
                      <span>{{ item.want }}</span>
                      人想看
                    </b>
                  </p>
                  <p class="film-name">{{ item.name }}</p>
                  <span class="buy-ticket" v-if="item.ticket">
                    {{ item.type === "hot" ? "购票" : "预售" }}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div
            class="btn btn-next"
            style="right: 0px"
            @click="changePosition('-1165px')"
          >
            <i class="icofont iconfont icon-btn_right">&#xe60d;</i>
          </div>
          <div
            class="btn btn-pre"
            style="left: 0px"
            @click="changePosition('0px')"
          >
            <i class="icofont iconfont icon-btn_left">&#xe60d;</i>
          </div>
        </div>
      </Frame>
      <Frame
        top-bar="zhenguo-container"
        content="minsu-ls-view cf"
        bg-color="bg-orange"
        :list="hotelList"
        :nav="hotel"
        who="hotel"
        @change-list="changeList"
      >
        <div class="products">
          <div
            class="minsu-item"
            v-for="(item, index) in currentHotelList"
            :key="index"
          >
            <a href="javascript:;">
              <div class="product-card-header">
                <img :src="item.productUrl" class="product-img" />
                <img :src="item.headUrl" class="head-img" />
              </div>
              <div class="product-info">
                <p class="product-title">
                  {{ item.title }}
                </p>
                <p class="sub-title">
                  <span class="residence">{{ item.residence }}</span>
                  <span class="person">{{ item.person }}</span>
                  <span>{{ item.addr }}</span>
                </p>
                <p class="price-number numfont price">
                  <span class="price-icon">￥</span>
                  {{ item.price }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </Frame>
      <Frame
        top-bar="recommend-container"
        content="recommend-list"
        bg-color="bg-blue"
        :list="recommendList"
        :nav="recommend"
      >
        <a
          href="javascript:;"
          class="link link recommend-item"
          v-for="(item, index) in currentrecommendList"
          :key="index"
        >
          <div class="card-container">
            <div data-v-b2d47ae8="" class="recommend-card-wrapper">
              <div data-v-b2d47ae8="" class="img-box">
                <img data-v-b2d47ae8="" :src="item.imgUrl" class="image" />
              </div>
              <div data-v-b2d47ae8="" class="info-box">
                <div data-v-b2d47ae8="" class="title">{{ item.title }}</div>
                <div data-v-b2d47ae8="" class="score-line">
                  <div data-v-b2d47ae8="" class="score">
                    <div data-v-b2d47ae8="" class="rate-stars">
                      <ul
                        data-v-b2d47ae8=""
                        class="rate-stars-ul rate-stars-dark"
                      >
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                      </ul>
                      <ul
                        data-v-b2d47ae8=""
                        class="rate-stars-ul rate-stars-light"
                        :style="{ width: item.score * 10 + '%' }"
                      >
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                        <li data-v-b2d47ae8="">
                          <i data-v-b2d47ae8="" class="icofont"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div data-v-b2d47ae8="" class="comment-number">
                    {{ item.commentNum }}个评论
                  </div>
                </div>
                <div data-v-b2d47ae8="" class="desc-line">
                  <div data-v-b2d47ae8="" class="desc">{{ item.areaName }}</div>
                </div>
                <div data-v-b2d47ae8="" class="bottom-line">
                  <div data-v-b2d47ae8="" class="price-box">
                    <span data-v-b2d47ae8=""
                      ><span data-v-b2d47ae8="" class="yuan">￥</span
                      ><span data-v-b2d47ae8="" class="price-number numfont">{{
                        item.lowPrice
                      }}</span
                      ><span data-v-b2d47ae8="" class="price-desc"
                        >起</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Frame>
    </div>
  </div>
</template>


<script>
import Frame from "@/components/FRAME.vue";
export default {
  beforeCreate() {
    this.$store.commit("changeDerivatives", "index");
    this.$store.commit("changeNavDisplay", "");
    this.$store.commit("incrementBottom", "index");
  },
  mounted() {
    this.interval();
  },
  data() {
    return {
      typeList: {
        美食: [
          {
            美食: [
              "代金券",
              "甜点饮品",
              "火锅",
              "自助餐",
              "小吃快餐",
              "日韩料理",
              "西餐",
              "聚餐宴请",
              "烧烤烤肉",
              "东北菜",
              "川湘菜",
              "江浙菜",
              "香锅烤鱼",
              "粤港菜",
              "中式烧烤/烤串",
              "西北菜",
              "咖啡酒吧茶馆",
              "云贵菜",
              "东南亚菜",
              "海鲜",
              "素食",
              "台湾/客家菜",
              "创意菜",
              "汤/粥/炖菜",
              "蒙餐",
              "新疆菜",
              "其他美食",
              "京菜鲁菜",
            ],
          },
        ],
        外卖: [{ 外卖: ["美团外卖"] }],
        酒店: [{ 酒店星级: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"] }],
        民宿: [
          {
            热门城市: [
              "上海",
              "成都",
              "北京",
              "重庆",
              "南京",
              "杭州",
              "广州",
              "西安",
              "武汉",
              "厦门",
              "长沙",
              "青岛",
              "深圳",
              "天津",
              "苏州",
            ],
          },
          { 热门房源: ["复式Loft", "别墅"] },
        ],
        猫眼电影: [
          {
            热映电影: [
              "你好，李焕英",
              "寻龙传说",
              "人潮汹涌",
              "唐人街探案3",
              "刺杀小说家",
              "熊出没·狂野大陆",
              "猫和老鼠",
              "新神榜：哪吒重生",
              "侍神令",
              "错爱迷踪",
            ],
          },
        ],
        "机票 / 火车票": [
          { 机票: ["国内机票", "国际/港澳台机票"] },
          { 火车票: "火车票" },
        ],
        "休闲娱乐 / KTV": [
          {
            休闲娱乐: [
              "足疗按摩",
              "洗浴/汗蒸",
              "酒吧",
              "密室逃脱",
              "轰趴馆",
              "茶馆",
              "私人影院",
              "DIY手工坊",
              "采摘/农家乐",
              "网吧网咖",
              "游乐游艺",
              "VR",
              "桌面游戏",
              "真人CS",
              "棋牌室",
              "其他玩乐",
            ],
          },
          { KTV: ["KTV"] },
        ],
        生活服务: [
          {
            生活服务: [
              "衣物/皮具洗护",
              "家政",
              "搬家运输",
              "送水",
              "充值缴费",
              "服饰/鞋包养护",
              "开锁换锁",
              "居家维修",
              "管道疏通",
              "家电维修清洗",
              "电脑维修",
              "手机维修",
              "证件照/肖像摄影",
              "照片冲印/图文文印",
              "商务服务/法律服务",
              "文化传媒机构",
              "成人用品/情趣用品",
            ],
          },
        ],
        "丽人 / 美发 / 医学美容": [
          {
            丽人: [
              "美发",
              "美甲美睫",
              "美容美体",
              "医学美容",
              "瑜伽舞蹈",
              "瘦身纤体",
              "韩式定妆",
              "祛痘",
              "纹身",
              "化妆品",
              "养发",
            ],
          },
        ],
        "结婚 / 婚纱摄影 / 婚宴": [
          {
            结婚: [
              "婚纱摄影",
              "旅拍",
              "个性写真",
              "婚宴",
              "婚庆公司",
              "婚纱礼服",
              "西服定制",
              "婚戒首饰",
              "婚车租赁",
              "司仪主持",
              "彩妆造型",
              "婚礼跟拍",
              "婚礼小礼品",
              "更多婚礼服务",
            ],
          },
        ],
        "亲子 / 儿童乐园 / 幼教": [
          { 儿童乐园: ["婴儿游泳", "其它亲子游乐"] },
          {
            幼儿教育: [
              "早教中心",
              "少儿英语",
              "智力开发",
              "托班/幼儿园",
              "幼儿教育",
              "其他幼儿教育",
            ],
          },
          { 亲子摄影: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"] },
          {
            孕产护理: [
              "月子会所",
              "产后恢复",
              "妇幼医院",
              "孕产用品",
              "开奶催乳",
              "月嫂",
              "亲子购物",
              "宝宝派对",
              "亲子服务",
            ],
          },
        ],
        "运动健身 / 健身中心": [
          {
            运动健身: [
              "健身中心",
              "武术场馆",
              "游泳馆",
              "羽毛球馆",
              "溜冰场",
              "射箭馆",
              "篮球场",
              "网球馆",
              "台球馆",
              "乒乓球",
              "足球场",
              "高尔夫场",
              "保龄球馆",
              "体育场馆",
              "马术场",
              "壁球馆",
              "更多运动",
            ],
          },
        ],
        "家装 / 建材 / 家居": [
          { 装修设计: ["半包装修", "全包装修", "清包装修"] },
          {
            装修建材: [
              "地板",
              "瓷砖石材",
              "橱柜",
              "灯饰照明",
              "厨卫洁具",
              "油漆涂料",
              "集成吊顶",
              "墙纸墙艺",
              "门窗",
              "木材板材",
              "家用五金",
              "电工电料",
              "楼梯",
              "管材管件",
            ],
          },
          {
            家具家居: [
              "家具",
              "床上用品/家纺",
              "家居饰品",
              "厨具餐具",
              "智能家居",
            ],
          },
          { 家装卖场: ["建材卖场", "家居卖场", "灯饰卖场"] },
        ],
        "学习培训 / 音乐培训": [
          {
            音乐培训: [
              "钢琴",
              "吉他",
              "小提琴",
              "古筝",
              "架子鼓",
              "声乐",
              "其他音乐培训",
            ],
          },
          {
            职业技术: [
              "美容化妆",
              "会计",
              "IT",
              "厨艺",
              "管理培训",
              "摄影培训",
              "司法考试",
              "公务员培训",
              "其他职业培训",
            ],
          },
          {
            外语培训: [
              "英语",
              "日语",
              "韩语",
              "法语",
              "德语",
              "汉语",
              "俄语",
              "西班牙语",
              "其他外语",
            ],
          },
          { 美术培训: ["绘画", "书法", "其他美术"] },
        ],
        "医疗健康 / 宠物 / 爱车": [
          {
            医疗健康: [
              "医院",
              "齿科口腔",
              "体检中心",
              "药店",
              "中医",
              "其他健康服务",
            ],
          },
          {
            爱车: [
              "洗车",
              "租车",
              "加油站",
              "维修保养",
              "驾校",
              "汽车美容",
              "陪练",
              "汽车用品",
              "停车场",
              "汽车保险",
              "4S店/汽车销售",
              "更多汽车服务",
              "机油保养",
              "汽车报价",
              "二手车",
              "广告驾校",
              "交警队",
              "汽车改装",
              "汽车配件",
            ],
          },
          { 宠物: ["宠物店", "宠物医院"] },
        ],
        "酒吧 / 密室逃脱": [
          {
            玩乐: [
              "KTV",
              "酒吧",
              "密室逃脱",
              "游乐游艺",
              "网吧网咖",
              "私人影院",
              "DIY手工坊",
              "桌面游戏",
              "采摘/农家乐",
              "棋牌室",
              "轰趴馆",
              "真人CS",
              "VR其他玩乐",
            ],
          },
        ],
      },
      typeIcos: {
        美食: "meishi",
        外卖: "waimei",
        酒店: "jiudian",
        民宿: "minsu",
        猫眼电影: "dianying",
        "机票 / 火车票": "jipiao",
        "休闲娱乐 / KTV": "ktv",
        生活服务: "fuwu",
        "丽人 / 美发 / 医学美容": "meirong",
        "结婚 / 婚纱摄影 / 婚宴": "jiehun",
        "亲子 / 儿童乐园 / 幼教": "qinzi",
        "运动健身 / 健身中心": "yundong",
        "家装 / 建材 / 家居": "jiazhuang",
        "学习培训 / 音乐培训": "peixun",
        "医疗健康 / 宠物 / 爱车": "jiankang",
        "酒吧 / 密室逃脱": "jiuba",
      },
      bannerList: [
        "https://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "https://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "https://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
      ],
      currentIndex: 0,
      intervalTimer: null,
      currentAside: [],
      timer: null,
      movie: {
        猫眼电影: "title nav-item",
        正在热映: "nav-item",
        即将上映: "nav-item",
        全部: "total nav-item",
      },
      movieList: {
        正在热映: [
          {
            type: "hot",
            img:
              "https://p0.meituan.net/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg@214w_297h_1e_1c",
            score: 9.5,
            name: "你好，李焕英",
            ticket: true,
            want: false,
            mark: false,
          },
          {
            type: "hot",
            img:
              "https://p0.meituan.net/movie/8a1ad4ec0d81f240e4d8c2d1b10c2ec53475644.jpg@214w_297h_1e_1c",
            score: 9.1,
            name: "人潮汹涌",
            ticket: true,
            want: false,
            mark: false,
          },
          {
            type: "hot",
            img:
              "https://p1.meituan.net/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg@214w_297h_1e_1c",
            score: 8.8,
            name: "唐人街探案3",
            ticket: true,
            want: false,
            mark:
              "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
          },
          {
            type: "hot",
            img:
              "https://p1.meituan.net/moviemachine/9be184648a639e0976887c9fd63385b36499634.jpg@214w_297h_1e_1c",
            score: 9.1,
            name: "寻龙传说",
            ticket: true,
            want: false,
            mark:
              "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
          },
          {
            type: "hot",
            img:
              "https://p1.meituan.net/movie/9ef2f7d8d6f11c55723d7be5fa77218d1022103.jpg@214w_297h_1e_1c",
            score: 8.6,
            name: "刺杀小说家",
            ticket: true,
            want: false,
            mark:
              "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
          },
          {
            type: "hot",
            img:
              "https://p1.meituan.net/movie/12b0e9d3c645cda41a9c787066d52279388947.jpg@214w_297h_1e_1c",
            score: 8.5,
            name: "侍神令",
            ticket: true,
            want: false,
            mark: false,
          },
          {
            type: "hot",
            img:
              "https://p0.meituan.net/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg@214w_297h_1e_1c",
            score: 8.9,
            name: "熊出没·狂野大陆",
            ticket: true,
            want: false,
            mark: "https://s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png",
          },
          {
            type: "hot",
            img:
              "https://p0.meituan.net/moviemachine/6766681dc599e1964e9acbf86391207377187.jpg@214w_297h_1e_1c",
            score: 8.7,
            name: "新神榜：哪吒重生",
            ticket: true,
            want: false,
            mark:
              "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
          },
          {
            type: "hot",
            img:
              "https://p0.meituan.net/moviemachine/778ef027d0fe90fd27448d8369d4cf9e2820477.jpg@214w_297h_1e_1c",
            score: 7.9,
            name: "猫和老鼠",
            ticket: true,
            want: false,
            mark: false,
          },
          {
            type: "hot",
            img:
              "https://p1.meituan.net/moviemachine/32f40a66d85c24bee19c57d86773520e14797735.jpg@214w_297h_1e_1c",
            score: false,
            name: "千顷澄碧的时代",
            ticket: true,
            want: 1967,
            mark: false,
          },
        ],
        即将上映: [
          {
            type: "coming",
            img:
              "https://p1.meituan.net/movie/0e1a4668856f43afa9b9d761c00bf11f345806.jpg@214w_297h_1e_1c",
            score: false,
            name: "破晓徂徕山",
            ticket: false,
            want: 312,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p0.meituan.net/moviemachine/e77568bfbe2a7413c9ec13fe410be72a1805925.jpg@214w_297h_1e_1c",
            score: false,
            name: "有梦就飞",
            ticket: true,
            want: 159,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p0.meituan.net/movie/b7383bb5a78d70f0a1ef35b4b0f295f43266884.jpg@214w_297h_1e_1c",
            score: false,
            name: "合法伴侣",
            ticket: true,
            want: 38598,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p1.meituan.net/moviemachine/0c3c89484fc3b88585e251ad31df514e228255.jpg@214w_297h_1e_1c",
            score: false,
            name: "五尺天涯",
            ticket: true,
            want: 27021,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p0.meituan.net/moviemachine/41c353f0e60dc244140b357d5d78f17f141518.webp@214w_297h_1e_1c",
            score: false,
            name: "夜守",
            ticket: true,
            want: 4913,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p1.meituan.net/movie/816bb3675664dec2fec537abf635c7e02083864.jpg@214w_297h_1e_1c",
            score: false,
            name: "背后的凶手",
            ticket: true,
            want: 1580,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p0.meituan.net/movie/bb3419bfe14e3f29872273381dc642292537364.jpg@214w_297h_1e_1c",
            score: false,
            name: "大事",
            ticket: false,
            want: 86,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p0.meituan.net/movie/a3841040cffab344988d7e608dacdb4b4869034.jpg@214w_297h_1e_1c",
            score: false,
            name: "折腾出来的金窝窝",
            ticket: false,
            want: 202,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p1.meituan.net/movie/30f321cb0cc71f60e4e86c3730497a32437305.jpg@214w_297h_1e_1c",
            score: false,
            name: "岁月江城",
            ticket: false,
            want: 345,
            mark: false,
          },
          {
            type: "coming",
            img:
              "https://p1.meituan.net/movie/8de713ce22b34faf8d033f1aa62918dc857749.jpg@214w_297h_1e_1c",
            score: false,
            name: "日不落酒店",
            ticket: true,
            want: 76843,
            mark: false,
          },
        ],
      },
      currentMovieList: [
        {
          img:
            "https://p0.meituan.net/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg@214w_297h_1e_1c",
          score: 9.5,
          name: "你好，李焕英",
          ticket: true,
          want: false,
          mark: false,
        },
        {
          img:
            "https://p0.meituan.net/movie/8a1ad4ec0d81f240e4d8c2d1b10c2ec53475644.jpg@214w_297h_1e_1c",
          score: 9.1,
          name: "人潮汹涌",
          ticket: true,
          want: false,
          mark: false,
        },
        {
          img:
            "https://p1.meituan.net/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg@214w_297h_1e_1c",
          score: 8.8,
          name: "唐人街探案3",
          ticket: true,
          want: false,
          mark: "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
        },
        {
          img:
            "https://p1.meituan.net/moviemachine/9be184648a639e0976887c9fd63385b36499634.jpg@214w_297h_1e_1c",
          score: 9.1,
          name: "寻龙传说",
          ticket: true,
          want: false,
          mark:
            "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
        },
        {
          img:
            "https://p1.meituan.net/movie/9ef2f7d8d6f11c55723d7be5fa77218d1022103.jpg@214w_297h_1e_1c",
          score: 8.6,
          name: "刺杀小说家",
          ticket: true,
          want: false,
          mark:
            "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
        },
        {
          img:
            "https://p1.meituan.net/movie/12b0e9d3c645cda41a9c787066d52279388947.jpg@214w_297h_1e_1c",
          score: 8.5,
          name: "侍神令",
          ticket: true,
          want: false,
          mark: false,
        },
        {
          img:
            "https://p0.meituan.net/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg@214w_297h_1e_1c",
          score: 8.9,
          name: "熊出没·狂野大陆",
          ticket: true,
          want: false,
          mark: "https://s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png",
        },
        {
          img:
            "https://p0.meituan.net/moviemachine/6766681dc599e1964e9acbf86391207377187.jpg@214w_297h_1e_1c",
          score: 8.7,
          name: "新神榜：哪吒重生",
          ticket: true,
          want: false,
          mark:
            "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
        },
        {
          img:
            "https://p0.meituan.net/moviemachine/778ef027d0fe90fd27448d8369d4cf9e2820477.jpg@214w_297h_1e_1c",
          score: 7.9,
          name: "猫和老鼠",
          ticket: true,
          want: false,
          mark: false,
        },
        {
          img:
            "https://p1.meituan.net/moviemachine/32f40a66d85c24bee19c57d86773520e14797735.jpg@214w_297h_1e_1c",
          score: false,
          name: "千顷澄碧的时代",
          ticket: true,
          want: 1967,
          mark: false,
        },
      ],
      hotel: {
        推荐民宿: "title nav-item mf-shang-hei-regular",
        上海: "nav-item",
        南京: "nav-item",
        杭州: "nav-item",
        苏州: "nav-item",
        全部: "total nav-item",
      },
      hotelList: {
        上海: [
          {
            productUrl:
              "https://img.meituan.net/phoenix/37d828d4e433b142922943ae7ec367ef950377.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/f8e97c29d3e0eb90cc023791bd28000034843.jpg@100w_100h_1c_1e_60Q",
            title:
              "隐沪·民宿·轻奢新中式·接送迪士尼·野生动物园·果类采摘·百寸投影·泳池·烧烤·免费停车·免费寄存·含双早",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "浦东新区",
            price: 330,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/9b08d8a1838cf5b4317ad8027f6de8ab512483.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/bb8ded1bd757ab3cd9b793815391ff49470598.jpg@100w_100h_1c_1e_60Q",
            title: "徐家汇MW~豪华装修，地铁直达",
            residence: "整套2室 · 2床",
            person: "可住4人",
            addr: "徐家汇地区",
            price: 358,
          },
          {
            productUrl:
              "https://p1.meituan.net/iphoenix/a3df4018b4a219e093fd3f8f82b4c78d3865423.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/11b10a4628e1dd3afb2e8d1f5a9584e165666.jpg@100w_100h_1c_1e_60Q",
            title:
              "三舍天空之城<上海迪士尼免费接送/独立阳台/近地铁站/近浦东机场/落地窗/泳池>",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "浦东新区",
            price: 258,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/c2fdbeb77b0305dac496f755d5dffad45686486.jpg@720w_417h",
            headUrl:
              "https://p0.meituan.net/phoenix/10bdd1cb84028f998332fa37dcacc173238542.jpg@100w_100h_1c_1e_60Q",
            title:
              "免费接送迪士尼10分钟/接送地铁站/接送浦东机场【竹林】/含早餐/房东24小时接送/大床可住2人",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "迪士尼度假区",
            price: 190,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/ea49f523f5c21d756a37648a433b75263447915.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/bf5189f66c2ccdcf7c44bced07df6a8813213.jpg@100w_100h_1c_1e_60Q",
            title:
              "蜜糖/楼下十米地铁口/免费停车万达du家/迪士尼直达/周浦万达广场楼上独立整套公寓/厨具齐有调料做饭免费/投影仪/牌游",
            residence: "整套1室 · 1床",
            person: "可住2~3人",
            addr: "周浦康桥地区",
            price: 276,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/68cc75e1f229b05569d283b6bb6baddd708055.jpg@720w_417h",
            headUrl:
              "https://p1.meituan.net/phoenix/6e9750748e303e63e9a0a46cd4d40bd320083.jpg@100w_100h_1c_1e_60Q",
            title: "N House 静安寺复古艺术民宿",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "静安区",
            price: 398,
          },
        ],
        南京: [
          {
            productUrl:
              "https://img.meituan.net/phoenix/89b2cf6d084974a38ff7d5b95eb94a524961610.jpg@720w_417h",
            headUrl:
              "https://p0.meituan.net/phoenix/3ecd26ff43542f3092d3820761d337dc1084727.jpg@100w_100h_1c_1e_60Q",
            title:
              "【暖窝烟花易冷】北欧轻奢风/复式/106平 /适合拍照/求婚/弘阳时代中心/地铁直达玄武湖，夫子庙，总统府，南京站",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "浦口区",
            price: 290,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/dc36db9fa87c0a9c5ba493c240f904ce619495.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/63b75f8330607aad1a192d951efab8a026564.jpg@100w_100h_1c_1e_60Q",
            title: "精装大飘窗房，直达南京南、新街口、夫子庙、楼下美食一条街",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "江宁区",
            price: 220,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/ce39f2deb22ce34348182cdf50ca8b6f3479321.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/63b75f8330607aad1a192d951efab8a026564.jpg@100w_100h_1c_1e_60Q",
            title:
              "城市之光精装舒适大床房，楼下美食一条街 江宁成熟商圈，交通便利，不管乘坐高铁，飞机均可直达~",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "浦东新区",
            price: 220,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/cb5ecd19661798134b6f2a37c8a17dbd5461017.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/c9229848f8a9c10bdb2d131b7786370518635.jpg@100w_100h_1c_1e_60Q",
            title:
              "【青涩】春节特惠影院房120寸巨幕投影/打纸牌/做饭/喜年花生唐小市地铁站三号线/南京站/玄武湖/夫子庙/门东/新街口",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "鼓楼区",
            price: 278,
          },
          {
            productUrl:
              "https://p1.meituan.net/iphoenix/8fdfcf448c58554de728b1a4e7fc1525991548.png@720w_417h",
            headUrl:
              "https://p0.meituan.net/phoenix/0cb4a38e1adec20be49319df400c6b63330621.jpg@100w_100h_1c_1e_60Q",
            title: "包接送「已消毒」禄口机场旁南航大学对面大床房包机场来回接送",
            residence: "整套1室 · 2床",
            person: "可住3人",
            addr: "江宁区",
            price: 162,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/f4b408e042f057a209f8f1fb00be8f52116734.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/eb6f2a66aa0ad9dc6350df88fc1e5471166592.jpg@100w_100h_1c_1e_60Q",
            title:
              "日式和风榻榻米』影院民宿#提供做饭用品，与好友相聚#地铁1/3号线直达夫子庙新街口/南京南站机场/中山陵南京博物院/",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "夫子庙地区",
            price: 268,
          },
        ],
        杭州: [
          {
            productUrl:
              "https://img.meituan.net/phoenix/7a6f7657f7a73b2a092d9e319b7c75cd4212258.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/afe632793c8a4902dea87a5511b204a2386141.jpg@100w_100h_1c_1e_60Q",
            title:
              "巨幕投影吊椅豪华大床房霞鸣街地铁口/近宋城/音乐学院/美院/金街/象山艺社/浙一之江",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "西湖区",
            price: 199,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/a75e3e87ce1bddc2b57ee957bde6cc7c521981.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/80762b63e3fa3fe6cb79c567a1de4d6c30712.jpg@100w_100h_1c_1e_60Q",
            title: "途画客栈·幽静山景房",
            residence: "独立一间1室 · 2床",
            person: "可住2人",
            addr: "西湖区",
            price: 368,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/0f794fcb256b49503ff5d4ca5b99068b3461902.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/24f15fb8aea9902625134e10a7534b2f230199.jpg@100w_100h_1c_1e_60Q",
            title:
              "设计师定制三号懒暖·思月大床房*带浴缸 |旅拍打卡地 北欧风 赠早餐 西湖景区内 近满陇桂雨/九溪/龙井村 【花筑吕品】",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "西湖区",
            price: 648,
          },
          {
            productUrl:
              "https://img.meituan.net/iphoenix/5867d32f72067c712f0e3eda4ff5159f368429.png@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/6560d2516982eb15ef3ae06a3b112e4116321.jpg@100w_100h_1c_1e_60Q",
            title:
              "【日暮回家·灵隐别墅 】露台超山景大床房  灵隐寺/近西湖/北高峰脚下/近植物园/西湖景区 | 南宋禅意 简约风",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "西湖区",
            price: 387,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/ea129aff43f7850e284315a78577d6382221630.jpg@720w_417h",
            headUrl:
              "https://p0.meituan.net/iphoenix/3cc59bc932c9cf15a46916a8ad22e9a636850.jpg@100w_100h_1c_1e_60Q",
            title: "/零玖/新天地/石祥路中大银泰/落地窗优享一居大床整套公寓",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "运河商务区",
            price: 275,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/7811129032e6a94f6f70fdf94f18572b43420.jpg@720w_417h",
            headUrl:
              "https://p1.meituan.net/phoenix/329b345c8606e0359359f70947e78a95341761.jpg@100w_100h_1c_1e_60Q",
            title:
              "【逸宿】暗香LOFT大床房  近杭州南站  周边配套设施齐全/交通便利/大润发/万象汇",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "萧山城区",
            price: 268,
          },
        ],
        苏州: [
          {
            productUrl:
              "https://img.meituan.net/phoenix/05f1fa7ea47b78cd87ed5eb4d2bbd2cc579557.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/9bd67620503362d5c9eabe04ac63073827085.jpg@100w_100h_1c_1e_60Q",
            title:
              "【静闲雅居】下单有优惠 周庄古镇景区内民宿复式小楼，静闲雅居清平乐，临近南湖，，景区内冬天晚上七点，夏天晚上八点半免门票",
            residence: "整套2室 · 2床",
            person: "可住4人",
            addr: "周庄古镇景区",
            price: 336,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/b9aa9e8d593f67748fb65fc13c5270ab4874763.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/c5005e809e62ffed373b6baa6d5cc0b6215016.jpg@100w_100h_1c_1e_60Q",
            title:
              "【已消毒·优质房源】周庄古镇南湖码头逅舍临湖观景大床房 免费音乐喷泉主场地（民宿有观景露天阳台 可供喝茶 吃饭）",
            residence: "整套1室 · 1床",
            person: "可住2人",
            addr: "富贵园路",
            price: 398,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/a5b78427120c4f30933c8d88251c66cd4895609.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/9bd67620503362d5c9eabe04ac63073827085.jpg@100w_100h_1c_1e_60Q",
            title:
              "周庄景区内庭院花园式民宿，复式家庭房西江月，晚上可免门票入住，免费提供汉服旗袍，优惠代购门票四季周庄演出票",
            residence: "独立一间2室 · 2床",
            person: "可住4人",
            addr: "周庄古镇景区",
            price: 358,
          },
          {
            productUrl:
              "https://img.meituan.net/phoenix/124c0a9337611f854590962fbde7c9083286373.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/5be4900459fe9ba6d482679d8803f1e6151732.jpg@100w_100h_1c_1e_60Q",
            title:
              "平江路法式浪漫民宿，无接触入住，100寸投影，步行平江路拙政园苏州博物馆狮子林，靠近相门地铁站，直达诚品书店，金鸡湖景区",
            residence: "整套2室 · 2床",
            person: "可住4人",
            addr: "姑苏区",
            price: 189,
          },
          {
            productUrl:
              "https://p1.meituan.net/phoenix/e3ce6d687c9770ad54eaac222f0e9de91064834.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/b710637ff7a6cc4064fb96f187cc63b9153245.jpg@100w_100h_1c_1e_60Q",
            title:
              "二楼落地窗/观景/简约风/智能卫浴，近三桥、退思园。珍珠塔等热门景点，免费停车",
            residence: "整套2室 · 2床",
            person: "可住4~5人",
            addr: "吴江区",
            price: 298,
          },
          {
            productUrl:
              "https://p0.meituan.net/iphoenix/4cbdc4ad6af14bca3f37868f410a0c0b3223308.jpg@720w_417h",
            headUrl:
              "https://img.meituan.net/avatar/ec9a364268eccdb217e27307f68abced36103.jpg@100w_100h_1c_1e_60Q",
            title:
              "花筑·苏然居/近地铁/石路商业中心/山塘街/留园/园林建筑/苏式风格/追月•茶香大床房",
            residence: "独立一间1室 · 1床",
            person: "可住2人",
            addr: "石路地区",
            price: 328,
          },
        ],
      },
      currentHotelList: [
        {
          productUrl:
            "https://img.meituan.net/phoenix/37d828d4e433b142922943ae7ec367ef950377.jpg@720w_417h",
          headUrl:
            "https://img.meituan.net/avatar/f8e97c29d3e0eb90cc023791bd28000034843.jpg@100w_100h_1c_1e_60Q",
          title:
            "隐沪·民宿·轻奢新中式·接送迪士尼·野生动物园·果类采摘·百寸投影·泳池·烧烤·免费停车·免费寄存·含双早",
          residence: "整套1室 · 1床",
          person: "可住2人",
          addr: "浦东新区",
          price: 330,
        },
        {
          productUrl:
            "https://img.meituan.net/phoenix/9b08d8a1838cf5b4317ad8027f6de8ab512483.jpg@720w_417h",
          headUrl:
            "https://img.meituan.net/avatar/bb8ded1bd757ab3cd9b793815391ff49470598.jpg@100w_100h_1c_1e_60Q",
          title: "徐家汇MW~豪华装修，地铁直达",
          residence: "整套2室 · 2床",
          person: "可住4人",
          addr: "徐家汇地区",
          price: 358,
        },
        {
          productUrl:
            "https://p1.meituan.net/iphoenix/a3df4018b4a219e093fd3f8f82b4c78d3865423.jpg@720w_417h",
          headUrl:
            "https://img.meituan.net/avatar/11b10a4628e1dd3afb2e8d1f5a9584e165666.jpg@100w_100h_1c_1e_60Q",
          title:
            "三舍天空之城<上海迪士尼免费接送/独立阳台/近地铁站/近浦东机场/落地窗/泳池>",
          residence: "独立一间1室 · 1床",
          person: "可住2人",
          addr: "浦东新区",
          price: 258,
        },
        {
          productUrl:
            "https://p0.meituan.net/iphoenix/c2fdbeb77b0305dac496f755d5dffad45686486.jpg@720w_417h",
          headUrl:
            "https://p0.meituan.net/phoenix/10bdd1cb84028f998332fa37dcacc173238542.jpg@100w_100h_1c_1e_60Q",
          title:
            "免费接送迪士尼10分钟/接送地铁站/接送浦东机场【竹林】/含早餐/房东24小时接送/大床可住2人",
          residence: "独立一间1室 · 1床",
          person: "可住2人",
          addr: "迪士尼度假区",
          price: 190,
        },
        {
          productUrl:
            "https://p0.meituan.net/iphoenix/ea49f523f5c21d756a37648a433b75263447915.jpg@720w_417h",
          headUrl:
            "https://img.meituan.net/avatar/bf5189f66c2ccdcf7c44bced07df6a8813213.jpg@100w_100h_1c_1e_60Q",
          title:
            "蜜糖/楼下十米地铁口/免费停车万达du家/迪士尼直达/周浦万达广场楼上独立整套公寓/厨具齐有调料做饭免费/投影仪/牌游",
          residence: "整套1室 · 1床",
          person: "可住2~3人",
          addr: "周浦康桥地区",
          price: 276,
        },
        {
          productUrl:
            "https://img.meituan.net/phoenix/68cc75e1f229b05569d283b6bb6baddd708055.jpg@720w_417h",
          headUrl:
            "https://p1.meituan.net/phoenix/6e9750748e303e63e9a0a46cd4d40bd320083.jpg@100w_100h_1c_1e_60Q",
          title: "N House 静安寺复古艺术民宿",
          residence: "独立一间1室 · 1床",
          person: "可住2人",
          addr: "静安区",
          price: 398,
        },
      ],
      recommend: {
        猜你喜欢: "title nav-item mf-shang-hei-regular",
        为你甄选最适合的: "nav-item",
      },
      recommendList: {},
      currentrecommendList: [
        {
          imgUrl:
            "https://p1.meituan.net/joymerchant/-2352699724504017822-22553847-1520851014587.jpg@214w_120h_1e_1c",
          title: "和子足浴（梅村店）",
          commentNum: 3658,
          areaName: "梅村古镇/高新开发区",
          lowPrice: "139.0",
          score: 10,
        },
        {
          imgUrl:
            "https://p0.meituan.net/msmerchant/c2f99b6c78ad2d9b5c08c246300ab37c19615.jpg@214w_120h_1e_1c",
          title: "QE杯（钱桥店）",
          commentNum: 838,
          areaName: "钱桥",
          lowPrice: "8.8",
          score: 9.2,
        },
        {
          imgUrl:
            "https://p0.meituan.net/joymerchant/3629197631234053271-23076633-1497330943024.jpg@214w_120h_1e_1c",
          title: "夏威夷汗蒸漫温泉",
          commentNum: 10301,
          areaName: "1912酒吧街",
          lowPrice: "9.9",
          score: 8.8,
        },
        {
          imgUrl:
            "https://p0.meituan.net/msmerchant/25870e02af9397b48a177d18848a2757481522.jpg@214w_120h_1e_1c",
          title: "牛品福潮汕牛肉火锅（广瑞路店）",
          commentNum: 4717,
          areaName: "广瑞街道",
          lowPrice: "75.0",
          score: 9.2,
        },
        {
          imgUrl:
            "https://p0.meituan.net/merchant/1cc70f448d9a90e2fd8c4ca0070595f4428486.png@214w_120h_1e_1c",
          title: "顶上牛排自助餐厅（崇安寺店）",
          commentNum: 12244,
          areaName: "中山路/恒隆广场",
          lowPrice: "35.0",
          score: 8.4,
        },
        {
          imgUrl:
            "https://p0.meituan.net/msmerchant/b0e1c760f4735553db4120e723d247a7176088.jpg@214w_120h_1e_1c",
          title: "金厨帽（通扬南路店）",
          commentNum: 5933,
          areaName: "清扬路",
          lowPrice: "15.8",
          score: 8.6,
        },
        {
          imgUrl:
            "https://p1.meituan.net/msmerchant/eeea5ce18b66a138b7cd5e957c7d3104269454.jpg@214w_120h_1e_1c",
          title: "韩宫宴炭火烤肉（融创茂店）",
          commentNum: 417,
          areaName: "长广溪公园",
          lowPrice: "92.0",
          score: 8.6,
        },
        {
          imgUrl:
            "https://p1.meituan.net/deal/201205/23/3_0523102815.jpg@214w_120h_1e_1c",
          title: "好轻松盲人按摩推拿院（锡沪店）",
          commentNum: 788,
          areaName: "东亭",
          lowPrice: "88.0",
          score: 9,
        },
        {
          imgUrl:
            "https://p1.meituan.net/msmerchant/cce6f8ef4af62a3b628e55c1586abc25237206.jpg@214w_120h_1e_1c",
          title: "鸣记烤鱼（茂业天地店）",
          commentNum: 4588,
          areaName: "清扬路",
          lowPrice: "68.0",
          score: 9,
        },
        {
          imgUrl:
            "https://p1.meituan.net/deal/b4f4b0d4a91e7791ad92a7a92f308a6a349353.jpg@214w_120h_1e_1c",
          title: "堡莱坞炸鸡汉堡（洛社店）",
          commentNum: 644,
          areaName: "洛社",
          lowPrice: "10.0",
          score: 9.2,
        },
        {
          imgUrl:
            "https://p1.meituan.net/msmerchant/11329d520027ef8abf97f4de8cbe1a2e5438415.jpg@214w_120h_1e_1c",
          title: "凯旋门海鲜自助火锅",
          commentNum: 18573,
          areaName: "莲蓉桥/沃尔玛",
          lowPrice: "78.0",
          score: 8.4,
        },
        {
          imgUrl:
            "https://p1.meituan.net/msmerchant/a109c2bb392a10da960a5eb815a187de648818.jpg@214w_120h_1e_1c",
          title: "北疆饭店（茂业店）",
          commentNum: 5842,
          areaName: "茂业天地/太湖广场",
          lowPrice: "95.0",
          score: 8.6,
        },
        {
          imgUrl:
            "https://p1.meituan.net/mogu/828de25218eb87e49e0cbfa932db461868782.jpg@214w_120h_1e_1c",
          title: "恒信甜品（恒隆店）",
          commentNum: 681,
          areaName: "崇安寺",
          lowPrice: "9.6",
          score: 9.2,
        },
        {
          imgUrl:
            "https://p0.meituan.net/dealwatera/5fe13d76a23f7880c3cd30082efacd02211453.jpg@214w_120h_1e_1c",
          title: "豪味家牛排（百乐广场店）",
          commentNum: 7866,
          areaName: "百乐广场",
          lowPrice: "47.0",
          score: 7.6,
        },
        {
          imgUrl:
            "https://p1.meituan.net/msmerchant/7fb4396f34baa0a967d127f0c4654a521129756.jpg@214w_120h_1e_1c",
          title: "又卷烧饼（八方汇店）",
          commentNum: 1748,
          areaName: "海岸城",
          lowPrice: "7.9",
          score: 9.6,
        },
      ],
      currentPosition: { left: "0px" },
    };
  },
  computed: {
    currentImg() {
      return this.bannerList[this.currentIndex];
    },
    active() {
      return this.currentAside.length !== 0;
    },
    userName() {
      return this.$store.state.username;
    },
  },
  methods: {
    changeIndex(num) {
      clearInterval(this.intervalTimer);
      num = (num + 5) % 5;
      this.currentIndex = num;
      this.interval();
    },
    interval() {
      this.intervalTimer = setInterval(() => {
        const num = this.bannerList.length;
        this.currentIndex = ++this.currentIndex % num;
      }, 1500);
    },
    enter(arr) {
      clearTimeout(this.timer);
      this.currentAside = arr;
    },
    leave() {
      this.timer = setTimeout(() => {
        this.currentAside = [];
      }, 500);
    },
    enterAside() {
      clearTimeout(this.timer);
    },
    changeList(who, name) {
      if (
        who === "recommend" ||
        name === "全部" ||
        name === "猫眼电影" ||
        name === "推荐民宿"
      )
        return;
      if (who === "movie") {
        if (this.currentPosition.left !== "0px") {
          this.currentPosition.left = "0px";
        }
        this.currentMovieList = this.movieList[name];
      } else if (who === "hotel") {
        this.currentHotelList = this.hotelList[name];
      }
    },
    changePosition(px) {
      if (this.currentPosition.left === px) return;
      this.currentPosition.left = px;
    },
  },
  components: {
    Frame,
  },
};
</script>

<style scoped>
@import "../assets/css/index.css";
</style>