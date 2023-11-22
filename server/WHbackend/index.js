const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require('body-parser')

//APIS
const userApi = require('./routes/user.js')
const testCenterApi = require('./routes/testCenter.js')
const testApi = require('./routes/test.js')
const bookingApi = require('./routes/booking.js')

//APP
const app = express()
app.use(cors())
app.use(express.json());



mongoose.connect('mongodb+srv://harsha:harsha@cluster0.f7r8m4f.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('DB connected'))
  .catch((err) => console.error('DB Error', err));


app.listen(8000, ()=> {
    console.log('Server started')
})

//MIDDLEWARES
app.use('/api/user', userApi)
app.use('/api/testcenter', testCenterApi)
app.use('/api/test', testApi)
app.use('/api/booking', bookingApi)
