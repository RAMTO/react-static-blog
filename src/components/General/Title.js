import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

const Title = styled.div`
    .title-link {
        color: #333138;
        font-size: ${props => props.type === 'primary' ? '48px' : '24px'};
    }
`

export default ({ children, to, type }) => (
    <Title type={type}>
        <Link className="title-link" to={to}>
            {children}
        </Link>
    </Title>
)