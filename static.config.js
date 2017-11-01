import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { createClient } from 'contentful'

// To be moved into config file
const client = createClient({
    space: 'kskdk14k06io',
    accessToken: '4ccb9eadaae53dd0491b79eb8c86ff328e79ab28d32649b518f39e9a6d8749f6'
})

const latestArticles = 2

export default {
    getRoutes: async () => {
        const { items: categories } = await client.getEntries({
            content_type: 'category'
        })
        const { items: posts } = await client.getEntries({
            content_type: 'blogPost'
        })
        const { items: latestPosts } = await client.getEntries({
            content_type: 'blogPost',
            limit: latestArticles,
            order: '-sys.createdAt'
        })

        function makeChildrenCategories() {
            let childrenList = categories.map(category => ({
                path: `/${category.fields.slug}`,
                getProps: async () => {
                    const { items: articles } = await client.getEntries({
                        'content_type': 'blogPost',
                        'fields.category.sys.contentType.sys.id': 'category',
                        'fields.category.fields.title[match]': category.fields.title
                    });
                    
                    return {
                        category,
                        articles
                    }
                }
            }))

            return childrenList
        }

        function makeChildrenPosts() {
            let childrenList = posts.map(post => ({
                path: `/post/${post.fields.slug}`,
                getProps: () => ({post})
            }))

            return childrenList
        }

        const routeList = [
            {
                path: '/',
                getProps: () => ({categories, posts: latestPosts})
            },
            {
                path: '/categories',
                getProps: () => ({categories}),
                children: makeChildrenCategories()
            },
            {
                path: '/about'
            },
            {
                path: '/blog',
                getProps: () => ({posts}),
                children: makeChildrenPosts()
            }
        ]
        
        routeList.forEach(route => {
            // console.log(route.path, route.children)
        })

        return routeList
    },
    Html: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children } = this.props

            const sheet = new ServerStyleSheet()
            const newChildren = sheet.collectStyles(children)
            const styleTags = sheet.getStyleElement()

            return (
                <Html>
                    <Head>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        
                        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
                        <meta name="HandheldFriendly" content="true" />
                        <meta name="MobileOptimized" content="320" />
                        <meta name="format-detection" content="telephone=no" />

                        <title>React Blog - Home</title>
                        <meta name="description" content="{{{meta.description}}}" />

                        <meta property="og:title" content="" />
                        <meta property="og:type" content="website" />
                        <meta property="og:image" content="" />
                        <meta property="og:description" content="" />

                        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
                        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.ico" />

                        {styleTags}
                    </Head>
                    <Body>{newChildren}</Body>
                    <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Roboto" rel="stylesheet" />
                </Html>
            )
        }
    }
}
