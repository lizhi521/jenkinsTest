const testPostMockFn = () => {
  return {
    code:'000000',
    msg:'success',
    data:{

    },
    title:'mock test post mock'
  }
}


export default{
  url:'/testPostMock',
  methods:'post',
  fn:testPostMockFn
}