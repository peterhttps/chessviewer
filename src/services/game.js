import api from './api';

const getMatchById = (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Authorization': token
  }

  return api.get(`/partidas/movimentos/${id}`, {
    headers: headers
  })
}

export {
  getMatchById
}