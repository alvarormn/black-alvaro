/* jshint devel:true */
// A $( document ).ready() block.
$(document).ready(function() {

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

  console.log(cards);


  function mixCards(){
    cards.sort(function(a, b){
      return .5 - Math.random();
    });
  }

  mixCards();

  console.log(cards);


  /*function sayHello(name, nick){
    nick = nick || 'yeah'
    console.log('Hello World ' + name + nick);
  }

  sayHello(playerName);
  sayHello(casinoName);
  sayHello('rita', 'la cantaora');
  sayHello(4);*/

});
