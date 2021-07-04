import api from './api';

const addMatch = (pgnString) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Authorization': token
  }

  return api.post(`/partidas/cadastrar/`, {
    data: pgnString,
  }, {
    headers: headers
  })
}

const getMatchById = (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Authorization': token
  }

  return api.post(`/partidas/procurar/${id}`, {} ,{
    headers: headers
  })
}

export {
  addMatch,
  getMatchById
}