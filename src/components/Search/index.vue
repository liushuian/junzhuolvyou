<template>
  <div class="search">
    <form class="search-form" action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="位置/关键词/房源名称"
        @search="onSearch"
        @cancel="onCancel"
        @input="onChange"
      />
    </form>
    <div class="search-title search-history" v-show="show">
      <van-icon name="aim" />
      <span class="tiele-text">搜索历史</span>
      <van-icon class="delete" name="delete" size="20" @click="onDelete" />
      <ul class="search-history-list" >
        <li v-for="item in historyList" :key="item.id" @click="onHistory">{{item}}</li>
      </ul>
    </div>
    <div class="search-title">
      <van-icon name="aim" />
      <span class="tiele-text">当地热门</span>
    </div>
    <div class="search-title">
      <van-icon name="aim" />
      <span class="tiele-text">行政区</span>
    </div>
    <div class="search-title">
      <div>
        <van-icon name="aim" />
        <span class="tiele-text">热门房源</span>
      </div>
      <ul>
        <li>
          <p></p>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Search, Icon, Form } from "vant";
import { getHistory, setHistory, clearHistory } from "@/app/history.js";
export default {
  name: "search",
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Form.name]: Form,
  },
  data() {
    return {
      value: "",
      show: '',
      historyList: []
    };
  },
  created() {
    this.showHistory()
  },
  methods: {
    //点击取消,跳转到目的地页面
    onCancel() {
      this.$router.push("/destination");
    },

    //点击手机搜索按钮
    onSearch() {
      const value = this.value.trim();
      setHistory(value);
      this.$router.push('/detailpage')
    },

    //输入框变化
    onChange() {
      const value = this.value.trim()
      // console.log('--'+value);
    },

    //点击删除图标
    onDelete(){
      clearHistory()
      this.show = false
    },

    //是否加载历史记录
    showHistory(){
      if(getHistory()){
        this.show = true
        this.historyList = getHistory()
      }
    },

    //点击历史列表
    onHistory(){

    }
  },
};
</script>
<style lang="less" scoped>
.search {
  height: 100%;
  width: 100%;
  background-color: #fff;
}

.search-title {
  padding: 25px 0 0 15px;
  .tiele-text {
    font-weight: bold;
    font-size: 16px;
    margin-left: 5px;
  }
}

.search-history {
  position: relative;
  .delete {
    position: absolute;
    top: 25px;
    right: 18px;
  }
  &-list {
    display: flex;
    margin-top: 10px;
    li {
      margin-right: 5px;
      padding: 5px;
      border-radius: 5px;
      background-color: #ccc;
    }
  }
}

/deep/ .van-search {
  padding: 0 12px;
}
/deep/ .van-search__content {
  border-radius: 5px;
  height: 34px;
  line-height: 34px;
}

// 去掉底部横线
/deep/ .van-cell::after {
  position: static;
}

/deep/ .van-cell {
  line-height: 20px;
}
</style>