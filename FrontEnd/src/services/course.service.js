import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/';

class CourseService {
  getCourseLiveFeed(courseId) {
    const url = API_URL + 'courseContent/livefeed/' + courseId;
    return axios.get(url, { headers: authHeader() });
  }

}
export default new CourseService();