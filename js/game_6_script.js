function setupGame_6() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var x_wins = 0;
	var o_wins = 0;

	var game_6_square_1 = $('#game6square1');
	var game_6_square_2 = $('#game6square2');
	var game_6_square_3 = $('#game6square3');
	var game_6_square_4 = $('#game6square4');
	var game_6_square_5 = $('#game6square5');
	var game_6_square_6 = $('#game6square6');
	var game_6_square_7 = $('#game6square7');
	var game_6_square_8 = $('#game6square8');
	var game_6_square_9 = $('#game6square9');

	$('#game_6 li').on('click', function(){
		
		
		
			if(check_move($(this), 6)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_6_square_1.hasClass('o') && game_6_square_2.hasClass('o') && game_6_square_3.hasClass('o') ) ||
					(game_6_square_1.hasClass('o') && game_6_square_4.hasClass('o') && game_6_square_7.hasClass('o') ) ||
					(game_6_square_1.hasClass('o') && game_6_square_5.hasClass('o') && game_6_square_9.hasClass('o') ) ||
					(game_6_square_2.hasClass('o') && game_6_square_5.hasClass('o') && game_6_square_8.hasClass('o') ) ||
					(game_6_square_3.hasClass('o') && game_6_square_6.hasClass('o') && game_6_square_9.hasClass('o') ) ||
					(game_6_square_3.hasClass('o') && game_6_square_5.hasClass('o') && game_6_square_7.hasClass('o') ) ||
					(game_6_square_4.hasClass('o') && game_6_square_5.hasClass('o') && game_6_square_6.hasClass('o') ) ||
					(game_6_square_7.hasClass('o') && game_6_square_8.hasClass('o') && game_6_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_6_winner == null){
		 					game_6_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_6_square_1.hasClass('x') && game_6_square_2.hasClass('x') && game_6_square_3.hasClass('x') ) ||
					(game_6_square_1.hasClass('x') && game_6_square_4.hasClass('x') && game_6_square_7.hasClass('x') ) ||
					(game_6_square_1.hasClass('x') && game_6_square_5.hasClass('x') && game_6_square_9.hasClass('x') ) ||
					(game_6_square_2.hasClass('x') && game_6_square_5.hasClass('x') && game_6_square_8.hasClass('x') ) ||
					(game_6_square_3.hasClass('x') && game_6_square_6.hasClass('x') && game_6_square_9.hasClass('x') ) ||
					(game_6_square_3.hasClass('x') && game_6_square_5.hasClass('x') && game_6_square_7.hasClass('x') ) ||
					(game_6_square_4.hasClass('x') && game_6_square_5.hasClass('x') && game_6_square_6.hasClass('x') ) ||
					(game_6_square_7.hasClass('x') && game_6_square_8.hasClass('x') && game_6_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_6_winner == null){
		 					game_6_winner = 'X';
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