function setupGame_4() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_4_square_1 = $('#game4square1');
	var game_4_square_2 = $('#game4square2');
	var game_4_square_3 = $('#game4square3');
	var game_4_square_4 = $('#game4square4');
	var game_4_square_5 = $('#game4square5');
	var game_4_square_6 = $('#game4square6');
	var game_4_square_7 = $('#game4square7');
	var game_4_square_8 = $('#game4square8');
	var game_4_square_9 = $('#game4square9');

	$('#game_4 li').on('click', function(){
		
		
			if(check_move($(this), 4)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_4_square_1.hasClass('o') && game_4_square_2.hasClass('o') && game_4_square_3.hasClass('o') ) ||
					(game_4_square_1.hasClass('o') && game_4_square_4.hasClass('o') && game_4_square_7.hasClass('o') ) ||
					(game_4_square_1.hasClass('o') && game_4_square_5.hasClass('o') && game_4_square_9.hasClass('o') ) ||
					(game_4_square_2.hasClass('o') && game_4_square_5.hasClass('o') && game_4_square_8.hasClass('o') ) ||
					(game_4_square_3.hasClass('o') && game_4_square_6.hasClass('o') && game_4_square_9.hasClass('o') ) ||
					(game_4_square_3.hasClass('o') && game_4_square_5.hasClass('o') && game_4_square_7.hasClass('o') ) ||
					(game_4_square_4.hasClass('o') && game_4_square_5.hasClass('o') && game_4_square_6.hasClass('o') ) ||
					(game_4_square_7.hasClass('o') && game_4_square_8.hasClass('o') && game_4_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_4_winner == null){
		 					game_4_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_4_square_1.hasClass('x') && game_4_square_2.hasClass('x') && game_4_square_3.hasClass('x') ) ||
					(game_4_square_1.hasClass('x') && game_4_square_4.hasClass('x') && game_4_square_7.hasClass('x') ) ||
					(game_4_square_1.hasClass('x') && game_4_square_5.hasClass('x') && game_4_square_9.hasClass('x') ) ||
					(game_4_square_2.hasClass('x') && game_4_square_5.hasClass('x') && game_4_square_8.hasClass('x') ) ||
					(game_4_square_3.hasClass('x') && game_4_square_6.hasClass('x') && game_4_square_9.hasClass('x') ) ||
					(game_4_square_3.hasClass('x') && game_4_square_5.hasClass('x') && game_4_square_7.hasClass('x') ) ||
					(game_4_square_4.hasClass('x') && game_4_square_5.hasClass('x') && game_4_square_6.hasClass('x') ) ||
					(game_4_square_7.hasClass('x') && game_4_square_8.hasClass('x') && game_4_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_4_winner == null){
		 					game_4_winner = 'X';
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