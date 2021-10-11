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

## Format
`Prettier` VS-code extension

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
- [Portfolio website](https://www.jayyy.site/)
- [Front end mentor](https://www.frontendmentor.io/profile/a331998513)





------------------------------------------------------------------------------------------------------------------------------------------------


## Encountered problems
- How to restrict uploaded file format to accept image/* only with React File Base64 package? or is there any other simple way to encode images to base64 string? or maybe more efficient way to save images to server?
  -   This problem is solved by create a Regex validation to check uploaded file format `validate: /^data:image|\.(png)$/i` .png is for default image url whereas other format is no need to take into condeisration as all the uploaded file will be conveted into`data:format` 
- Authentication token is not able to send to cookie with Chrome unless `sameSite:"none", secure:true` is set. I have no idea whether it is the proper way to avoid sameSite issues with Chrome. 



## Things need to be improved
- Voting system uses localStorage to verify whether its upvoted, instead of checking by IP. This is probably something that needs to be improved in the future.
- Logout does not empty user profile state (So far it didn't cause any issues). Logged status changes based on Log in/out activities though. This can be improved by adding extra action ("REMOVE_USER") for userReducer to empty user profile state.
- addComment including DirecReply and InnerReply server-side as well as client-side error catching did not create.
