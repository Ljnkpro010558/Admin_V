  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem("accessToken") || null;
  };
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem("accessToken");
  };
  
  // set the token and user from the session storage
  export const setUserSession = (accessToken) => {
    sessionStorage.setItem("accessToken", accessToken);
  };

const API = "";
  export const GetAPI = () => {
    return API;
  };
  