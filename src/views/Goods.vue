<template>
  <div class="goods">
    <div class="center mt-1">
      <div class="crumb">
        <router-link to="/" class="link crumb-item">{{ city }}美团</router-link>
        <h2 class="bread-h1 crumb-item">
          <a href="javascript:;">{{ city }}{{ searchWord }}</a>
        </h2>
      </div>
      <div class="center-content cf">
        <div class="left-content">
          <div class="filter-box">
            <div class="filter-section-wrapper">
              <div
                class="popover"
                :style="style"
                v-if="addrList.length !== 0"
                @mouseover="enterChart"
                @mouseleave="leaveChart"
              >
                <div class="arrow"></div>
                <div class="content">
                  <div class="popover-content">
                    <a href="javascript:;" class="tag tag-empty tag-large">
                      <span>{{ name }}</span>
                    </a>
                    <div class="tag-group tag-group-expend">
                      <div
                        class="height-1"
                        v-for="(addr, index) in addrList"
                        :key="index"
                      >
                        <a href="javascript:;"
                          ><span>{{ addr }}</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="filter-component"
                v-for="(item, type) in list"
                :key="type"
              >
                <div class="label">
                  <label>{{ type }}</label>
                  <a class="tag tag-solid tag-large" href="javascript:void(0);"
                    ><span>全部</span></a
                  >
                </div>
                <div class="tags">
                  <div class="tag-group tag-group-expend">
                    <div
                      v-for="(list, subType) in item"
                      :key="subType"
                      @mouseenter="enter(subType, list, $event)"
                      @mouseleave="leave"
                    >
                      <a
                        href="javascript:;"
                        class="tag"
                        :class="[
                          list.length === 0 ? 'tag-empty' : 'tag-expend',
                        ]"
                      >
                        <span>{{ subType }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="common-list">
            <div class="sort-option">
              <div class="tag-group tag-group-sort">
                <div>
                  <a href="#" class="tag tag-empty tag-highlight"
                    ><span>智能排序</span></a
                  >
                </div>
                <div>
                  <a href="#" class="tag tag-sort tag-sort-up tag-sort-down"
                    ><span>价格排序</span></a
                  >
                </div>
                <div>
                  <a href="#" class="tag tag-empty"><span>人气最高</span></a>
                </div>
                <div>
                  <a href="#" class="tag tag-empty"><span>评价最高</span></a>
                </div>
              </div>
            </div>
            <div class="common-list-main">
              <div>
                <div
                  class="default-card"
                  v-for="(info, index) in currentGoodsList"
                  :key="index"
                >
                  <div class="default-list-item cf">
                    <a href="#" class="link list-item-pic backup-color">
                      <span>{{ index + 1 }}</span>
                      <img :src="info.image" class="image" />
                    </a>
                    <div class="list-item-desc">
                      <div class="list-item-desc-top">
                        <a href="#" class="link item-title">{{ info.title }}</a>
                        <div class="item-eval-info cf">
                          <div class="stars-wrapper">
                            <div class="rate-stars">
                              <ul class="rate-stars-ul rate-stars-dark">
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                              </ul>
                              <ul
                                class="rate-stars-ul rate-stars-light"
                                :style="{ width: (info.score / 5) * 100 + '%' }"
                              >
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                                <li><i class="icofont">&#xe618;</i></li>
                              </ul>
                            </div>
                          </div>
                          <span>{{ comment(info.score) }}</span
                          ><span>{{ info.score }}分</span
                          ><span class="highlight"
                            >{{ info.commentNum }}人评论</span
                          >
                        </div>
                        <div class="item-site-info cf">
                          <div class="address-info cf">
                            <span class="cate-info ellipsis">
                              <span
                                v-for="(tab, i) in info.tab"
                                :key="i"
                                :title="tab"
                                :class="[
                                  i === info.tab.length - 1
                                    ? ''
                                    : 'vertical-line',
                                ]"
                                >{{ tab }}</span
                              >
                            </span>
                            <span
                              :title="info.address"
                              class="address ellipsis"
                              >{{ info.address }}</span
                            >
                          </div>
                          <div class="item-site-map">
                            <span>查看地图</span>
                          </div>
                        </div>
                        <div class="item-bottom-info cf">
                          <div class="item-price-info">
                            <span class="avg-price">
                              人均¥{{ info.avgPrice }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="dash-sperator-line"></div>
                      <div class="common-deal-container">
                        <div class="deal-wrapper">
                          <a
                            href="#"
                            class="link deal-content"
                            v-for="(item, j) in info.dealItems"
                            :key="j"
                          >
                            <div class="deal-title">
                              <span>
                                <span class="hlt-span"> {{ item.title }} </span>
                              </span>
                            </div>
                            <div class="deal-info">
                              <span class="deal-price">
                                <span class="rmb-symbol">￥</span
                                >{{ item.price }}
                              </span>
                              <span class="deal-value"
                                >门市价¥{{ item.counterPrice }}</span
                              >
                              <span class="deal-sales"
                                >已售{{ item.saleNum }}</span
                              >
                            </div>
                          </a>
                        </div>
                        <p class="toggle-btn" v-if="info.dealItems.length > 1">
                          <span>更多1个优惠</span>
                          <span class="position-relative">
                            <i class="icofont dropdown">&#xe629;</i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav class="mt-pagination">
            <ul class="cf">
              <li
                class="pagination-item prev-btn"
                :class="[pageIndex === 1 ? '' : 'active']"
                @click="changePageIndex(pageIndex - 1)"
              >
                <a class="left-arrow iconfont icon-btn_left" href="javascript:;"
                  ><i class="icofont">&#xe60a;</i></a
                >
              </li>
              <li
                class="pagination-item num-item"
                :class="[pageIndex === 1 ? 'select' : '']"
                @click="changePageIndex(1)"
              >
                <a href="javascript:;">1</a>
              </li>
              <li
                class="ellipsis-btn pagination-item"
                v-if="currentPageArr[0] !== 2"
              >
                <a href="javascript:;"><i class="icofont ico">&#xe637;</i></a>
              </li>
              <li
                class="pagination-item num-item"
                v-for="currentIndex in currentPageArr"
                :key="currentIndex"
                :class="[currentIndex === pageIndex ? 'select' : '']"
                @click="changePageIndex(currentIndex)"
              >
                <a href="javascript:;">{{ currentIndex }}</a>
              </li>
              <li
                class="pagination-item next-btn"
                :class="[pageIndex === lastPageIndex ? '' : 'active']"
                @click="changePageIndex(pageIndex + 1)"
              >
                <a href="javascript:;" class="right-arrow"
                  ><i class="icofont ico">&#xe60a;</i></a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="right-content">
          <div class="recommend-box-wrapper" :style="position">
            <div class="recommend-box">
              <div class="top-nav-box">
                <div class="label">猜你喜欢</div>
              </div>
              <div class="recommend-list">
                <a
                  href="#"
                  class="link link recommend-item"
                  v-for="item in likes"
                  :key="item.itemId"
                >
                  <div class="recommend-card-wrapper">
                    <div class="img-box">
                      <img :src="item.imgUrl" class="image" />
                    </div>
                    <div class="info-box">
                      <div class="title">{{ item.title }}</div>
                      <div class="score-line">
                        <div class="score">
                          <div data-v-b2d47ae8="" class="rate-stars">
                            <ul
                              data-v-b2d47ae8=""
                              class="rate-stars-ul rate-stars-dark"
                            >
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                            </ul>
                            <ul
                              data-v-b2d47ae8=""
                              class="rate-stars-ul rate-stars-light"
                              :style="{ width: item.score * 10 + '%' }"
                            >
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                              <li data-v-b2d47ae8="">
                                <i data-v-b2d47ae8="" class="icofont">&#xe618;</i>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="comment-number">
                          {{ item.commentNum }}个评论
                        </div>
                      </div>
                      <div class="desc-line">
                        <div class="desc">{{ item.areaName }}</div>
                      </div>
                      <div class="bottom-line">
                        <div class="price-box">
                          <span>
                            <span class="yuan">￥</span>
                            <span class="price-number numfont">{{
                              item.lowPrice
                            }}</span>
                            <span class="price-desc">起</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="back-top" v-if="none">
            <div class="back-top-go-top">
              <a href="#">
                <i class="icofont up-arrow">&#xe62a;</i>
                <span>回到顶部</span>
              </a>
            </div>
            <div class="back-top-help">
              <a href="#">
                <span>帮助中心</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("changeDerivatives", "goods");
    this.$store.commit("changeNavDisplay", "display-inline-block");
    this.$store.commit("incrementBottom", "goods");
  },
  mounted() {
    window.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < 230) {
        this.position = "";
      } else if (scrollTop < 2094) {
        this.position = {
          position: "fixed",
          top: "-10px",
        };
      } else {
        this.position = {
          position: "absolute",
          bottom: "84px",
        };
      }
      if (scrollTop >= 1086) {
        this.none = true;
      } else {
        this.none = false;
      }
    };
  },
  computed: {
    city() {
      return this.$store.state.city;
    },
    searchWord() {
      return this.$store.state.searchWord;
    },
    lastPageIndex() {
      if (this.goodsList.length % 10) {
        return Math.ceil(this.goodsList.length / 10);
      } else {
        return this.goodsList.length / 10;
      }
    },
    currentPageArr() {
      let arr = [];
      if (this.lastPageIndex <= 5) {
        for (let i = 2; i <= this.lastPageIndex; i++) {
          arr.push(i);
        }
      } else {
        if (this.pageIndex < 5) {
          arr = [2, 3, 4, 5];
        } else if (this.pageIndex < this.lastPageIndex) {
          for (let i = -2; i <= 1; i++) {
            arr.push(this.pageIndex + i);
          }
        } else {
          for (let i = 3; i >= 0; i--) {
            arr.push(this.lastPageIndex - i);
          }
        }
      }

      return arr;
    },
  },
  data() {
    return {
      style: { display: "none" },
      currentData: "",
      list: {
        分类: {
          美食: [
            "全部",
            "特色菜",
            "日本菜",
            "饮品店",
            "面包甜点",
            "火锅",
            "自助餐",
            "小吃快餐",
            "日韩料理",
            "西餐",
            "聚餐宴请",
            "烧烤烤肉",
            "川湘菜",
            "江浙菜",
            "香锅",
            "烤鱼",
            "小龙虾",
            "粤菜",
            "中式烧烤/烤串",
            "西北菜",
            "京菜",
            "鲁菜",
            "徽菜",
            "东北菜",
            "生鲜蔬果",
            "云贵菜",
            "江河湖海鲜",
            "汤/粥/炖菜",
            "蒙餐",
            "新疆菜",
          ],
          酒店住宿: ["全部", "经济型酒店", "低星酒店", "公寓民宿"],
          休闲娱乐: ["全部", "茶馆"],
          生活服务: [],
          汽车服务: ["全部", "停车场"],
        },
        区域: {
          推荐商圈: [
            "宜家/荟聚云林",
            "苏宁广场",
            "梅村",
            "五爱广场/五爱路",
            "南禅寺/阳春巷",
            "东亭/东北塘",
            "万象城/金城湾",
            "新之城广场",
            "茂业天地/太湖广场",
            "万科酩悦/东绛",
            "阳山",
            "阳光购物广场",
            "安镇",
            "崇安寺",
            "八士",
          ],
          滨湖区: [
            "全部",
            "河埒口",
            "蠡园/太湖景区",
            "中桥/湖滨商业街",
            "滨湖万达广场",
            "万科酩悦/东绛",
            "梁清路",
            "梁溪路",
            "湖滨路",
            "新体育中心/奥林花园",
            "华莱坞/雪浪",
            "江南大学/太湖风景区",
            "落霞苑/华庄梅园",
            "灵山/拈花湾景区",
            "胡埭",
            "海岸城",
            "万象城/金城湾",
            "建筑路/稻香路",
            "太湖学院",
            "长广溪公园",
            "荣巷",
            "市民广场",
            "江南大学城",
            "拈花湾",
          ],
          新吴区: [
            "全部",
            "旺庄",
            "宝龙城市广场",
            "梅村古镇/高新开发区",
            "新区哥伦布广场",
            "新地假日广场",
            "新之城广场",
            "坊前",
            "长江北路沿线",
            "无锡硕放国际机场",
            "国家软件园/新安",
            "春潮",
            "高新开发区",
            "叙康里",
            "太湖花园",
          ],
          锡山区: [
            "全部",
            "东亭",
            "丰汇欢乐广场",
            "荡口古镇风景区",
            "八士",
            "安镇",
            "羊尖",
            "宜家/荟聚云林",
            "港下",
            "查桥",
            "张泾",
            "东北塘",
          ],
          惠山区: [
            "全部",
            "惠山万达广场",
            "钱桥",
            "长安",
            "洛社",
            "堰桥",
            "前洲",
            "玉祁",
            "阳山",
            "杨市",
            "藕塘",
            "西漳",
            "百乐广场",
          ],
          江阴市: [
            "全部",
            "万达广场",
            "青果路",
            "澄江福地/步行街",
            "天鹤/文定小区",
            "希望广场/贯庄",
            "黄山湖公园",
            "江阴市中/益健路",
            "新百业广场",
            "花园新村",
            "东门",
            "夏港街道",
            "长山镇",
            "云亭街道",
            "周庄镇",
            "华士镇",
            "申港街道",
            "月城镇",
            "璜土镇",
            "新桥镇",
            "山观镇",
            "祝塘镇",
            "南闸",
            "霞客镇峭岐社区",
            "长泾镇",
            "五洲国际",
            "浮桥菜场",
            "利港镇",
            "君巫路",
            "中医院/新华书店",
            "中街/城中菜场",
            "南街",
            "西郊",
            "红星美凯龙",
            "君山公园",
            "兴澄银座",
            "顾山镇",
            "立新社区/丽岛华都",
            "霞客镇璜塘社区",
            "霞客镇马镇社区",
            "文林镇",
            "澄江镇",
            "青阳镇",
            "澄星八佰伴",
            "天华文化中心",
            "美嘉城",
            "朝阳公园",
            "华地百货",
            "五星桥",
            "朝阳关",
            "中山公园",
            "新一城",
            "城东开发区",
          ],
          宜兴市: [
            "全部",
            "万达广场及周边",
            "步行街/西横街",
            "人民南路/森林公园",
            "环科园/城铁站",
            "新天地/太滆桥",
            "家和花园/大润发",
            "金三角汽车站",
            "现代生活广场/大润发",
            "丁蜀",
            "官林",
            "张渚",
            "和桥/屺亭",
            "徐舍",
            "大觉寺/横山水库",
            "竹海/陶祖圣境",
            "人民医院/文化广场",
            "解放路",
            "城北大排档",
            "东山/宜兴电大",
            "阳羡湖风景区",
            "田龙领桥",
            "城北大统华及周边",
            "保利大剧院及周边",
            "八佰伴及周边",
            "太滆路",
            "城东",
          ],
          梁溪区: [
            "全部",
            "上马墩",
            "茂业天地/太湖广场",
            "南禅寺/阳春巷",
            "五爱广场",
            "莲蓉桥/沃尔玛",
            "东林广场/酒吧街",
            "广益",
            "南长街/南下塘",
            "东门/东林书院",
            "金太湖广场",
            "哥伦布广场",
            "红豆/胜利门",
            "1912酒吧街",
            " 曹张/清扬家乐福",
            "崇安寺",
            "大成巷/东方广场",
            "汇金广场/八佰伴",
            "永乐路/永丰路",
            "招商城/塘南",
            "阳光购物广场",
            "中桥/芦庄",
            "西水东/体育公园",
            "盛岸路沿线",
            "青石路/运河公园",
            "中山路/恒隆广场",
            "苏宁广场",
            "惠山风景区",
            "民丰里",
            "广石路沿线",
            "宁海里/尤渡苑",
            "广瑞街道",
            "火车站",
            "天鹏食品城",
            "刘潭",
            "扬名",
            "沁园/五星家园",
            "槐古大桥",
            "胜利门茂业",
            "京东广场",
            "锡惠路",
            "锡澄路",
            "南长街/阳春巷",
            "五爱路",
            "永定桥",
            "清扬路",
            "山北",
          ],
        },
      },
      addrList: [],
      name: "",
      timeout: undefined,
      goodsList: [],
      pageIndex: 1,
      currentGoodsList: [],
      position: "",
      none: false,
      likes: [
        {
          itemId: 749430,
          imgUrl:
            "https://p0.meituan.net/deal/__41743270__9721170.jpg@190w_106h_1e_1c",
          title: "清荷山庄",
          commentNum: 24,
          areaName: "张渚",
          lowPrice: '46.8',
          score:8.6
        },
        {
          itemId: 671322,
          imgUrl:
            "https://p1.meituan.net/msmerchant/3fca209afb79113318c8b703945e238143823.jpg@190w_106h_1e_1c",
          title: "七宝堂日式料理（百乐广场店）",
          commentNum: 691,
          areaName: "百乐广场",
          lowPrice: '32.0',
          score:8.4
        },
         {
          itemId: 498191,
          imgUrl:
            "https://p0.meituan.net/merchant/1cc70f448d9a90e2fd8c4ca0070595f4428486.png@190w_106h_1e_1c",
          title: "顶上牛排自助餐厅（崇安寺店）",
          commentNum: 12243,
          areaName: "中山路/恒隆广场",
          lowPrice: '35.0',
          score:8.4
        },
      ],
    };
  },
  watch: {
    "$store.getters.goodsArr": {
      handler() {
        const goodsArr = this.$store.getters.goodsArr;
        const i = this.pageIndex;
        this.goodsList = goodsArr;
        this.currentGoodsList = goodsArr.slice((i - 1) * 10, i * 10);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    enter(name, list, e) {
      clearTimeout(this.timeout);
      this.name = name;
      this.addrList = list;
      const left = e.target.offsetLeft + "px";
      const top = e.target.offsetTop + 30 + "px";
      this.style = {
        left,
        top,
        display: "block",
      };
    },
    leave() {
      this.timeout = setTimeout(() => {
        this.style = {
          display: "none",
        };
      }, 500);
    },
    enterChart() {
      clearTimeout(this.timeout);
    },
    leaveChart() {
      this.style = {
        display: "none",
      };
    },
    comment(num) {
      let comment;
      if (num > 4.5) {
        comment = "很好";
      } else if (num > 4) {
        comment = "好";
      } else if (num > 3.5) {
        comment = "不错";
      } else {
        comment = "一般";
      }
      return comment;
    },
    changePageIndex(num) {
      if (--num < 0 || ++num > this.lastPageIndex) return;
      if (num === this.pageIndex) return;
      this.pageIndex = num;
      document.documentElement.scrollTop = 360;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/goods.css");
</style>