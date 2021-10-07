# Product feedback app - full stack [Link](https://fullstack-product-feedback-app.herokuapp.com/)

## Encountered problems
- How to restrict uploaded file format to accept image/* only with React File Base64 package? or is there any other simple way to encode images to base64 string? or maybe more efficient way to save images to server?



## Things need to be improved
- Voting system uses localStorage to verify whether its upvoted, instead of checking by IP. This is probably something that needs to be improved in the future.
- Logout does not empty user profile state (So far it didn't cause any issues). Logged status changes based on Log in/out activities though. This can be improved by adding extra action ("REMOVE_USER") for userReducer to empty user profile state.
- addComment including DirecReply and InnerReply server-side as well as client-side error catching did not create.
