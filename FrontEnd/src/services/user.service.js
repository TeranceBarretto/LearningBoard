import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/';

class UserService {
  getUserProfile() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getUserSchedule(userId) {
    const url = API_URL + 'schedule/' + userId;
    return axios.get(url, { headers: authHeader() });
  }

}

export default new UserService();