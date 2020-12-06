<template>
  <div class="destination">
    <!-- 目的地 -->
    <!-- header 输入input -->
    <div class="destination-header">
      <!-- 上部 -->
      <div class="destination-header-top">
        <!-- 日期 -->
        <div class="destination-header-top-date">
          <van-cell @click="show = true">
            <p>
              住<span>{{ this.datestart }}</span>
            </p>
            <p>
              离<span>{{ this.dateend }}</span>
            </p>
          </van-cell>
          <van-calendar
            v-model="show"
            :formatter="formatter"
            type="range"
            @confirm="onConfirm"
          />
        </div>
        <!-- 城市选择 -->
        <div class="destination-header-top-city">
          <van-cell class="delta-icon" @click="showPopup"> 城市 </van-cell>
          <van-popup
            class="citydk"
            :overlay="false"
            v-model="cityshow"
            position="right"
          >
            <!-- nav导航 -->
            <van-nav-bar
              title="选择城市"
              left-arrow
              fixed
              @click-left="tomembers"
            />
            <!-- 索引列表 -->
            <van-index-bar>
              <van-index-anchor index="A" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-index-anchor index="B" />
              <van-cell title="文本" />
              <van-cell title="文本" />
              <van-cell title="文本" />
            </van-index-bar>
          </van-popup>
        </div>
        <!-- 搜索 -->
        <div class="destination-header-top-search" @click="toSearch">
          <van-icon class="search-icon" name="search" size="20" />
          <span>位置/关键字/房源...</span>
        </div>
      </div>
      <!-- 下部 -->
      <div class="destination-header-bottom"></div>
    </div>

    <!-- main -->
    <div class="destination-main"></div>

    <!-- footer tabBar -->
    <tabbar></tabbar>
  </div>
</template>
<script>
import {
  Calendar,
  Cell,
  IndexBar,
  IndexAnchor,
  Popup,
  NavBar,
  Icon,
} from "vant";
export default {
  name: "destination",
  components: {
    [Calendar.name]: Calendar,
    [Cell.name]: Cell,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Popup.name]: Popup,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      date: "",
      show: false,
      cityshow: false,
      datestart: "11-24",
      dateend: "11-25",
    };
  },
  created() {},

  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      const date1 = this.date.slice(0, 5).replace("/", "-");
      const date2 = this.date.slice(8, 13).replace("/", "-");
      this.datestart = date1;
      this.dateend = date2;
    },

    formatter(day) {
      if (day.type === "start") {
        day.bottomInfo = "入住";
      } else if (day.type === "end") {
        day.bottomInfo = "离店";
      }

      return day;
    },

    showPopup() {
      this.cityshow = true;
    },

    //返回到mine页面
    tomembers() {
      this.cityshow = false;
    },

    //跳转到搜索页面
    toSearch(){
      this.$router.push('/search')
    }
  },
};
</script>
<style lang="less" scoped>
.destination {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-top: 1px;
  &-header {
    height: 100px;
    background-color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0 25px;
    &-top {
      display: flex;
      height: 40px;
      background-color: #ccc;
      border-radius: 20px;
      padding-left: 15px;
      &-date {
        height: 100%;
        width: 68px;
        padding-left: 10px;
        // background-color: turquoise;
        p {
          font-size: 12px;
          span {
            color: blue;
            font-size: 12px;
          }
        }
      }
      &-city {
        height: 100%;
        width: 65px;
        // background-color: yellow;
        position: relative;
        .delta-icon {
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
        }
        .citydk {
          width: 100%;
          height: 100%;
          background-color: #fff;
          // background-color: red;
        }
      }
      &-city::after {
        content: "";
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #000 transparent;
        transform: rotateZ(135deg);
        position: absolute;
        bottom: 5px;
        right: 5px;
      }
      &-city::before {
        content: "";
        width: 1px;
        height: 20px;
        border: none;
        background-color: gray;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &-search {
        height: 100%;
        flex: 1;
        line-height: 40px;
        position: relative;
        color: gray;
        // background-color: blue;
        .search-icon {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        span {
          margin-left: 25px;
        }
      }
    }
    &-bottom {
      height: 50px;
      width: 100%;
      // background-color: violet;
    }
  }
  &-main {
    flex: 1;
    // background-color: yellow;
  }
}

// 修改住 离日期样式
/deep/ .van-cell {
  line-height: 19px;
}

//修改日期按钮背景,padding样式
/deep/.van-cell {
  background-color: transparent;
  padding: 0;
}

//去除日期按钮底下的border
/deep/ .van-cell::after {
  border-bottom: none;
}
</style>