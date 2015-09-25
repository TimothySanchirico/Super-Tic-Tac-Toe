function setupGame_9() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_9_square_1 = $('#game9square1');
	var game_9_square_2 = $('#game9square2');
	var game_9_square_3 = $('#game9square3');
	var game_9_square_4 = $('#game9square4');
	var game_9_square_5 = $('#game9square5');
	var game_9_square_6 = $('#game9square6');
	var game_9_square_7 = $('#game9square7');
	var game_9_square_8 = $('#game9square8');
	var game_9_square_9 = $('#game9square9');

	$('#game_9 li').on('click', function(){
		
		
		
			if(check_move($(this), 9)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_9_square_1.hasClass('o') && game_9_square_2.hasClass('o') && game_9_square_3.hasClass('o') ) ||
					(game_9_square_1.hasClass('o') && game_9_square_4.hasClass('o') && game_9_square_7.hasClass('o') ) ||
					(game_9_square_1.hasClass('o') && game_9_square_5.hasClass('o') && game_9_square_9.hasClass('o') ) ||
					(game_9_square_2.hasClass('o') && game_9_square_5.hasClass('o') && game_9_square_8.hasClass('o') ) ||
					(game_9_square_3.hasClass('o') && game_9_square_6.hasClass('o') && game_9_square_9.hasClass('o') ) ||
					(game_9_square_3.hasClass('o') && game_9_square_5.hasClass('o') && game_9_square_7.hasClass('o') ) ||
					(game_9_square_4.hasClass('o') && game_9_square_5.hasClass('o') && game_9_square_6.hasClass('o') ) ||
					(game_9_square_7.hasClass('o') && game_9_square_8.hasClass('o') && game_9_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_9_winner == null){
		 					game_9_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_9_square_1.hasClass('x') && game_9_square_2.hasClass('x') && game_9_square_3.hasClass('x') ) ||
					(game_9_square_1.hasClass('x') && game_9_square_4.hasClass('x') && game_9_square_7.hasClass('x') ) ||
					(game_9_square_1.hasClass('x') && game_9_square_5.hasClass('x') && game_9_square_9.hasClass('x') ) ||
					(game_9_square_2.hasClass('x') && game_9_square_5.hasClass('x') && game_9_square_8.hasClass('x') ) ||
					(game_9_square_3.hasClass('x') && game_9_square_6.hasClass('x') && game_9_square_9.hasClass('x') ) ||
					(game_9_square_3.hasClass('x') && game_9_square_5.hasClass('x') && game_9_square_7.hasClass('x') ) ||
					(game_9_square_4.hasClass('x') && game_9_square_5.hasClass('x') && game_9_square_6.hasClass('x') ) ||
					(game_9_square_7.hasClass('x') && game_9_square_8.hasClass('x') && game_9_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_9_winner == null){
		 					game_9_winner = 'X';
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