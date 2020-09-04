<template>
  <div class="login">
    <h1>Login</h1>
    <div class="main">
      <input v-model="username" type="text" placeholder="用户名"><br>
      <input v-model="password" type="text" placeholder="密码"><br>
    </div>
    <div class="btn">
      <button @click="login()">
        <i class="iconfont icon-saoyisao"></i>
        登陆
        </button>
    </div>
    <div class="test">
      <button @click="testPost()">test post</button>
      <button @click="testGet()">test get</button>
      <button @click="testPostMock()">test post mock</button>
      <button @click="testGetMock()">test get mock</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'first',
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    async login(){
      if(!this.username || !this.password){
        console.log('用户名或密码不能为空！')
        alert('用户名或密码不能为空！')
        return;
      }
      const params = {
        username:this.username,
        userpwd:this.password
      }
      try {
        const result = await this.$http.login(params);
        if(result.code === '000000'){
          console.log(result)
          // this.$router.push({
          //   path:'/success'
          // })
        }else{
          console.log()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async testPost(){
      const params = {
        username:this.username,
        userpwd:this.password
      }
      try {
        const result = await this.$http.testPost(params);
        if(result.code === '000000'){
          console.log(result)
          // this.$router.push({
          //   path:'/success'
          // })
        }else{
          console.log()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async testGet(){
      const params = {
        username:this.username,
        userpwd:this.password
      }
      try {
        const result = await this.$http.testGet(params);
        if(result.code === '000000'){
          console.log(result)
          // this.$router.push({
          //   path:'/success'
          // })
        }else{
          console.log()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async testPostMock(){
      const params = {
        username:this.username,
        userpwd:this.password
      }
      try {
        const result = await this.$http.testPostMock(params);
        if(result.code === '000000'){
          console.log(result)
          // this.$router.push({
          //   path:'/success'
          // })
        }else{
          console.log()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async testGetMock(){
      const params = {
        username:this.username,
        userpwd:this.password
      }
      try {
        const result = await this.$http.testGetMock(params);
        if(result.code === '000000'){
          console.log(result)
          // this.$router.push({
          //   path:'/success'
          // })
        }else{
          console.log()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  padding: .3rem;
  text-align: center;
  .main{
    margin-top: 1rem;
    input{
      width: 80%;
      height: 2rem;
      line-height: 2rem;
      border: 1px solid #ccc;
      padding-left: .5rem;
      outline: none;
    }
  }
  .btn{
    margin-top: 1rem;
    button{
      width: 4rem;
      height: 1.6rem;
      border: 0;
      background-color: cornflowerblue;
      color: #fff;
      outline: none;
      border-radius: 0.2rem;
    }
  }
  .test{
    margin-top: 1rem;
    button{
      padding: 0.5rem;
      border: 0;
      background-color: cornflowerblue;
      color: #fff;
      outline: none;
      border-radius: 0.2rem;
    }
  }
}
</style>