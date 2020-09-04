
import request from './../utils/request'

/**
 * login
 * @param {object} data 
 */
export function login (data){
  return request({
    url:'/login',
    method:'post',
    data
  })
}

/**
 * testPost
 * @param {object} data 
 */
export function testPost (data){
  return request({
    url:'/testPost',
    method:'post',
    data
  })
}

/**
 * testPostMock
 * @param {object} data 
 */
export function testPostMock (data){
  return request({
    url:'/testPostMock',
    method:'post',
    data
  })
}


/**
 * testGet
 * @param {object} data 
 */
export function testGet (data){
  return request({
    url:'/testGet',
    method:'get',
    data
  })
}


/**
 * testGetMock
 * @param {object} data 
 */
export function testGetMock (data){
  return request({
    url:'/testGetMock',
    method:'get',
    data
  })
}

