import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config

const newsetToken = newToken => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}

const getAllthem = async () => {
  const response = await axios.get(baseUrl, config)
  return response.data
}

const createNew = async newObject => {
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const updateOne = async objectToUpdateOne => {
  const response = await axios.put(`${baseUrl}/${objectToUpdateOne.id}`, objectToUpdateOne, config)
  return response.data
}

const removeOne = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}


export default { getAllthem, createNew, updateOne, newsetToken, removeOne }