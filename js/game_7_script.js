function setupGame_7() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_7_square_1 = $('#game7square1');
	var game_7_square_2 = $('#game7square2');
	var game_7_square_3 = $('#game7square3');
	var game_7_square_4 = $('#game7square4');
	var game_7_square_5 = $('#game7square5');
	var game_7_square_6 = $('#game7square6');
	var game_7_square_7 = $('#game7square7');
	var game_7_square_8 = $('#game7square8');
	var game_7_square_9 = $('#game7square9');

	$('#game_7 li').on('click', function(){
		
		
		
			if(check_move($(this), 7)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_7_square_1.hasClass('o') && game_7_square_2.hasClass('o') && game_7_square_3.hasClass('o') ) ||
					(game_7_square_1.hasClass('o') && game_7_square_4.hasClass('o') && game_7_square_7.hasClass('o') ) ||
					(game_7_square_1.hasClass('o') && game_7_square_5.hasClass('o') && game_7_square_9.hasClass('o') ) ||
					(game_7_square_2.hasClass('o') && game_7_square_5.hasClass('o') && game_7_square_8.hasClass('o') ) ||
					(game_7_square_3.hasClass('o') && game_7_square_6.hasClass('o') && game_7_square_9.hasClass('o') ) ||
					(game_7_square_3.hasClass('o') && game_7_square_5.hasClass('o') && game_7_square_7.hasClass('o') ) ||
					(game_7_square_4.hasClass('o') && game_7_square_5.hasClass('o') && game_7_square_6.hasClass('o') ) ||
					(game_7_square_7.hasClass('o') && game_7_square_8.hasClass('o') && game_7_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_7_winner == null){
		 					game_7_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_7_square_1.hasClass('x') && game_7_square_2.hasClass('x') && game_7_square_3.hasClass('x') ) ||
					(game_7_square_1.hasClass('x') && game_7_square_4.hasClass('x') && game_7_square_7.hasClass('x') ) ||
					(game_7_square_1.hasClass('x') && game_7_square_5.hasClass('x') && game_7_square_9.hasClass('x') ) ||
					(game_7_square_2.hasClass('x') && game_7_square_5.hasClass('x') && game_7_square_8.hasClass('x') ) ||
					(game_7_square_3.hasClass('x') && game_7_square_6.hasClass('x') && game_7_square_9.hasClass('x') ) ||
					(game_7_square_3.hasClass('x') && game_7_square_5.hasClass('x') && game_7_square_7.hasClass('x') ) ||
					(game_7_square_4.hasClass('x') && game_7_square_5.hasClass('x') && game_7_square_6.hasClass('x') ) ||
					(game_7_square_7.hasClass('x') && game_7_square_8.hasClass('x') && game_7_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_7_winner == null){
		 					game_7_winner = 'X';
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