const pgp = require('pg-promise')()

const db = pgp('postgres://localhost/team_colors')
db.connect()

/**
 * Get the all colors for the specified team.
 * @param {string} teamName - name of the team for which to get colors
 * @return {Promise} Promise resolving to an array of strings
 */
const getTeamColors = teamName =>
  db.query(`
      SELECT c.name
      FROM colors AS c
        JOIN team_colors AS tc
          ON c.id = tc.color_id
        JOIN teams AS t
          ON t.id = tc.team_id
      WHERE t.name ILIKE $1
    `, [teamName])
    .then(colors => colors.map(color => color.name))

/**
 * Add a team to the database with the provided data
 * @param {string} teamName Name of the team
 * @param {string} city Name of the city where team is located
 * @return {Promise} Promise which will be fulfilled if the insert succeeds; rejected if not
*/
const addTeam = (teamName, city) =>
  db.one('SELECT id FROM cities WHERE name=$1', city)
    .then(result => db.oneOrNone(`
        INSERT INTO teams (name, city_id)
        VALUES ($1, $2)
        RETURNING name`,
      [teamName, result.id]))

module.exports = {
  getTeamColors,
  addTeam,
}
