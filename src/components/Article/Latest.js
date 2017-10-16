import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import ArticleListItem from './ListItem'

const LatestArticles = styled.div`
    display: flex;
    flex-direction: column;
    
    .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 200px;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        overflow: hidden;
    }

    .title {
        font-size: 18px;
        font-weight: normal;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        margin: 0;
        padding: 10px;
        transition: transform 0.3s ease;
        transform-origin: left bottom;
    }

    .image:hover .title {
        transform: scale(1.1);
    }
`

export default ({ articles }) => {
    
    
    return(
        <LatestArticles>
            
        </LatestArticles>
    )
}