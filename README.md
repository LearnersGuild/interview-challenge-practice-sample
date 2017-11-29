# Foundations -> Practice Sample challenge

## Notes on this sample challenge (please read carefully)

- This is intended to give you an idea of the type of tasks you will be asked to do for the live coding interview.

- You may choose either Pug or EJS as a template engine (here and in the live coding interview).

- The live coding interview will have __all the same parts__ as this sample challenge, but the __exact tasks will vary__. For example, you might be asked to:
  - write a different kind of SQL query
  - utilize GET data in Part 2
  - remove an element from the DOM

- Refer to `extra/topics.md` file in this repo for a list of topics covered to understand the possible range of topics.

- The "subject" of the interview will also be different (for example, hotel reservations instead of sports teams).

- The actual live coding interview will likely have a smaller amount of coding than this sample version.

- During the live coding interview you may:

  - google search for reference material from the web.
  - examine the database interactively.
  - send GET and POST requests to your express server for debugging / confirmation.

## Part 1: SQL

__Note__: For this and the following sections, please be sure to __read and follow the installation instructions__ in the `README.md` for the corresponding *part-x* folder.

### Node and PostgreSQL

Create a function in `db.js` called `getTeamColors` that uses `pg-promise`. The function should take a team name as a parameter, and return a promise resolving to the names of that team's colors (the raw result from `pg-promise` is fine -- it's not necessary to process the result to make, say, an array of strings).

  - [ ] __5:__ Function accepts the name of a team as a parameter
  - [ ] __15:__ Function executes a query that returns the given team's associated colors
  - [ ] __10:__ Function returns a promise which resolves to the result of the query

## Part 2: Express

### GET route
Create a GET route for `/:teamname/colors` that renders colors for a particular team. Use the `getTeamColors` function provided in `db.js`.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route uses `getTeamColors` to get the necessary data
- [ ] __10:__ Route renders `team_colors.pug` OR `team_colors.ejs` template with the teams from the db

### POST route
Create a POST route for `/teams/add` that receives JSON data and adds a new team to the database. Use the `addTeam` function provided in `db.js`. Example JSON POST data:

```
{
  "teamName": "LG Engineers",
  "city": "Oakland"
}
```

- [ ] __5:__ Route uses POST
- [ ] __10:__ Route accesses POST data
- [ ] __10:__ Route uses `addTeam` to add the team to the database
- [ ] __10:__ Successful adding of the team returns 200 status and JSON with the key `teamName` (and the appropriate value)
- [ ] __10:__ Unsuccessful adding of the team returns 400 status and JSON containing the key `message` with an error message as the value.
- [ ] __10:__ Learner demonstrates POST route functionality using Postman, curl, or the like as a client.

## Part 3: Front-End

### HTML and CSS
Add a yellow banner across the top of the `team_colors.pug` OR `team_colors.ejs` page with a title "[teamName] Colors" (where [teamName] is the name of the team whose colors are being displayed).

- [ ] __5:__ The banner displays on the page
- [ ] __5:__ The banner spans the entire page width
- [ ] __5:__ The title is centered within the banner
- [ ] __5:__ The background of the banner is yellow
- [ ] __10:__ The styling is defined in the `public/team_colors.css` file (not in the HTML file)

### DOM Manipulation
When the user clicks the "Add Color" button, add a new color to the list of colors on the page. The new color to be added will be entered in the text box. __Note: There is no need to update the database or communicate with the server in any way.__

- [ ] __10:__ The "Add Color" button has an event listener on click
- [ ] __10:__ The color list has another item after button click
- [ ] __10:__ The new color list item contains the contents of the text input box
- [ ] __10:__ JavaScript is contained in `public/team_colors.js` (not in the HTML file)
