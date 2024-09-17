import cors from 'cors'

const setUpCORS = cors({
  origin: ['*'], // add your source URL here
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

export default setUpCORS
