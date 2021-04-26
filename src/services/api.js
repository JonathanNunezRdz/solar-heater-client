import Axios from 'axios';

const api = Axios.create({
	baseURL: 'http://192.168.0.116:5000',
});

export default api;
