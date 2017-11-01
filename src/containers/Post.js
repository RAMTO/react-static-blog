import React from 'react'
import { getRouteProps, Link, Head } from 'react-static'
import ReactMarkdown from 'react-markdown'

export default getRouteProps(({ post }) => {
    return (
        <div>
            <Head>
                <title>{post.fields.title} at React Blog</title>
            </Head>
            <h2 className="title-main">{post.fields.title}</h2>
            <h3 className="title-lead">{post.fields.description}</h3>
            <img src={post.fields.heroImage.fields.file.url} />
            <ReactMarkdown className="text-body" source={post.fields.body} />
        </div>
    )
})
