const initialState = {
  singup: false,
  token: null,
  isvalid: false,
  data: {},
  popular: []
};

const userReducer = (user = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload.data);
      return {
        ...user,
        token: action.payload.token,
        data: action.payload.data
      };
    case "SIGNUP":
      return {
        ...user,
        signup: action.payload
      };
    case "ISVALID":
      return {
        ...user,
        isvalid: action.payload
      };
    case "GETDATA":
      return {
        ...user,
        data: action.payload
      };
    case "POPULAR":
      return {
        ...user,
        popular: action.payload
      };
    default:
      return user;
  }
};

export default userReducer;
