export default {
  login: {
    noAuth: true,
    url: 'login',
    method: 'get',
  },
  register: {
    noAuth: true,
    url: 'register',
    method: 'post',
  },
  logout: {
    url: 'logout',
    method: 'put',
  },
  sendMsg: {
    url: 'sendMsg',
    method: 'patch',
  },
}
