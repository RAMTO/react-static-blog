import React from 'react'
import { getRouteProps, Link } from 'react-static'
import ReactMarkdown from 'react-markdown'

export default getRouteProps(({ post }) => {
    return (
        <div>
            <Link to="/blog">{'<'} Back</Link>
            <br />
            <h2>{post.fields.title}</h2>
            <h3 type="secondary">{post.fields.description}</h3>
            <img src={post.fields.heroImage.fields.file.url} />
            <ReactMarkdown source={post.fields.body} />
        </div>
    )
})
