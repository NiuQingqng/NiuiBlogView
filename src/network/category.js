import {request} from "./request"
export function getCategoryFindAll() {
    return request({
        url: 'category/findall'
    })
}