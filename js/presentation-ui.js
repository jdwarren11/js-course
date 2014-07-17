(function() {

  
  $(document).on('click', 'button.start', function() {
    // take input from user name and store it somewhere
    var name = $('#name-input').val();
    bl.newPlayer(name);
    bl.gameRestart();
    $('#name-input').hide();
    $('.start').hide();
    showQuestion();
    $('.answers').show();
    $('.question').show();
    $('.submit').show();
  });

  $(document).on('click','button.submit', function() {
    var result = $('form').serialize();
    var whichQ = $('.answers').attr('data-question');
    // console.log(whichQ);
    var yes = bl.checkAnswer(result[7]);
    if (yes) {
      bl.incrementQ(whichQ);
      bl.incrementA(whichQ);
    } else {
      bl.incrementQ(whichQ);
    }
    if (bl.isGameOver()) {
      gameOver();
    } else {
      showQuestion();
    }

  });

  $(document).on('click','button.newgame', function() {
    $('#name-input').show().val('');
    $('.question').hide();
    $('.answers').hide();
    $('.start').show();
    $('.newgame').hide();
  });

  var showQuestion = function() {
    var question = bl.pickRandomQuestion();
    var avg = Math.floor((question.correct/question.asked)*100);
    if (!avg) {
      avg = '';
    }
    // bl.incrementQ(question.id);
    $("input:checked").removeAttr("checked")
    $('.question').empty().html("<h3>"+question.question+"</h3>"+ "<br> <h6>Question Average: "+avg+"%</h6>");
    $('.answers').attr('data-question', question.id);
    $('.answers').find('span').remove();
    $('.answers').find('.one').append("<span>"+question.choices[0]+"</span>");
    $('.answers').find('.two').append("<span>"+question.choices[1]+"</span>");
    $('.answers').find('.three').append("<span>"+question.choices[2]+"</span>");
    $('.answers').find('.four').append("<span>"+question.choices[3]+"</span>");
  };

  var updateLeaderboard = function() {
    lead = bl.getLeaders();
    console.log(lead);
    $('.place').empty();
    for (i = 0; i < lead.length; i++) {
      $('.place').append('<li>' + lead[i].name + "  -  " + lead[i].score + '</li>');
    }
    // $('#place').append(lead[0].name);
    // $('#place').append(lead[1].name);
    // $('#place').append(lead[2].name);
    // $('#place').append(lead[3].name);
    // $('#place').append(lead[4].name);
  };

  var gameOver = function() {
    var score = bl.getScore();
    bl.logPlayerScore(score);
    updateLeaderboard();
    $('.submit').hide();
    $('.answers').hide();
    $('.question').empty().html("<h3>Score: " +score+"/10</h3>");
    if (score < 4) {
      $('.question').append("<h4>Not very good</h4>");
    } else if (score >= 4 && score < 7) {
      $('.question').append("<h4>That's okkkk</h4>");
    } else if (score >= 7) {
      $('.question').append("<h4>Niceeeee</h4>");
    }
    $('.newgame').show();
  };

  
})();