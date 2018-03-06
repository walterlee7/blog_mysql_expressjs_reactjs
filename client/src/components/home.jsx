import React, { Component, Fragment } from 'react';
import AuthButton from './auth/authButton';
import BlogForm from './blogForm';
import BlogList from './blogList';
import * as blogService from '../services/blogs';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
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


    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navstrong">
                    <div className="container">
                        <a className="navbar-brand" href="/">Navigation</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/donate">Donate</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin">Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="masthead" style={{ backgroundImage: `url('img/home-bg.jpg')` }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Walt's Blog</h1>
                                    <span className="subheading">A Blog Theme with ExpressJS, ReactJS, and MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <BlogForm postBlog={(blog) => { this.addBlog(blog); }} />
                    <AuthButton />
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <BlogList blogs={this.state.blogs} />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Man must explore, and this is exploration at its greatest
                                    </h2>
                                    <h3 className="post-subtitle">
                                        Problems look mighty small from 150 miles up
                                    </h3>
                                </a>
                                <p className="post-meta">Posted by<a href="#">Navigation</a>on September 24, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                                    </h2>
                                </a>
                                <p className="post-meta">Posted by<a href="#">Navigation</a>on September 18, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Science has not yet mastered prophecy
              </h2>
                                    <h3 className="post-subtitle">
                                        We predict too much for the next year and yet far too little for the next ten.
              </h3>
                                </a>
                                <p className="post-meta">Posted by
              <a href="#">Navigation</a>
                                    on August 24, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Failure is not an option
              </h2>
                                    <h3 className="post-subtitle">
                                        Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
                                </a>
                                <p className="post-meta">Posted by
              <a href="#">Navigation</a>
                                    on July 8, 2018</p>
                            </div>
                            <hr />

                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fa fa-circle fa-stack-2x"></i>
                                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment >
        )

    }
}

export default Home;