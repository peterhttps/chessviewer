import api from './api';

const getUser = (email, password) => {
  const token = localStorage.getItem('token');

  return api.get('/user/profile', {
    headers: {
      authorization: token
    }});
}

const registerUser = (email, nome, password) => {
  return api.post('/register', {
    Email: email,
    Nome: nome,
    Senha: password
  })
}

const loginUser = (email, password) => {
  return api.post('/user', {
    Email: email,
    Senha: password
  })
}

export {
  loginUser,
  registerUser,
  getUser
}