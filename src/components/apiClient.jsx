import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://13.125.89.234.nip.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authAPI = {
    login: (data) => apiClient.post('/login', data),   // 로그인
    signup: (data) => apiClient.post('/api/user/signup', data), // 회원가입
    signupcomplete: (data) => apiClient.get('/api/user/mypage', data),
    getMyReservations: () => apiClient.get('/api/reservations/myRV'),
    getLectureList: () => apiClient.get('/api/lectures/list'),
};

export default apiClient;