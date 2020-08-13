<template>
  <div id="nexmoe-content">
    <div class="nexmoe-shortcut">
      <router-link tag="a" class="nexmoe-shortcut-item pink" :to="'/message/2405'">
        <div class="nexmoe-shortcut-icon">
          <i class="nexmoefont icon-smile"></i>
        </div>
        <div class="nexmoe-shortcut-name">意见反馈</div>
      </router-link>
      <a
        class="nexmoe-shortcut-item blue"
        target="_blank"
        href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://www.ncldzx.top/&title=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E5%A2%99&desc=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E4%B8%93%E5%B1%9E%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%8F%91%E5%B8%83%E4%BD%A0%E6%83%B3%E5%8F%91%E5%B8%83%E7%9A%84%EF%BC%8C%E8%AF%B4%E4%BD%A0%E6%83%B3%E8%AF%B4%E7%9A%84%EF%BC%8C%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E5%8C%BF%E5%90%8D%E5%8F%91%E5%B8%83%E3%80%82&summary=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E4%B8%93%E5%B1%9E%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%8F%91%E5%B8%83%E4%BD%A0%E6%83%B3%E5%8F%91%E5%B8%83%E7%9A%84%EF%BC%8C%E8%AF%B4%E4%BD%A0%E6%83%B3%E8%AF%B4%E7%9A%84%EF%BC%8C%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E5%8C%BF%E5%90%8D%E5%8F%91%E5%B8%83%E3%80%82&site=https://www.ncldzx.top/"
              >
        <div class="nexmoe-shortcut-icon">
          <i class="nexmoefont icon-share"></i>
        </div>
        <div class="nexmoe-shortcut-name">分享墙</div>
      </a>
    </div>
    <div class="nexmoe-categorys">
      <router-link
        v-for="item in category"
        :key="item.time"
        tag="a"
        :to="'/category/'+item.cid"
      ># {{ item.name }}</router-link>
    </div>
    <div class="nexmoe-list">
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true"/>
        <content-placeholders-img/>
        <content-placeholders-text/>
      </content-placeholders>
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true"/>
        <content-placeholders-img/>
        <content-placeholders-text/>
      </content-placeholders>
      <content-placeholders class="nexmoe-item" v-if="loading">
        <content-placeholders-heading :img="true"/>
        <content-placeholders-img/>
        <content-placeholders-text/>
      </content-placeholders>
      <router-link
        tag="a"
        v-for="item in message"
        :key="item.time"
        :to="'/message/'+item.mid"
        v-if="!loading"
      >
        <Item :item="item" v-if="!loading"></Item>
      </router-link>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "Home",
  components: {
    Item
  },
  data() {
    return {
      loading: true,
      category: "",
      message: ""
    };
  },
  mounted: function() {
    this.axios
      .get("/api/view/category")
      .then(res => {
        this.category = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.axios
      .get("/api/view/message")
      .then(res => {
        this.message = res.data;
        this.loading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#nexmoe-content .nexmoe-shortcut {
  margin: 5px;
}

#nexmoe-content .nexmoe-shortcut::after {
  clear: both;
  display: table;
  content: " ";
}

#nexmoe-content .nexmoe-shortcut .nexmoe-shortcut-item {
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  width: calc(50% - 10px);
  margin: 5px;
  float: left;
  box-sizing: border-box;
}

#nexmoe-content .nexmoe-shortcut .nexmoe-shortcut-item.pink {
  background: linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225));
}

#nexmoe-content .nexmoe-shortcut .nexmoe-shortcut-item.blue {
  background: linear-gradient(to right, rgb(28, 146, 210), rgb(212, 248, 255));
}

#nexmoe-content .nexmoe-shortcut .nexmoe-shortcut-icon {
  border-radius: 100%;
  margin-bottom: 5px;
  margin-left: -2px;
}

#nexmoe-content .nexmoe-shortcut .nexmoe-shortcut-icon i {
  font-size: 1.6em;
}

#nexmoe-content .nexmoe-categorys {
  padding-left: 10px;
}

#nexmoe-content .nexmoe-categorys a {
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0 10px 10px 0;
  display: inline-block;
  color: #010101;
}
</style>
