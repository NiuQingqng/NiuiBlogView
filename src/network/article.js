import {request} from "./request"
export function getArticleFindAll() {
    return request({
        url: 'article/findall'
    })
}
export function getArticleFindOneDetail(articleId) {
    return request({
        url: 'article/findonedetail',
        params: {
            articleId
        }
    })
}

export function saveArticle(articleUserId,articleCategoryId,articleTitle,articleContent,articleSummary) {
    return request({
        url: 'article/savearticle',
        params: {
            articleUserId,
            articleCategoryId,
            articleTitle,
            articleContent,
            articleSummary
        }
    })
}

export function delArticle(articleId) {
    return request({
        url: 'article/delarticle',
        params: {
            articleId
        }
    })
}