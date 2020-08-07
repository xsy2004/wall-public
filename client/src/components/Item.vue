<template>

  <div class="dalao2333-item">
    <div class="dalao2333-author">
      <div class="dalao2333-avatar"><img :src="item.author.avatar"></div>
      <div class="dalao2333-name">{{ item.author.name }}</div>
      <div class="dalao2333-s">{{ item.time }}</div>
    </div>
    <div class="dalao2333-category">
      # {{ item.category }}
    </div>
    <Article :article="item.article"></Article>
  </div>
</template>

<script>
  import Article from '@/components/item/Article'

  export default {
    name: "Item",
    components: {
      Article
    },
    props: ['item'],
    data() {
      return {}
    },
    methods: {

    },

  }

</script>

<style>
  #dalao2333-content .dalao2333-item .dalao2333-author {
    padding: 10px;
    height: 56px;
  }

  #dalao2333-content .dalao2333-item .dalao2333-avatar {
    height: 100%;
    float: left;
  }

  #dalao2333-content .dalao2333-item .dalao2333-avatar img {
    height: 100%;
    border-radius: 100%;
    background: #fff;
  }

  #dalao2333-content .dalao2333-item .dalao2333-name {
    float: left;
    width: calc(100% - 56px);
    margin-top: 6px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  #dalao2333-content .dalao2333-item .dalao2333-s {
    float: left;
    width: calc(100% - 56px);
    margin-top: 2px;
    box-sizing: border-box;
    padding: 0 10px;
    color: #656565;
  }

  #dalao2333-content .dalao2333-item .dalao2333-category {
    padding: 12px 10px;
    background-color: #f8f8f8;
  }

</style>
