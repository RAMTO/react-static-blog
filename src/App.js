import React from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Blog from 'containers/Blog'
import Categories from 'containers/Categories'

injectGlobal`
    body {
        font-family: 'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
            'Lucida Grande', sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Droid Serif', serif;
    }

    h1 {
        font-size: 72px;
    }

    * {
        box-sizing: border-box;
    }
`

const AppStyles = styled.div`
    a {
        text-decoration: none;
        color: #108db8;
        font-weight: bold;
    }

    nav {
        width: 100%;
        background: #108db8;

        a {
            color: white;
            padding: 1rem;
            display: inline-block;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .content {
        padding: 1rem;
    }
`

export default () => (
    <Router>
        <AppStyles>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </AppStyles>
    </Router>
)
