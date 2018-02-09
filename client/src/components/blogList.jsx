import React, { Component, Fragment } from 'react';
import Blog from './blog';

class BlogList extends Component {

    render() {

        return (
            <Fragment>
                {this.props.blogs.map((blog) => {
                    return (
                        <Blog key={blog.id} blog={blog} index={blog.id} />
                    );
                })}
            </Fragment>
        );
    }
}

export default BlogList;
