const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/team_colors')
db.connect()
