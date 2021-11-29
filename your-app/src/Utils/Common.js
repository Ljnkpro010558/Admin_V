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

  const APILogin = "http://192.168.1.8:3000/users/sign-in";

  export const GetAPILogin = () => {
    return APILogin;
  };

  const APIMortor = 'http://192.168.1.8:3000/motors/61947c548a45f18778ccd8c9';
 
  export const GetAPILMortor = () => {
    return APIMortor;
  };

 
  