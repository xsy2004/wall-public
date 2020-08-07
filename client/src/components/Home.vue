<template>
  <div id="xsy-content">
    <div class="xsy-shortcut">
      <router-link tag="a" class="xsy-shortcut-item pink" :to="'/message/2405'">
        <div class="xsy-shortcut-icon">
          <i class="xsyfont icon-smile"></i>
        </div>
        <div class="xsy-shortcut-name">意见反馈</div>
      </router-link>
      <a
        class="xsy-shortcut-item blue"
        target="_blank"
        href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://www.ncldzx.top/&title=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E5%A2%99&desc=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E4%B8%93%E5%B1%9E%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%8F%91%E5%B8%83%E4%BD%A0%E6%83%B3%E5%8F%91%E5%B8%83%E7%9A%84%EF%BC%8C%E8%AF%B4%E4%BD%A0%E6%83%B3%E8%AF%B4%E7%9A%84%EF%BC%8C%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E5%8C%BF%E5%90%8D%E5%8F%91%E5%B8%83%E3%80%82&summary=%E5%8D%97%E6%98%8C%E7%AB%8B%E5%BE%B7%E4%B8%AD%E5%AD%A6%E4%B8%93%E5%B1%9E%E5%A2%99%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%8F%91%E5%B8%83%E4%BD%A0%E6%83%B3%E5%8F%91%E5%B8%83%E7%9A%84%EF%BC%8C%E8%AF%B4%E4%BD%A0%E6%83%B3%E8%AF%B4%E7%9A%84%EF%BC%8C%E5%90%8C%E6%97%B6%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%89%E6%8B%A9%E5%8C%BF%E5%90%8D%E5%8F%91%E5%B8%83%E3%80%82&site=https://www.ncldzx.top/"
              >
        <div class="xsy-shortcut-icon">
          <i class="xsyfont icon-share"></i>
        </div>
        <div class="xsy-shortcut-name">分享墙</div>
      </a>
    </div>
    <div class="xsy-categorys">
      <router-link
        v-for="item in category"
        :key="item.time"
        tag="a"
        :to="'/category/'+item.cid"
      ># {{ item.name }}</router-link>
    </div>
    <div class="xsy-list">
      <content-placeholders class="xsy-item" v-if="loading">
        <content-placeholders-heading :img="true"/>
        <content-placeholders-img/>
        <content-placeholders-text/>
      </content-placeholders>
      <content-placeholders class="xsy-item" v-if="loading">
        <content-placeholders-heading :img="true"/>
        <content-placeholders-img/>
        <content-placeholders-text/>
      </content-placeholders>
      <content-placeholders class="xsy-item" v-if="loading">
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
#xsy-content .xsy-shortcut {
  margin: 5px;
}

#xsy-content .xsy-shortcut::after {
  clear: both;
  display: table;
  content: " ";
}

#xsy-content .xsy-shortcut .xsy-shortcut-item {
  padding: 10px;
  color: #fff;
  border-radius: 4px;
  width: calc(50% - 10px);
  margin: 5px;
  float: left;
  box-sizing: border-box;
}

#xsy-content .xsy-shortcut .xsy-shortcut-item.pink {
  background: linear-gradient(to right, rgb(238, 156, 167), rgb(255, 221, 225));
}

#xsy-content .xsy-shortcut .xsy-shortcut-item.blue {
  background: linear-gradient(to right, rgb(28, 146, 210), rgb(212, 248, 255));
}

#xsy-content .xsy-shortcut .xsy-shortcut-icon {
  border-radius: 100%;
  margin-bottom: 5px;
  margin-left: -2px;
}

#xsy-content .xsy-shortcut .xsy-shortcut-icon i {
  font-size: 1.6em;
}

#xsy-content .xsy-categorys {
  padding-left: 10px;
}

#xsy-content .xsy-categorys a {
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0 10px 10px 0;
  display: inline-block;
  color: #010101;
}
</style>
