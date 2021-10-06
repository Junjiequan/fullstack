const userReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
