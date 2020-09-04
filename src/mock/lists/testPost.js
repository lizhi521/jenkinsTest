const testPostFn = () => {
  return {
    code:'000000',
    msg:'success',
    data:{

    },
    title:'mock test post'
  }
}


export default{
  url:'/testPost',
  methods:'post',
  fn:testPostFn
}