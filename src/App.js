import React from 'react'
import { Router, Route, Switch, Redirect, Link } from 'react-static'
import { injectGlobal, ThemeProvider } from 'styled-components'
//
import Home from 'containers/Home'
import About from 'containers/About'
import Blog from 'containers/Blog'
import Categories from 'containers/Categories'

import Menu from 'components/General/Menu'

const theme = {
    colors: {
        primary: '#4ECDC4',
        secondary: '#4C6270'
    },
    fontFace: {
        titles: '',
        body: '',
    }
}

injectGlobal`
    body {
        font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
            'Lucida Grande', sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Ovo', serif;
    }

    h1 {
        font-size: 72px;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    .title-main {
        font-size: 52px;
    }

    .title-lead {
        font-size: 24px;
        line-height: 1.4;
    }

    .text-body {
        font-size: 21px;
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        color: #108db8;
        font-weight: bold;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .container-wrapper {
        padding: 0 32px;
    }

    @media (min-width: 1170px) {
        .container-wrapper {
            max-width: 1170px;
            margin: 0 auto;
        }
    }
`

export default () => (
    <Router>
        <ThemeProvider theme={theme}>
            <div>
                <Menu />
                <div className="container-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/categories" component={Categories} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
    </Router>
)
