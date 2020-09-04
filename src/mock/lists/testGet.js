const testGetFn = () => {
  return {
    code:'000000',
    msg:'success',
    data:{

    },
    title:'mock test get'
  }
}


export default{
  url:'/testGet',
  methods:'get',
  fn:testGetFn
}