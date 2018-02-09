# Covalence Full Stack Project Boilerplate
This boilerplate includes build scripts and setup for a ReactJS front-end and an ExpressJS back-end.

### Getting Started
Remember to run `npm install` to install all necessary dependencies.

### Careful!
Make sure you are always working within the front-end or back-end `src` directory. Stay out of the `dist` and `lib` directories, as their contents will be erased each time the source code is transpiled.

### Running
* To run the project during development (for automatic transpile and server restart), use `npm run dev`.
* `npm run start` will be used in a production environment. It transpiles once and does not look for changes.

Lab Assignment
REQUIRED

Your Personal Blog!

Create a database named blog
Create the following tables
Blogs
id
title
content
_created
Authors
id
name
email
_created
Tags
id
name
_created
BlogTags
blogid
tagid
_created
Create a stored procedure named spBlogTags to pull back the tag names for a blog
Paramater: blogid
Hint: You only need to join BlogTags and Tags
Clone the create-react-boilerplate
https://github.com/covalence-io/covalence-react-bo...
Once you've cloned the repository:
Important: If you don't feel comfortable with the following instructions, please reach out to someone.
The purpose of these instructions is to disconnect git and reconnect it to your own git repo that is unrelated to the boilerplate repo.
cd into the cloned folder
Run: git checkout db
Run: rm -rf .git
Run: git init
Run the server
Run: npm install
Run: npm run bulid:server
Run: npm run dev
Go to http://localhost:3000 and make sure that the app is running
Create the React front end:
Create a component to input blogs
Create a component to display an individual blog