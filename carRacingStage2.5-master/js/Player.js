class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    this.xpos=0

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank,
      xpos:this.xpos

      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
static updatecarsatend(rank){
  database.ref('/').update({
    carsatend:rank
  })
}

getcarsatend(){
  database.ref('carsatend').on('value',(data)=>{
    this.rank=data.val()
  })
}

getplayerrank(){
  var playerrankref = database.ref('players/player')
  playerrankref.on("value",(data)=>{playerrank=data.val()})
}

}
