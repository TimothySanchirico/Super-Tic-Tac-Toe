function setupGame_2() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_2_square_1 = $('#game2square1');
	var game_2_square_2 = $('#game2square2');
	var game_2_square_3 = $('#game2square3');
	var game_2_square_4 = $('#game2square4');
	var game_2_square_5 = $('#game2square5');
	var game_2_square_6 = $('#game2square6');
	var game_2_square_7 = $('#game2square7');
	var game_2_square_8 = $('#game2square8');
	var game_2_square_9 = $('#game2square9');

	$('#game_2 li').on('click', function(){
		
		
		
			if(check_move($(this), 2)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_2_square_1.hasClass('o') && game_2_square_2.hasClass('o') && game_2_square_3.hasClass('o') ) ||
					(game_2_square_1.hasClass('o') && game_2_square_4.hasClass('o') && game_2_square_7.hasClass('o') ) ||
					(game_2_square_1.hasClass('o') && game_2_square_5.hasClass('o') && game_2_square_9.hasClass('o') ) ||
					(game_2_square_2.hasClass('o') && game_2_square_5.hasClass('o') && game_2_square_8.hasClass('o') ) ||
					(game_2_square_3.hasClass('o') && game_2_square_6.hasClass('o') && game_2_square_9.hasClass('o') ) ||
					(game_2_square_3.hasClass('o') && game_2_square_5.hasClass('o') && game_2_square_7.hasClass('o') ) ||
					(game_2_square_4.hasClass('o') && game_2_square_5.hasClass('o') && game_2_square_6.hasClass('o') ) ||
					(game_2_square_7.hasClass('o') && game_2_square_8.hasClass('o') && game_2_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_2_winner == null){
		 					game_2_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_2_square_1.hasClass('x') && game_2_square_2.hasClass('x') && game_2_square_3.hasClass('x') ) ||
					(game_2_square_1.hasClass('x') && game_2_square_4.hasClass('x') && game_2_square_7.hasClass('x') ) ||
					(game_2_square_1.hasClass('x') && game_2_square_5.hasClass('x') && game_2_square_9.hasClass('x') ) ||
					(game_2_square_2.hasClass('x') && game_2_square_5.hasClass('x') && game_2_square_8.hasClass('x') ) ||
					(game_2_square_3.hasClass('x') && game_2_square_6.hasClass('x') && game_2_square_9.hasClass('x') ) ||
					(game_2_square_3.hasClass('x') && game_2_square_5.hasClass('x') && game_2_square_7.hasClass('x') ) ||
					(game_2_square_4.hasClass('x') && game_2_square_5.hasClass('x') && game_2_square_6.hasClass('x') ) ||
					(game_2_square_7.hasClass('x') && game_2_square_8.hasClass('x') && game_2_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_2_winner == null){
		 					game_2_winner = 'X';
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