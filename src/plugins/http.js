import axios from 'axios'

// const baseURL = process.env.NODE_ENV === 'development'
//   ? process.env.VUE_APP_API_HOST
//   : location.protocol + '//' + location.hostname // process.env.VUE_APP_API_HOST
//const baseURL = 'http://localhost:5000'
const baseURL = process.env.NODE_ENV === 'development'? 'http://localhost:5000':'https://abrain.hoseo.ac.kr'
// alert(JSON.stringify(process.env.NODE_ENV))
const httpMember = axios.create({
    baseURL: baseURL + '/api/v1'
})
httpMember.interceptors.request.use(
    (config) => {
      if (!config.params) config.params = {}
      config.params._cache = Date.now()
      return config
    },
    (error) => {
      return Promise.reject(error);
    }
  )
export { httpMember } 