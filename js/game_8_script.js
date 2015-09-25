function setupGame_8() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_8_square_1 = $('#game8square1');
	var game_8_square_2 = $('#game8square2');
	var game_8_square_3 = $('#game8square3');
	var game_8_square_4 = $('#game8square4');
	var game_8_square_5 = $('#game8square5');
	var game_8_square_6 = $('#game8square6');
	var game_8_square_7 = $('#game8square7');
	var game_8_square_8 = $('#game8square8');
	var game_8_square_9 = $('#game8square9');

	$('#game_8 li').on('click', function(){
			if(check_move($(this), 8)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_8_square_1.hasClass('o') && game_8_square_2.hasClass('o') && game_8_square_3.hasClass('o') ) ||
					(game_8_square_1.hasClass('o') && game_8_square_4.hasClass('o') && game_8_square_7.hasClass('o') ) ||
					(game_8_square_1.hasClass('o') && game_8_square_5.hasClass('o') && game_8_square_9.hasClass('o') ) ||
					(game_8_square_2.hasClass('o') && game_8_square_5.hasClass('o') && game_8_square_8.hasClass('o') ) ||
					(game_8_square_3.hasClass('o') && game_8_square_6.hasClass('o') && game_8_square_9.hasClass('o') ) ||
					(game_8_square_3.hasClass('o') && game_8_square_5.hasClass('o') && game_8_square_7.hasClass('o') ) ||
					(game_8_square_4.hasClass('o') && game_8_square_5.hasClass('o') && game_8_square_6.hasClass('o') ) ||
					(game_8_square_7.hasClass('o') && game_8_square_8.hasClass('o') && game_8_square_9.hasClass('o') )  )
		 			{
		 				if(game_8_winner == null){
		 					game_8_winner = 'O';
		 				}
		 				
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_8_square_1.hasClass('x') && game_8_square_2.hasClass('x') && game_8_square_3.hasClass('x') ) ||
					(game_8_square_1.hasClass('x') && game_8_square_4.hasClass('x') && game_8_square_7.hasClass('x') ) ||
					(game_8_square_1.hasClass('x') && game_8_square_5.hasClass('x') && game_8_square_9.hasClass('x') ) ||
					(game_8_square_2.hasClass('x') && game_8_square_5.hasClass('x') && game_8_square_8.hasClass('x') ) ||
					(game_8_square_3.hasClass('x') && game_8_square_6.hasClass('x') && game_8_square_9.hasClass('x') ) ||
					(game_8_square_3.hasClass('x') && game_8_square_5.hasClass('x') && game_8_square_7.hasClass('x') ) ||
					(game_8_square_4.hasClass('x') && game_8_square_5.hasClass('x') && game_8_square_6.hasClass('x') ) ||
					(game_8_square_7.hasClass('x') && game_8_square_8.hasClass('x') && game_8_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_8_winner == null){
		 					game_8_winner = 'X';
		 				}
		 				x_wins = 1;
					}
				}
				
				if(o_wins == 1 || x_wins == 1){
					check_for_winner();
				}
			}
		
	});
	
}