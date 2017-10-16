import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const List = styled.div`

`

export default ({ items, fields }) => {
    const itemList = items.map((item, index) => <Item key={index} item={item} fields={fields} />)

    return (
        <List>
            {itemList}
        </List>
    )
}