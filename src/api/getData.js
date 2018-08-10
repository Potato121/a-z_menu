import * as API from './apiconfig'
import axios from 'axios'

export const getCitiesInfo = () => new Promise((resolve) => {
  axios.get(API.CITIES_INFO)
    .then(res => resolve(res))
})