import cors from 'cors'

const setUpCORS = cors({
  origin: ['*', 'http://localhost:5173'], // add your source URL here
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

export default setUpCORS
