import axios from 'axios'

export const initAxios = () => {
  const auth = localStorage.getItem('auth')

  axios.defaults.headers['Authorization'] = 'Bearer ' + auth
}
