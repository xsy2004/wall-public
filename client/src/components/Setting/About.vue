<template>
    <div class="dalao2333-setting">
      <ul>
        <li>虽然我真的很想告诉你们我的名字</li>
        <li>但是真的迫于某种因素的影响</li>
        <li>我不能把我的名字公之于众</li>
        <li>同时这也是本站有匿名功能的原因</li>
        <li>如果你真的想找到我，那么加我Telegram账号</li>
      </ul>
      <ul>
        <li>TG:@dalao2333</li>
      </ul>
      <ul>
        <li>本程序为开源程序，同样不能放开源地址</li>
        <li>版权协议：MIT</li>
        <li v-if="version">当前版本：{{ version }}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        version: window.version
      }
    }
  }

</script>

<style scoped>
  ul {
    display: block!important;
    height: auto!important;
    width: auto!important;
    opacity: 1!important;
    visibility: unset!important;
  }
</style>