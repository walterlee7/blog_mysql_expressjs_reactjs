import React, { Component } from 'react';
import BlogForm from './blogForm';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [
                {
                    title: '',
                    content: '',
                    id: 1
                },
            ]
        };
    }

    componentDidMount() {
        this.getBlogs();

    }

    getBlogs() {
        fetch('/api/blogs/')
            .then((response) => {
                return response.json();
            }).then((blogs) => {
                this.setState({
                    blogs
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    updateBlog(blog) {

        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("update clicked");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteBlog() {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            console.log("delete success");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        //console.log(this.props.match.params.id);
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.blogs.map((blog, index) => {
                        if (blog.id == this.props.match.params.id) {
                            return (
                                <div key={index} className="post-preview">
                                    <a href="post.html">
                                        <h2 className="post-title">
                                            {blog.title}
                                        </h2>
                                        <h3 className="post-subtitle">
                                            {blog.content}
                                        </h3>
                                    </a>
                                    <p className="post-meta">Posted by on {blog._created}</p>
                                </div>
                            );
                        }
                    })}
                    <BlogForm postBlog={(blog) => { this.updateBlog(blog); }} />
                    <div>
                        <button id={this.state.blogs.id} className="delete"
                            onClick={() => { this.deleteBlog(); }}>Delete Blog
                        </button>
                    </div>
                </div>
            </ React.Fragment>
        );
    }
}

export default Edit;