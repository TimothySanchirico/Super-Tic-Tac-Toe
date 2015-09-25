function setupGame_5() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_5_square_1 = $('#game5square1');
	var game_5_square_2 = $('#game5square2');
	var game_5_square_3 = $('#game5square3');
	var game_5_square_4 = $('#game5square4');
	var game_5_square_5 = $('#game5square5');
	var game_5_square_6 = $('#game5square6');
	var game_5_square_7 = $('#game5square7');
	var game_5_square_8 = $('#game5square8');
	var game_5_square_9 = $('#game5square9');

	$('#game_5 li').on('click', function(){
		
		
		
			if(check_move($(this), 5)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_5_square_1.hasClass('o') && game_5_square_2.hasClass('o') && game_5_square_3.hasClass('o') ) ||
					(game_5_square_1.hasClass('o') && game_5_square_4.hasClass('o') && game_5_square_7.hasClass('o') ) ||
					(game_5_square_1.hasClass('o') && game_5_square_5.hasClass('o') && game_5_square_9.hasClass('o') ) ||
					(game_5_square_2.hasClass('o') && game_5_square_5.hasClass('o') && game_5_square_8.hasClass('o') ) ||
					(game_5_square_3.hasClass('o') && game_5_square_6.hasClass('o') && game_5_square_9.hasClass('o') ) ||
					(game_5_square_3.hasClass('o') && game_5_square_5.hasClass('o') && game_5_square_7.hasClass('o') ) ||
					(game_5_square_4.hasClass('o') && game_5_square_5.hasClass('o') && game_5_square_6.hasClass('o') ) ||
					(game_5_square_7.hasClass('o') && game_5_square_8.hasClass('o') && game_5_square_9.hasClass('o') )  )
		 			{
		 				if(game_5_winner == null){
		 					game_5_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_5_square_1.hasClass('x') && game_5_square_2.hasClass('x') && game_5_square_3.hasClass('x') ) ||
					(game_5_square_1.hasClass('x') && game_5_square_4.hasClass('x') && game_5_square_7.hasClass('x') ) ||
					(game_5_square_1.hasClass('x') && game_5_square_5.hasClass('x') && game_5_square_9.hasClass('x') ) ||
					(game_5_square_2.hasClass('x') && game_5_square_5.hasClass('x') && game_5_square_8.hasClass('x') ) ||
					(game_5_square_3.hasClass('x') && game_5_square_6.hasClass('x') && game_5_square_9.hasClass('x') ) ||
					(game_5_square_3.hasClass('x') && game_5_square_5.hasClass('x') && game_5_square_7.hasClass('x') ) ||
					(game_5_square_4.hasClass('x') && game_5_square_5.hasClass('x') && game_5_square_6.hasClass('x') ) ||
					(game_5_square_7.hasClass('x') && game_5_square_8.hasClass('x') && game_5_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_5_winner == null){
		 					game_5_winner = 'X';
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