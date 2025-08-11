const game = {
  team1: "India",
  team2: "Australia",
  players: [
    [
      "Dhoni",
      "Sharma",
      "Kohli",
      "Rahul",
      "Jadeja",
      "Pandey",
      "Ashwin",
      "Chahal",
      "Khan",
      "Bhumra",
      "Shami",
    ],
    [
      "Wade",
      "Cummins",
      "Green",
      "Maxwell",
      "Finch",
      "Hazelwood",
      "Marsh",
      "Stoinis",
      "Richardson",
      "Starc",
      "Warner",
    ],
  ],
  Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log(game);
console.log(game.players[0])
let [players1,players2]=game.players
console.log(players1)
console.log(players2)
let[ ind, ...feildPlayer1]=players1
//let[ wicketKeeper2, ...feildPlayer2]=players2
//console.log(wicketKeeper,feildPlayer)
let allPlayers=[...players1, ...players2]
console.log(allPlayers)
let newindTeam=[...players1, 'sandeep','sunil','simran']
console.log(newindTeam);
let [team1, draw, team2] = Object.values(game.odds);
//console.log(team1);
console.log(team2 && team1)

