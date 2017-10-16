import React from 'react'
import styled from 'styled-components'

import ArticleListItem from './ListItem'

const ArticleList = styled.div`
    @media (min-width: 770px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
    }

    @media (min-width: 1170px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default ({ articles }) => {
    const articleList = articles.map(article => <ArticleListItem key={article.fields.slug} article={article} />)
    
    return articleList.length > 0 ? 
        <ArticleList>{articleList}</ArticleList> : <p>No articles</p>
}