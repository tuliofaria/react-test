import { put } from 'redux-saga/effects'
import axios from 'axios'

function *load (action) {
  //const ip = yield axios.get('http://httpbin.org/ip')
  
  console.log('action', action)
  const { email, passwd } = action
  const user = yield axios.post('/api/users/login', {
    email, passwd
  })
  const token = user.data.token

  const rest = axios.create({
    baseURL: '/api',
    headers:{
      Authorization: 'Bearer ' + token
    }
  })

  yield rest.post('/runs', {
    "friendly_name": "weekend run",
    "duration": 360,
    "distance": 100,
    "created": "2018-03-08 15:00:01"
  })

  const runs = yield axios.get('/api/runs', {
    headers:{
      Authorization: 'Bearer ' + token
    }
  })

  console.log('token', token)
  console.log('runs', runs)

  
  const api = yield axios.get('/api')
  yield put({
    type: 'LOAD_SUCCESS',
    data: api.data
  })
}

export default load
