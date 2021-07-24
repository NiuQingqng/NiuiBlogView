import {request} from "./request"
export function getUserFindOneDetail(userId) {
    return request({
      url: 'user/findonedetail',
      params: {
        userId
      }
    })
}
export function getUserLogin(userName,userPassword) {
  return request({
    url: 'user/login',
    params: {
      userName,
      userPassword
    }
  })
}