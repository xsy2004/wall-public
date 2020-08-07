<template>
  <div class="dalao2333-setting home">
    <div class="dalao2333-user">
      <div class="dalao2333-avatar"><img :src="item.avatar"></div>
      <div class="dalao2333-name">{{ item.name }}</div>
      <div class="dalao2333-bg"></div>
    </div>
    <ul>
      <li>
        <router-link tag="a" to="/setting/about"><i class="dalao2333font icon-infomation"></i>关于程序</router-link>
      </li>
      <li v-if="version<newversion">
        <a href="https://one.chainwon.com/wall.chainwon.com.apk"><i class="dalao2333font icon-infomation"></i>更新版本</a>
      </li>
      <li v-if="!version">
        <a href="https://one.chainwon.com/wall.chainwon.com.apk"><i class="dalao2333font icon-infomation"></i>下载安卓 APP</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        version: window.version,
        newversion: 190212,
        item: {
          avatar: 'https://cdn.xsiy.ltd/photo/ico.png',
          name: '神秘人',
        },
      }
    },
    created: function () {
      this.axios.get("/api/view/user")
        .then((res) => {
          this.item = res.data;
          if(this.item['state']==0){
            this.$router.push('/login')
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }

</script>
<style>
  .dalao2333-setting.home {
    background-color: #fff;
    height: calc(100vh - 102px);
  }

  .dalao2333-setting.home ul {
    margin: 0 50px !important;
    margin-top: 10px !important;
  }

  .dalao2333-setting.home ul li {
    border-bottom: none !important;
    line-height: 32px;
    padding: 10px 0!important;
    zoom: 1.1;
  }

  .dalao2333-setting.home ul li a i {
    position: relative;
    width: 32px;
    display: inline-block;
    text-align: center;
    z-index: 0;
    color: #ff7b8c;
    margin-right: 5px;
  }

  .dalao2333-setting.home ul li a i::after {
    content: "";
    height: 28px;
    width: 28px;
    background-color: rgba(255, 123, 140, .1);
    position: absolute;
    left: 2px;
    border-radius: 100%;
    top: 2px;
    z-index: -1;
  }

  .dalao2333-user {
    position: relative;
    height: 180px;
    z-index: 2;
    margin-bottom: 60px;
  }

  .dalao2333-user::after {
    content: '';
    left: 0;
    right: 0;
    bottom: -1px;
    height: 90px;
    z-index: 1;
    position: absolute;
    -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    background: #fff;
    z-index: -1;
  }

  .dalao2333-user .dalao2333-avatar {
    height: auto!important;
    position: absolute;
    right: 55px;
    bottom: 15px;
  }

  .dalao2333-user .dalao2333-avatar img {
    border-radius: 100%;
    width: 100px;
    height: 100px!important;
    border: 5px solid #fff;
  }

  .dalao2333-user .dalao2333-name {
    color: #fff;
    position: absolute;
    left: 55px;
    bottom: 45px;
    font-size: 1.5em;
    line-height: 60px;
    padding: 0!important;
  }

  .dalao2333-user .dalao2333-bg {
    height: 100%;
    width: 100%;
    background-color: #ff7b8c;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

</style>
