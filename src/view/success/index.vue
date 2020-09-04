<template>
  <div class="success">
    <h1>Success</h1>
    <div class="main">
      <img src="./../../static/images/user.png" alt="头像">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
.success{
  text-align: center;
  .main{
    img{
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
}

</style>