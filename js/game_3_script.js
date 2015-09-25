function setupGame_3() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_3_square_1 = $('#game3square1');
	var game_3_square_2 = $('#game3square2');
	var game_3_square_3 = $('#game3square3');
	var game_3_square_4 = $('#game3square4');
	var game_3_square_5 = $('#game3square5');
	var game_3_square_6 = $('#game3square6');
	var game_3_square_7 = $('#game3square7');
	var game_3_square_8 = $('#game3square8');
	var game_3_square_9 = $('#game3square9');

	$('#game_3 li').on('click', function(){
		
		
		
			if(check_move($(this), 3)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_3_square_1.hasClass('o') && game_3_square_2.hasClass('o') && game_3_square_3.hasClass('o') ) ||
					(game_3_square_1.hasClass('o') && game_3_square_4.hasClass('o') && game_3_square_7.hasClass('o') ) ||
					(game_3_square_1.hasClass('o') && game_3_square_5.hasClass('o') && game_3_square_9.hasClass('o') ) ||
					(game_3_square_2.hasClass('o') && game_3_square_5.hasClass('o') && game_3_square_8.hasClass('o') ) ||
					(game_3_square_3.hasClass('o') && game_3_square_6.hasClass('o') && game_3_square_9.hasClass('o') ) ||
					(game_3_square_3.hasClass('o') && game_3_square_5.hasClass('o') && game_3_square_7.hasClass('o') ) ||
					(game_3_square_4.hasClass('o') && game_3_square_5.hasClass('o') && game_3_square_6.hasClass('o') ) ||
					(game_3_square_7.hasClass('o') && game_3_square_8.hasClass('o') && game_3_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_3_winner == null){
		 					game_3_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_3_square_1.hasClass('x') && game_3_square_2.hasClass('x') && game_3_square_3.hasClass('x') ) ||
					(game_3_square_1.hasClass('x') && game_3_square_4.hasClass('x') && game_3_square_7.hasClass('x') ) ||
					(game_3_square_1.hasClass('x') && game_3_square_5.hasClass('x') && game_3_square_9.hasClass('x') ) ||
					(game_3_square_2.hasClass('x') && game_3_square_5.hasClass('x') && game_3_square_8.hasClass('x') ) ||
					(game_3_square_3.hasClass('x') && game_3_square_6.hasClass('x') && game_3_square_9.hasClass('x') ) ||
					(game_3_square_3.hasClass('x') && game_3_square_5.hasClass('x') && game_3_square_7.hasClass('x') ) ||
					(game_3_square_4.hasClass('x') && game_3_square_5.hasClass('x') && game_3_square_6.hasClass('x') ) ||
					(game_3_square_7.hasClass('x') && game_3_square_8.hasClass('x') && game_3_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_3_winner == null){
		 					game_3_winner = 'X';
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