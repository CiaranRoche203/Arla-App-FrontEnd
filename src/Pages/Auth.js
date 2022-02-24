// authenticating the user
const Auth = {
  //set as false at first
  isAuthenticated: false,
  //when authenticated set to true
  authenticate() {
    this.isAuthenticated = true;
  },
  //when signed out set back to false
  signout() {
    this.isAuthenticated = false;
  },
  //get the state
  getAuth() {
    return this.isAuthenticated;
  }
};

export default Auth;