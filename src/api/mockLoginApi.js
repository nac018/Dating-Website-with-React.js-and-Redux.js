import delay from './delay';

class LoginApi {
  static login(account) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(account);
      }, delay);
    });
  }
}

export default LoginApi;
