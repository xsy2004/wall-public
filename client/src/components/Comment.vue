<template>
  <div>
    <ul v-for="comment in comment" :key="comment.time">
      <li>
        <div class="dalao2333-author">
          <div class="dalao2333-avatar"><img :src="comment.author.avatar"></div>
          <div class="dalao2333-name">{{ comment.author.name }} <span v-if="comment.parent!=='0'">回复</span> <a>{{ comment.parent.name }}</a></div>
          <div class="dalao2333-s"><span>{{ comment.time }}</span> <a @click="ereply(comment.coid,comment.author.name)">回复</a></div>
        </div>
        <div class="dalao2333-text">
          {{ comment.text }}
        </div>
        <Comment :comment="comment.children"></Comment>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Comment",
    props: ['comment'],
    data() {
      return {
      }
    },
    methods: {
      ereply(coid=0,name='本贴') {
        this.$prompt('你正在回复：' + name, '请输入评论内容', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '内容不可为空'
        }).then(({ value }) => {
          this.axios.post("/api/controller/reply/", {
            mid: this.$route.params.id,
            coid: coid,
            text: value,
          })
          .then((res) => {
            if (res.data.state == 1) {
              this.$alert(res.data.info, '发布成功！', {
                confirmButtonText: '确定',
                type: 'success',
              }).then(() => {
                location.reload()
              });
            } else {
              this.$alert(res.data.info, '发布失败！', {
                confirmButtonText: '确定',
                type: 'error'
              }).then(() => {
                if (res.data.state == 2){
                  this.$router.push('/login')
                }
              });
            }
          })
          .catch(function (error) {
            console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    },

  }

</script>

<style>
  #dalao2333-content .dalao2333-comment {
    background-color: #fff;
  }

  #dalao2333-content .dalao2333-comment .dalao2333-author {
    height: 42px;
    padding: 10px;
    padding-bottom: 0;
  }

  #dalao2333-content .dalao2333-comment .dalao2333-author .dalao2333-avatar {
    height: 100%;
    float: left;
  }

  #dalao2333-content .dalao2333-comment .dalao2333-author .dalao2333-avatar img {
    height: 100%;
    border-radius: 100%;
    background: #fff;
  }

  #dalao2333-content .dalao2333-comment .dalao2333-name,
  #dalao2333-content .dalao2333-comment .dalao2333-s {
    width: calc(100% - 56px);
    box-sizing: border-box;
    padding: 0 10px;
    float: left;
    margin-top: 0 !important;
    line-height: 21px;
    height: 21px;
  }
  
  #dalao2333-content .dalao2333-comment a {
    color: #ff7b8c;
  }

  #dalao2333-content .dalao2333-comment ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  #dalao2333-content .dalao2333-comment ul ul {
    padding-left: 52px;
  }

  #dalao2333-content .dalao2333-comment ul ul ul {
    padding-left: 0;
  }

  #dalao2333-content .dalao2333-comment ul li {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  #dalao2333-content .dalao2333-comment ul ul li {
    padding-bottom: 0;
    border-bottom: none;
  }

  #dalao2333-content .dalao2333-comment ul .dalao2333-text {
    padding-left: 62px;
    text-align: left;
  }

</style>
