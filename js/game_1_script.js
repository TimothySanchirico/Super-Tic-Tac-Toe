

function setupGame_1() {
	var x = "x";
	var o = "o";
	var turns = 0;
	
	var o_wins = 0;
	var x_wins = 0;

	var game_1_square_1 = $('#game1square1');
	var game_1_square_2 = $('#game1square2');
	var game_1_square_3 = $('#game1square3');
	var game_1_square_4 = $('#game1square4');
	var game_1_square_5 = $('#game1square5');
	var game_1_square_6 = $('#game1square6');
	var game_1_square_7 = $('#game1square7');
	var game_1_square_8 = $('#game1square8');
	var game_1_square_9 = $('#game1square9');

	$('#game_1 li').on('click', function(){

			if(check_move($(this), 1)) {
				if (globalTurns % 2 == 0){
					turns++;
					
					if( (game_1_square_1.hasClass('o') && game_1_square_2.hasClass('o') && game_1_square_3.hasClass('o') ) ||
					(game_1_square_1.hasClass('o') && game_1_square_4.hasClass('o') && game_1_square_7.hasClass('o') ) ||
					(game_1_square_1.hasClass('o') && game_1_square_5.hasClass('o') && game_1_square_9.hasClass('o') ) ||
					(game_1_square_2.hasClass('o') && game_1_square_5.hasClass('o') && game_1_square_8.hasClass('o') ) ||
					(game_1_square_3.hasClass('o') && game_1_square_6.hasClass('o') && game_1_square_9.hasClass('o') ) ||
					(game_1_square_3.hasClass('o') && game_1_square_5.hasClass('o') && game_1_square_7.hasClass('o') ) ||
					(game_1_square_4.hasClass('o') && game_1_square_5.hasClass('o') && game_1_square_6.hasClass('o') ) ||
					(game_1_square_7.hasClass('o') && game_1_square_8.hasClass('o') && game_1_square_9.hasClass('o') )  )
		 			{
		 				
		 				if(game_1_winner == null){
		 					game_1_winner = 'O';
		 				}
		 				o_wins = 1;
					}
				}
				else {
					turns++;
			
					if( (game_1_square_1.hasClass('x') && game_1_square_2.hasClass('x') && game_1_square_3.hasClass('x') ) ||
					(game_1_square_1.hasClass('x') && game_1_square_4.hasClass('x') && game_1_square_7.hasClass('x') ) ||
					(game_1_square_1.hasClass('x') && game_1_square_5.hasClass('x') && game_1_square_9.hasClass('x') ) ||
					(game_1_square_2.hasClass('x') && game_1_square_5.hasClass('x') && game_1_square_8.hasClass('x') ) ||
					(game_1_square_3.hasClass('x') && game_1_square_6.hasClass('x') && game_1_square_9.hasClass('x') ) ||
					(game_1_square_3.hasClass('x') && game_1_square_5.hasClass('x') && game_1_square_7.hasClass('x') ) ||
					(game_1_square_4.hasClass('x') && game_1_square_5.hasClass('x') && game_1_square_6.hasClass('x') ) ||
					(game_1_square_7.hasClass('x') && game_1_square_8.hasClass('x') && game_1_square_9.hasClass('x') ) ) 
		 			{
		 				
		 				if(game_1_winner == null){
		 					game_1_winner = 'X';
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