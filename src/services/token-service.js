import config from '../config';

const TokenService = {
    //accepts token variable (a string) & stores in locale storage (TOKEN_KEY)
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  //combines into 1 string with colon in between words
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`)
  },
}

export default TokenService;
