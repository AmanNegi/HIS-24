import cors from 'cors'

const setUpCORS = cors({
  origin: ['*', 'http://localhost:5173'], // add your source URL here
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

export default setUpCORS
