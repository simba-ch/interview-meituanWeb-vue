<template>
  <div class="home">
    <div class="header">
      <TOPBAR />
      <SEARCH />
    </div>
    <router-view />
    <footer class="com-footer">
      <div class="footer-content">
        <div class="footer-link cf">
          <div
            class="footer-column"
            v-for="(column, index) in infoFooter"
            :key="index"
          >
            <dl v-for="(infoItem, index) in column" :key="index">
              <dt v-if="infoItem.description.length">{{ infoItem.tittle }}</dt>
              <dt v-if="!infoItem.description.length">
                <a href="#">{{ infoItem.tittle }}</a>
              </dt>
              <dd v-for="dd in infoItem.description" :key="dd">
                <a href="#">{{ dd }}</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import TOPBAR from "@/components/TOPBAR.vue";
import SEARCH from "@/components/SEARCH.vue";
export default {
  components: {
    TOPBAR,
    SEARCH,
  },
  data() {
    return {
      infoFooter: [
        [
          {
            tittle: "用户帮助",
            description: [
              "申请退款",
              "常见问题",
              "用户协议",
              "隐私政策",
              "反诈骗公告",
              "消费者权益保障",
            ],
          },
          {
            tittle: "美团服务",
            description: [
              "美团外卖",
              "美团酒店",
              "猫眼电影",
              "美团配送",
              "美团云",
              "大众点评",
              "美团民宿",
              "无人配送",
            ],
          },
        ],
        [
          {
            tittle: "商家合作",
            description: [
              "美团餐饮商户中心",
              "美食商家入驻(非外卖)",
              "美团外卖开店申请",
              "美团收银官网",
              "美团配送合作申请",
              "美团餐饮学院",
              "酒店商家入驻",
              "境内度假商家入驻",
              "综合商家入驻",
              "美团民宿房东商家入驻",
              "商家开票申请",
              "美团智能收银机",
              "美团餐饮开放平台",
              "美团收单",
              "免费使用美团排队",
              "快驴进货商家合作",
              "美团闪购商家入驻",
            ],
          },
        ],
        [
          {
            tittle: "合作商招募",
            description: [
              "美团外卖合作商招募",
              "到店餐饮合作商招募",
              "到店综合业务合作商招募",
              "美团联盟",
              "美团收银招募线上分销商",
              "美团5S服务商招募",
              "美团收单合作商招募",
              "美团充电宝合作商招募",
            ],
          },
          {
            tittle: "美团规则",
            description: ["规则中心", "规则目录", "规则评议院"],
          },
        ],
        [
          { tittle: "关注美团", description: ["美团新浪微博"] },
          {
            tittle: "公司信息",
            description: [
              "关于我们",
              "投资者关系",
              "加入我们",
              "商户诚信公约及管理办法",
              "保险经纪资质",
            ],
          },
          {
            tittle: "廉正举报",
            description: ["廉正举报平台"],
          },
          {
            tittle: "知识产权",
            description: ["知识产权维权平台"],
          },
        ],
        [
          {
            tittle: "消费者服务热线",
            description: [
              "外卖消费者：10109777",
              "猫眼消费者：10105335",
              "其他消费者：10107888",
            ],
          },
          {
            tittle: "商家服务热线",
            description: [
              "外卖&餐饮商家：10105557",
              "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107",
            ],
          },
          {
            tittle: "投诉举报专区",
            description: [
              "违法和不良信息举报电话：4006018900",
              "举报邮箱：tousujubao@meituan.com",
              "网上有害信息举报",
            ],
          },
          {
            tittle: "商家自助入驻美团入口",
            description: [],
          },
          { tittle: "供应商注册入口", description: [] },
        ],
      ],
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>