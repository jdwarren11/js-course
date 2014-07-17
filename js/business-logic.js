(function() {


  var BusinessLogic = function() {

    var allQuestions = [{
        id: 1, 
        question:"A soccer goal is what dimensions, yards wide and feet high:",
        choices:["8x7","7x8","8x8","9x8"],
        answer: 3,
        asked: 0,
        correct: 0 },
      { 
        id: 2, 
        question:"Approximately how many million people play regular organized football in the world (at the early 2000s):",
        choices:["5","25","65","250"],
        answer: 4,
        asked: 0,
        correct: 0 },
      { 
        id: 3, 
        question:"The word soccer derives from:",
        choices:["Sock","Association","Kosher","Socrates"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 4, 
        question:"FIFA's 2014 World Cup Finals/Qualifying rules dictate a match squad of how many players:",
        choices:["18","23","26","30"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 5, 
        question:"The headquarters of FIFA are in:",
        choices:["Brussels","London","Zurich","Oslo"],
        answer: 3,
        asked: 0,
        correct: 0 },
      { 
        id: 6, 
        question:"Who has made the World Cup footballs since 1970:",
        choices:["Adidas","Puma","Umbro","Nike"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 7, 
        question:"A white ball was first used in a World Cup in:",
        choices:["1930","1950","1966","1982"],
        answer: 2,
        asked: 0,
        correct: 0 },
      { 
        id: 8, 
        question:"Soccer rules award what after an 'own goal' directly from a throw-in:",
        choices:["Goal","Penalty","Corner","Drop-ball"],
        answer: 3,
        asked: 0,
        correct: 0 },
      { 
        id: 9, 
        question:"Soccer has been an Olympic event since:",
        choices:["1900","1964","1992","2002"],
        answer: 1,
        asked: 0,
        correct: 0 },
      { 
        id: 10, 
        question:"The first, second and third placed teams at the 2014 World Cup receive how many medals:",
        choices:["20","30","40","50"],
        answer: 4,
        asked: 0,
        correct: 0 }
      ]
    var asked = [];
    var score = 0;
    var lastAnswer = -1;
    var players = [];
    // var leaders = [];

    this.pickRandomQuestion = function() {
      if (asked.length === allQuestions.length) {
        return false;
      }
      var check = 0;
      while (check !== -1) {
        var random = Math.floor((Math.random() * 10) + 0);
        check = $.inArray(random, asked);
        if (check === -1) {
          asked.push(random);
          question = allQuestions[random];
          lastAnswer = question.answer;
          // console.log(question);
          return question;
        }
      }
      // var numberQs = allQuestions.length;
      // var idChosen = utils.randomNumber(undefined, numberQs);
      // return idChosen;
    };

    this.checkAnswer = function(answer) {
      if (answer == (lastAnswer - 1)) {
        score += 1;
        // console.log(lastAnswer);
        return true;
      } else {
        // console.log(lastAnswer);
        return false;
      }
    };

    this.getScore = function() {
      return score;
    };
    
    this.isGameOver = function() {
      if (asked.length === allQuestions.length) {
        return true;
      } else {
        return false;
      }
    };
      
    this.gameRestart = function() {
      asked = [];
      lastAnswer = -1;
      score = 0;
    };

    this.newPlayer = function(player) {
      players.push({name: player, score: undefined});
    };

    this.logPlayerScore = function(score) {
      _.last(players).score = score
      // console.log(players);
    };

    this.getLeaders = function() {
      leader = _.sortBy(players, 'score');

      // console.log(leader);
      // leader.reverse();
      // for (i = 0; i < players.length; i++) {
      //   leaders.push(leader[i]);
        // console.log(leaders);
        return leader.reverse();
      // }
    };

    this.incrementQ = function(id) {
      x = allQuestions[id - 1];
      x.asked += 1;

      // console.log(allQuestions[id - 1])
    };

    this.incrementA = function(id) {
      x = allQuestions[id-1];
      x.correct += 1;
      console.log(allQuestions[id-1]);
    };


  };

  window.bl = new BusinessLogic();
})();