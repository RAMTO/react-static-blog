import React from 'react'
import { getRouteProps, Link, Switch, Route, Head } from 'react-static'

import Category from '../components/Category/Category'
import CategoryList from '../components/Category/List'

export default getRouteProps(({ match, categories }) => {
    return (
        <Switch>
            <Route path={match.url} exact render={() => (
                <div>
                    <Head>
                        <title>React Blog - Categories</title>
                    </Head>
                    <h1>Categories:</h1>
                    <CategoryList categories={categories} />
                </div>
            )} />
            <Route path={`${match.url}/:slug`} component={Category} />
        </Switch>
    )
})