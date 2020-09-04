const Mock = require('mockjs')
import testPost from './lists/testPost'
import testPostMock from './lists/testPostMock'
import testGet from './lists/testGet'
import testGetMock from './lists/testGetMock'

// const API_ROOT = process.env.VUE_APP_BASE_API
const API_ROOT = 'http://localhost:3005'


const requestList = [
  // testPost,
  testPostMock,
  // testGet,
  testGetMock
]


requestList.forEach(item => {
  Mock.mock(API_ROOT + item.url,item.methods,item.fn)
})