import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

const Menu = styled.nav`
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    position: sticky;
    top: 0;
    z-index: 1;
    
    .container-wrapper {
        position: absolute;
        transform: translateY(-150%);
        opacity: 0;
        padding: 0;
        width: 100%;
        z-index: 0;
        background-color: #fff;
        border-bottom: 2px solid ${props => props.theme.colors.primary};
        transition: transform 0.3s ease,
                    opacity 0.3s ease;
    }

    &.is-open {
        .container-wrapper {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .menu-item {
        display: block;
        color: ${props => props.theme.colors.secondary};
        padding: 1rem;
        text-transform: uppercase;
        border-top: 1px solid ${props => props.theme.colors.primary};
    }

    .menu-close {
        display: inline-block;
        cursor: pointer;
        padding: 16px;
    }

    @media (min-width: 770px) {
        position: sticky;
        top: 0;

        .container-wrapper {
            position: relative;
            border-bottom: 0;
            transform: translateY(0);
            padding: 0 32px;
            opacity: 1;
        }

        .menu-item {
            display: inline-block;
            border-top: 0;
        }

        .menu-close {
            display: none;
        }
    }
`

export default class MenuWrapper extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        console.log(this.state.isOpen)
    }

    toggleMenu() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen}))
    }

    render () {
        const { isOpen } = this.state;
        const customClass = isOpen ? 'is-open' : ''

        return (
            <Menu className={customClass}>
                <span className="menu-close" onClick={() => this.toggleMenu()}>
                    <svg height="32px" id="Layer_1" viewBox="0 0 32 32" width="32px">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                    </svg>
                </span>
                <div className="container-wrapper">
                    <Link onClick={() => this.toggleMenu()} className="menu-item" to="/">Home</Link>
                    <Link onClick={() => this.toggleMenu()} className="menu-item" to="/categories">Categories</Link>
                    <Link onClick={() => this.toggleMenu()} className="menu-item" to="/about">About</Link>
                    <Link onClick={() => this.toggleMenu()} className="menu-item" to="/blog">Blog</Link>
                </div>
            </Menu>
        )
    }
}