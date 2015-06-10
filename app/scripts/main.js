/* jshint devel:true */
// A $( document ).ready() block.
$(document).ready(function() {

  var $stopBtn = $('#stop-btn'),
    $giveToP2 = $('#give-to-player-2-btn');

  $stopBtn.click(function(){
    var givenCard = giveCard(hand1);
    console.log(givenCard);
    $('#card-zone-casino').append(givenCard.value, givenCard.type);
    var cardValues = $('#cards-values-casino').text();
    cardValues = parseInt(cardValues) + givenCard.value;
    console.log(cardValues);

    $('#cards-values-casino').text(cardValues);
  });

  $giveToP2.click(function(){
    var givenCard = giveCard(hand2);
    console.log(givenCard);
    $('#card-zone-player').append(givenCard.value, givenCard.type);
    var cardValues = $('#cards-values-player').text();
    cardValues = parseInt(cardValues) + givenCard.value;
    console.log(cardValues);

    $('#cards-values-player').text(cardValues);
  });

  var casinoName = 'Croupier',
    playerName = 'Avaró';

  console.log(casinoName);

  $('#player-casino').append(casinoName);
  $('#player-one').append(playerName);

  var cards = [];


  function createTenCards(type){
    for(var i=0; i<10; i++){
      //cards.push('carta '+ type + ' ' + (i+1));
      cards.push({
        'value': i+1,
        'type': type
      });
    }
  }

  createTenCards('spades');
  createTenCards('hearts');
  createTenCards('diamonds');
  createTenCards('clubs');

  function mixCards(){
    cards.sort(function(a, b){
      return .5 - Math.random();
    });
  }

  mixCards();

  var hand1 = [],
    hand2 = [];

  function giveCard(playerHand){

    if(cards.length > 0){
      var card = cards.pop();
      playerHand.push(card);
      return card;
    }
    console.log(hand1, hand2, cards);

    return false;
  }

  //console.log(cards);


  function sayHello(){

    console.log('Hello World ');
  }

  /*sayHello(playerName);
  sayHello(casinoName);
  sayHello('rita', 'la cantaora');
  sayHello(4);*/

});
