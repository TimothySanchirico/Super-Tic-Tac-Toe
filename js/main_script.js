var globalTurns = 0;
var on_deck_game = 0;
var invalid_click = false;
var first = true;
var easy_ai_enabled = true;

var game_1_winner = null;
var game_2_winner = null;
var game_3_winner = null;
var game_4_winner = null;
var game_5_winner = null;
var game_6_winner = null;
var game_7_winner = null;
var game_8_winner = null;
var game_9_winner = null;

var computer_player = 2;


$(document).ready(function(){
	setupGame_1();
	setupGame_2();
	setupGame_3();
	setupGame_4();
	setupGame_5();
	setupGame_6();
	setupGame_7();
	setupGame_8();
	setupGame_9();
	setup_reset_btn();
	$('li').mouseenter(function(){
		var $square = $(this);
		
		if(globalTurns%2 == 0){
			if(!$square.hasClass('disable')) {
				$square.css("background-color", "rgba(0, 200, 0, 100)");
			}
			
		}
		else {
			if(!$square.hasClass('disable')) {
				$square.css("background-color", "rgba(200, 0, 0, 100)");
			}
			
		}
		
	});
	$('li').mouseleave(function(){
		var $square = $(this);
		if(!$square.hasClass('disable')){
			$square.css("background-color", "white");
		}
		
	});

	
});

function check_move(square, game){

	//pass the game to the AI
	

	if(game == on_deck_game || first){
		if(!square.hasClass('disable')){
			if(first){
				first = false;
			}
			if(globalTurns%2 == 0){
				square.css("background-color", "rgba(0, 200, 0, 100)");
				square.addClass('o');
				square.addClass('disable');
			}
			else {
				square.css("background-color", "rgba(200, 0, 0, 100)");
				square.addClass('x');
				square.addClass('disable');
			}
			globalTurns++;
			find_next_game(square.attr('id')[11]);
			
			if(easy_ai_enabled){
				easy_ai(on_deck_game, computer_player);
				
			}
			
			return true;
		}
		else {
			alert('Move in an empty square');
		}
	}
	
	
	else {
		alert('You must play in game' + on_deck_game);
		return false;
	}
	
}

function check_for_winner(){
	if( (game_1_winner == 'O' && game_2_winner == 'O' && game_3_winner == 'O' ) ||
		(game_3_winner == 'O' && game_4_winner == 'O' && game_5_winner == 'O' ) ||
		(game_6_winner == 'O' && game_7_winner == 'O' && game_8_winner == 'O' ) ||
		(game_1_winner == 'O' && game_4_winner == 'O' && game_7_winner == 'O' ) ||
		(game_2_winner == 'O' && game_5_winner == 'O' && game_8_winner == 'O' ) ||
		(game_3_winner == 'O' && game_6_winner == 'O' && game_9_winner == 'O' ) ||
		(game_1_winner == 'O' && game_5_winner == 'O' && game_9_winner == 'O' ) ||
		(game_3_winner == 'O' && game_5_winner == 'O' && game_7_winner == 'O' ) ) {
			alert("Green wins!");
	}
	else if( (game_1_winner == 'X' && game_2_winner == 'X' && game_3_winner == 'X' ) ||
		(game_3_winner == 'X' && game_4_winner == 'X' && game_5_winner == 'X' ) ||
		(game_6_winner == 'X' && game_7_winner == 'X' && game_8_winner == 'X' ) ||
		(game_1_winner == 'X' && game_4_winner == 'X' && game_7_winner == 'X' ) ||
		(game_2_winner == 'X' && game_5_winner == 'X' && game_8_winner == 'X' ) ||
		(game_3_winner == 'X' && game_6_winner == 'X' && game_9_winner == 'X' ) ||
		(game_1_winner == 'X' && game_5_winner == 'X' && game_9_winner == 'X' ) ||
		(game_3_winner == 'X' && game_5_winner == 'X' && game_7_winner == 'X' ) ) {
			alert("Red wins!");
	}
}

function check_if_full(square){
	var gameID = 'game' + square;
	var squareIDVariable = gameID + 'square';
	
	for(var iter = 1; iter <= 9; iter++){
		if( !$('#' + squareIDVariable + iter).hasClass('disable') ){
			return true;
		}
	}
	return false;
}

function find_next_game(square) {
	
	if(check_if_full(square)) {
		if(square == 1){
			on_deck_game = 1;
		}
		else if(square == 2){
			on_deck_game = 2;
		}
		else if(square == 3){
			on_deck_game = 3;
		}
		else if(square == 4){
			on_deck_game = 4;
		}
		else if(square == 5){
			on_deck_game = 5;
		}
		else if(square == 6){
			on_deck_game = 6;
		}
		else if(square == 7){
			on_deck_game = 7;
		}
		else if(square == 8){
			on_deck_game = 8;
		}
		else if(square == 9){
			on_deck_game = 9;
		}			
	}
}