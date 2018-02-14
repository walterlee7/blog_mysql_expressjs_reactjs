### Getting Started
Remember to run `npm install` to install all necessary dependencies.

### Careful!
Make sure you are always working within the front-end or back-end `src` directory. Stay out of the `dist` and `lib` directories, as their contents will be erased each time the source code is transpiled.

### Running
* To run the project during development (for automatic transpile and server restart), use `npm run dev`.
* `npm run start` will be used in a production environment. It transpiles once and does not look for changes.

### MySQL, ExpressJS, ReactJS, PassportJS Lab Assignment

Your Personal Blog!

Create a database named blog.
Create the following tables:
- Blogs
    - id
    - title
    - content
    - _created
- Authors
    - id
    - name
    - email
    - _created
- Tags
    - id
    - name
    - _created
- BlogTags
    - blogid
    - tagid
    - _created

Create a stored procedure named spBlogTags to pull back the tag names for a blog.

Paramater: blogid

Hint: You only need to join BlogTags and Tags.

Run: npm run dev

Go to http://localhost:3000 and make sure that the app is running.

Create the React front end:
    - Create a component to input blogs
    - Create a component to display an individual blog

Work on adding back-end authentication to the blog:
   - Should be able to login by sending a POST request to /api/auth/login that contains "email" and "password"
   - Should create tokens and respond with a token when you successfully login
   - Should protect certain routes in your API to require login
   - Should be able to attach the auth token as a Bearer token in Postman to test that authentication is working

Implement Front-End Auth on your blog:

    - Create an "admin" page that will allow you to create new blog posts and edit and delete existing ones
    - You may be able to link to your existing pages for editing and deleting posts
    - Make sure you protect your admin page, and the edit/delete pages (require login)

Any "admin-type" functionality should not be visible from the "public" pages. Those functions should only appear on the admin page(s):

    - Create a new post
    - Edit a post
    - Delete a post