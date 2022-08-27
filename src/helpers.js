import axios from './api/axios'


export const currentUser = () => {
  const USER_URL = '/member/data';
  return axios.get(
          USER_URL,
          {
            headers: {'Authorization': localStorage.token,
                      'Content-Type': 'application/json'},
            withCredentials: false,
          }
  )
  .then(response => {
    return response.data.user;
  })
  .catch(err => {
    console.log(err);
  })
};

export const logOut = () => {
  
  const LOGOUT_URL = '/users/sign_out';
  return axios.delete(
    LOGOUT_URL,
    {
      headers: {'Authorization': localStorage.token,
      'Content-Type': 'application/json'},
    }
  )
  .then(response => {
    console.log(response);
    localStorage.clear();
    return response;
  })
  .catch(err => {
    console.log(err);
  })
};