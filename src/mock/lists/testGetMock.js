const testGetMockFn = () => {
  return {
    code:'000000',
    msg:'success',
    data:{

    },
    title:'mock test get mock'
  }
}


export default{
  url:'/testGetMock',
  methods:'get',
  fn:testGetMockFn
}