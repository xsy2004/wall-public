<template>
  <div id="dalao2333-header">
    <div class="dalao2333-tab" v-if="$route.matched[0].path == ''">
      <router-link tag="a" to="/">最新</router-link>
      <!--<router-link tag="a" to="/time">时间块</router-link>-->
    </div>
    <div class="dalao2333-tab" v-if="$route.matched[0].path !== ''">
      <a v-on:click="$router.back(-1)"><i class="dalao2333font icon-arrowleft"></i> 返回</a>
    </div>
    <div class="dalao2333-notice">
      <router-link tag="a" to="/edit" v-if="$route.matched[0].path == ''">
        <el-button type="primary" icon="dalao2333font icon-plus" circle size="mini"></el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        item: {
          avatar: 'https://cdn.xsiy.ltd/photo/ico.png',
          name: 'dalao2333',
          qq: '10000',
          category: '这是一个分类',
          article: '这是一段内容'
        }
      }
    }
  }

</script>

<style>
  body {
    padding-top: 46px;
  }

  #dalao2333-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
  }

  #dalao2333-header .dalao2333-tab {
    float: left;
    width: calc(100% - 46px);
  }

  #dalao2333-header .dalao2333-notice {
    float: left;
    width: 46px;
    text-align: center;
    box-sizing: border-box;
    height: 46px;
    border-bottom: 1px solid #eee;
    padding: 6px;
  }

  #dalao2333-header .dalao2333-notice .el-button--mini.is-circle {
    box-shadow: 0 0 12px #ff7b8c;
  }

  #dalao2333-header .dalao2333-notice i {
    color: #fff;
  }

  a {
    cursor: pointer;
  }

</style>
