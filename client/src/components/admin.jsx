import React, { Component } from 'react';
import BlogForm from './blogForm';
import BlogList from './blogList';
import AuthButton from './auth/authButton';
import * as blogService from '../services/blogs';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {
                title: '',
                content: '',
                id: 1
            },
            blogs: []
        };
    }

    componentDidMount() {
        this.getBlogs();
    }

    getBlogs() {
        blogService.all()
            .then((blogs) => {
                this.setState({
                    blogs
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(blog) {
        blogService.insert(blog)
            .then(() => {
                console.log(blog);
                this.getBlogs();
            }).catch((err) => {
                console.log(err);
            });
    }


    updateBlog(blog) {
        blogService.update(this.props.match.params.id, blog)
            .then(() => {
                this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            });
    }

    deleteBlog() {
        blogService.destroyAll()
            .then(() => {
                console.log('delete complete');
                this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <BlogForm postBlog={(blog) => { this.addBlog(blog); }} />
                    <AuthButton />
                    <div>
                        <button className="delete"
                            onClick={() => { this.deleteBlog(); }}>Delete All Blogs
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <BlogList blogs={this.state.blogs} />
                        </div>
                    </div>
                </div>
            </ React.Fragment>
        );
    }
}

export default Admin;