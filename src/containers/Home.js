import React from 'react'
import { getRouteProps, Link, Head } from 'react-static'

import LatestArticles from '../components/Article/List'
import CategoryList from '../components/Category/List'
import List from '../components/General/List'

export default getRouteProps(({ categories, posts }) => {
    return (
        <div>
            <Head>
                <title>React Blog - Home</title>
            </Head>
            <h1>Welcome to my blog</h1>
            <h2>Check out these categories:</h2>
            {<CategoryList categories={categories} />}
            <h2>Check out latest posts:</h2>
            {<LatestArticles articles={posts} />}
            {/* <List items={categories} fields={['title', 'slug', 'image']} /> */}
        </div>
    )
})
