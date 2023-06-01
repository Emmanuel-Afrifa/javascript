const team = {
    _players : [{firstName:'Abel', lastName:'Coat',age:30},
    {firstName:'Carden', lastName: 'Benson', age: 40},
    {firstName:'Bounce',lansName:'Drake',age:27}],
    _games : [{opponent:'Kotoko',teamPoints:30,opponentPoints:26},
    {opponent: 'Chelsea',teamPoints:55,opponentPoints:64},
    {opponent:'Barc',teamPoints:46, opponentPoints:44}],
  
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName,newLastName,newAge){
      let player = {
        newFirstName,
        newLastName,
        newAge
      }
  
      this._players.push(player);
    },
  
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
      let game = {
        newOpponent,
        newTeamPoints,
        newOpponentPoints
      }
      this._games.push(game);
    }
  
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans',100,98);
  console.log(team.games)