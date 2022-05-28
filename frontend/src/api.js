import axios from 'axios'
export default axios.create({
 baseURL: `https://concord.dafoe.me/`,
 headers: {
    'Content-Type': 'application/json',
  },
 })