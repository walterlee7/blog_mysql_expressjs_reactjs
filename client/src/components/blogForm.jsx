import React, { Component } from 'react';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    handleInputTitleChange(title) {
        this.setState({ title });
    };

    handleInputContentChange(content) {
        this.setState({ content });
    };

    render() {
        return (
            <React.Fragment>
                <form className="card p-3 m-1">
                    <label
                        htmlFor="blog-input"
                        className="d-block m-2">Create a Blog: (Login Required)
                </label>
                    <input
                        value={this.state.title}
                        onChange={(event) => { this.handleInputTitleChange(event.target.value) }}
                        className="form-control w-70 m-2 d-inline"
                        placeholder="Your Blog Title..."
                    />
                    <input
                        value={this.state.content}
                        onChange={(event) => { this.handleInputContentChange(event.target.value) }}
                        className="form-control w-70 m-2 d-inline"
                        placeholder="Your Blog Text..."
                    />
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Choose Tag</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button
                        onClick={() => { this.props.postBlog(this.state) }}
                        type="button"
                        className="btn btn-primary m-2">Post Blog!
                </button>
                </form>
            </ React.Fragment>
        );
    };
}

export default BlogForm;
