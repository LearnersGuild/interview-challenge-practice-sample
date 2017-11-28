const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/team_colors')
db.connect()

/**
 * Get the all colors for the specified team.
 * @param {string} teamName - name of the team for which to get colors
 * @return {Promise} Promise resolving to an array of strings
 */
const getTeamColors = teamName =>
  db.any(`
      SELECT c.name
      FROM colors AS c
        JOIN team_colors AS tc
          ON c.id = tc.color_id
        JOIN teams AS t
          ON t.id = tc.team_id
      WHERE t.name ILIKE $1
    `, [teamName])
    .then(colors => colors.map(color => color.name))

module.exports = {
  getTeamColors,
}
