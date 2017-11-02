import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

const ArticleItem = styled.div`
    display: flex;
    flex-direction: column;
    
    .image {
        width: 100%;
        height: 200px;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        overflow: hidden;
        margin-bottom: 8px;
    }

    .title {
        font-size: 18px;
        font-weight: normal;
        margin: 0;
        transition: transform 0.3s ease;
        transform-origin: left bottom;
        color: ${props => props.theme.colors.secondary};

        &:hover {
            text-decoration: underline;
        }
    }
`

export default ({ article }) => {
    const { title, slug, heroImage, description, body, category } = article.fields;
    const { url: imageUrl } = heroImage.fields.file
    const link = `/blog/post/${slug}`;
    
    return(
        <ArticleItem url={imageUrl}>
            <Link className="image" to={link}>
            </Link>
            <Link className="title" to={link}>
                {title}
            </Link>
        </ArticleItem>
    )
}