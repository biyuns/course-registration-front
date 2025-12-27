import axios from 'axios'
import CheckPassword from '../pages/CheckPassword';

const apiClient = axios.create({
  baseURL: 'https://13.125.89.234.nip.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  // 토큰이 존재하고, 문자열 'undefined'나 'null'이 아닐 때만 헤더 추가
  if (token && token !== "undefined" && token !== "null") {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // 토큰이 없으면 헤더에서 Authorization 항목을 제거 (혹은 설정 안 함)
    delete config.headers.Authorization;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export const authAPI = {
  login: (data) => apiClient.post('/login', data),   // 로그인
  signup: (data) => apiClient.post('/api/user/signup', data), // 회원가입
  signupcomplete: (data) => apiClient.get('/api/user/mypage', data),
  getMyReservations: () => apiClient.get('/api/reservations/myRV'),
  getLectureList: () => apiClient.get('/api/lectures/list'),
  getMyInfo: () => apiClient.get('/api/user/mypage'),
  checkPassword: () => apiClient.post('/api/user/verify-password'),
  changeInfo: (data) => apiClient.put('/api/user/mypage', data),
  changePassword: (data) => apiClient.patch('/api/user/password', data),
  regiInstructors: (data) => apiClient.post('/api/admin/instructors', data),
  regiSubjects: (data) => apiClient.post('/api/admin/subjects', data),
  regiClassrooms: (data) => apiClient.post('/api/admin/classrooms', data),
  deleteMySeat: (reservationId) => apiClient.delete(`/api/reservations/myRV/${reservationId}`),
  secessionUser: (data) => apiClient.delete('/api/user/mypage', data),
  instructorsAdd: () => apiClient.get('/api/admin/instructors'),
  subjectsAdd: () => apiClient.get('/api/admin/subjects'),
  classroomsAdd: () => apiClient.get('/api/admin/classrooms'),

  //관리자pg
  managerLectureList: (page) => apiClient.get(`/api/admin/lectures/all?page=${page}`),
  managerLectureRsvList: (lectureId) => apiClient.get(`/api/admin/lectures/${lectureId}/reservations`),
  managerLectureUserDelete: (reservationId) => apiClient.delete(`/api/admin/reservations/${reservationId}`),
  managerDeleteLecture: (lecktureId) => apiClient.delete(`/api/admin/lectures/${lecktureId}`),
  managerUserList: () => apiClient.get('/api/admin/users'),
  managerAcessUserList: () => apiClient.get('/api/admin/users/pending'),
  managerAcessUser: (userId) => apiClient.patch(`/api/admin/users/${userId}/approve`),
  searchRsvUser: (lecktureId, nickname) => apiClient.get(`/api/admin/lectures/${lecktureId}/reservations?nickname=${nickname}`),
  searchUser: (nickname) => apiClient.get(`/api/admin/users?nickname=${nickname}&page=0`),
  lectureRegi: (data) => apiClient.post('/api/admin/lectures', data),
  checkLectureInfo: (lectureId) => apiClient.get(`/api/admin/lectures/${lectureId} `),
  modiLectureInfo: (lectureId, data) => apiClient.get(`/api/admin/lectures/${lectureId} `, data),

};

export default apiClient;