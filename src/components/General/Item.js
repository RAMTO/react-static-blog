import React from 'react'
import styled from 'styled-components'

import Title from './Title'

import { getDataFromItem } from '../../utils/functions'

const Item = styled.div`
    
`

export default ({ item, fields }) => {
    const data = getDataFromItem(item, fields)

    return (
        <Item>
            <Title type="primary" to={`/categories/${data.slug}`}>{data.title}</Title>
        </Item>
    )
}