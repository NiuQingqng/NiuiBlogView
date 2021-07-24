import {request} from "./request"
export function sendComment(commentUserId,commentArticleId,commentContent) {
    return request({
      url: 'comment/sendcomment',
      params: {
        commentUserId,
        commentArticleId,
        commentContent
      }
    })
}
export function delComment(commentId) {
  return request({
    url: 'comment/delcomment',
    params: {
      commentId
    }
  })
}
