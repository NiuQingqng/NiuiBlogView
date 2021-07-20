import {request} from "./request"
export function getArticleFindAll() {
    return request({
        url: 'article/findall'
    })
}