import api from './api';

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
  registerUser
}