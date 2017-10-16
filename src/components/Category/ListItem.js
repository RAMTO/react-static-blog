import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

const CategoryItem = styled.div`
    display: flex;
    height: 200px;
    margin-bottom: 10px;
    
    .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        overflow: hidden;
    }

    .title {
        font-size: 32px;
        font-weight: normal;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        transition: transform 0.3s ease;
        transform-origin: left bottom;
    }

    .image:hover .title {
        transform: scale(1.1);
    }
`

export default ({ category }) => {
    const { title, slug, image } = category.fields;
    const { url: imageUrl } = image.fields.file
    const link = `/categories/${slug}`;

    return(
        <CategoryItem url={imageUrl}>
            <Link className="image" to={link}>
                <span className="title">{title}</span>
            </Link>
        </CategoryItem>
    )
}