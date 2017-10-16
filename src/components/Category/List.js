import React from 'react'
import styled from 'styled-components'

import CategoryListItem from './ListItem'

const CategoryList = styled.div`
    @media (min-width: 770px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`

export default ({ categories }) => {
    const categoryList = categories.map(category => <CategoryListItem key={category.fields.slug} category={category} />)
    
    return <CategoryList>{categoryList}</CategoryList>
}