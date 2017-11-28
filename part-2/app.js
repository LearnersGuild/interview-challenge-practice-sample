const express = require('express')
const bodyParser = require('body-parser');
const { getTeamColors, addTeam } = require('./db/db')

const app = express()
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')

app.listen(3000, () =>
  console.log('Playing ball on port 3000!')
)
