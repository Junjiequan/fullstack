# Product feedback app - full stack [Link](https://fullstack-product-feedback-app.herokuapp.com/)

## Requirements
Users should be able to

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests
- Bonus: Keep track of any changes, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)

Extra
- Integrated with REST API to handle CRUD behaviors
- MongoDB as Database to store DATA
- Signup feature with Login authentication
- Available for uploading customized avatar when signup
- Display user profile (so far it only shows avatar and username)


## Install
```
git@github.com:a331998513/fullstack.git
cd fullstack/client (front-end)
cd fullstack/server (back-end)
```

## NPM
```
npm install
```

## Run app locally
```
npm run start  (client)
npm run server (server)
```

### If typescript error pops up after `npm run start` with client side, create .env in the `/client` folder and include the text below
```
SKIP_PREFLIGHT_CHECK=true
```


## Link
- [Live](https://fullstack-product-feedback-app.herokuapp.com/)
- [Code](https://github.com/a331998513/fullstack)

## Built with

**Client**
- Create-react-app
- Styled-components
- Redux-thunk
- Framer-motion
- React-toastify
- Typescript
- axios
- nanoid
- Material-ui
- Hamburger-react

**Server**
- NodeJS
- mongoose
- Express
- cookie-parser
- jsonwebtoken
- bcrypt
- cors

## Author
- [Portfolio website](https://a331998513.github.io/jay/))
- [Front end mentor](https://www.frontendmentor.io/profile/a331998513)




