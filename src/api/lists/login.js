import request from '@/utils/request'

class Login{
  index(param){
    return request({
      url: '/users/login',
      method: 'post',
      param
    })
  }
  getAllUsers(){
    return request({
      url:'/users/getAllUsers',
      method:'get'
    })
  }
}


export default new Login()