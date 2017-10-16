import React from 'react'
import styled from 'styled-components'
import { getRouteProps } from 'react-static'

import ArticleList from '../Article/List'

const CategoryPage = styled.div`
    .cover {
        width: 100%;
        height: 200px;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        margin-bottom: 24px;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        align-items: flex-end;
    }

    .cover-title {
        margin: 0;
        font-size: 32px;
    }

    @media (min-width: 770px) {
        .cover-title {
            font-size: 48px;
        }
    }
`
export default getRouteProps(({ category, articles }) => {
    const { title, image } = category.fields
    const { file: { url: imageUrl } } = image.fields

    return (
        <CategoryPage url={imageUrl}>
            <div className="cover">
                <h1 className="cover-title">{title}</h1>
            </div>
            <ArticleList articles={articles} />
        </CategoryPage>
    )
})