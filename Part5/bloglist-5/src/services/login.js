import axios from 'axios'
const baseUrl = '/api/Login'

const Login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { Login }