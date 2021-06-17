import api from './api';

const getMatchById = (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  return api.get('/partidas/movimentos', {
    idPartida: id
  }, {
    headers: headers
  })
}

export {
  getMatchById
}