# Product feedback app - full stack [Link](https://fullstack-product-feedback-app.herokuapp.com/)

## Encountered problems
- How to restrict uploaded file format to accept image/* only with React File Base64 package? or is there any other simple way to encode images to base64 string? or maybe more efficient way to save images to server?
  -   This problem is solved by created a Regex validation to check uploaded file format `validate: /^data:image|\.(png)$/i` .png is for default image url whereas other format is no need to take into condeisration as all the uploaded file will be conveted into`data:format` 
- Authentication token is not able to send to cookie with Chrome unless `sameSite:"none", secure:true` is set. I have no idea whether it is the proper way to avoid sameSite issues with Chrome. 



## Things need to be improved
- Voting system uses localStorage to verify whether its upvoted, instead of checking by IP. This is probably something that needs to be improved in the future.
- Logout does not empty user profile state (So far it didn't cause any issues). Logged status changes based on Log in/out activities though. This can be improved by adding extra action ("REMOVE_USER") for userReducer to empty user profile state.
- addComment including DirecReply and InnerReply server-side as well as client-side error catching did not create.
