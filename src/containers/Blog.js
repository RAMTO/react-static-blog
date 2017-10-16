/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Switch, Route, Link } from 'react-static'

import Post from './Post'
import ArticleList from '../components/Article/List'

export default getRouteProps(({ match, posts }) => (
    <Switch>
        <Route path={match.url} exact render={() => (
                <div>
                    <h1>It's blog time.</h1>
                    <br />
                    All Posts:
                    <ArticleList articles={posts} />
                </div>
            )}
        />
        <Route path={`${match.url}/post/:slug`} component={Post} />
    </Switch>
))
