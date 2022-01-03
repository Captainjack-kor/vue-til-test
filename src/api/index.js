import axios from 'axios';

// 공통 설정을 미리 정의한다.
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
