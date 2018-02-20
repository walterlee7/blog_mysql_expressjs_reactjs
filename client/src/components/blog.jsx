import React from 'react';
import EditButton from './editButton';

const Blog = (props) => {
    return (
        <React.Fragment>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {props.blog.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {props.blog.content}
                    </h3>
                </a>
                <p className="post-meta">Posted by {props.blog.user} on {props.blog._created}</p>
                <EditButton id={props.index} />
            </div>
            <hr />
        </React.Fragment>
    );
};

export default Blog;
