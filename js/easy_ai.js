function easy_ai(game_num, player){
	var board = 'game'+game_num;
	var parsed = parse_game(board, player);
	if(check_win(parsed, game_num)){

	}
	else if(check_block(parsed, game_num)){

	}
	else if(check_fork(parsed, game_num)){

	}
	else if(check_block_fork(parsed, game_num)){

	}
	else if(check_center(parsed, game_num)){

	}
	else if(check_opposite_corner(parsed, game_num)){

	}
	else if(check_corner(parsed, game_num)){

	}
	else if(check_side(pared, game_num)){

	}
	globalTurns++;

}

function parse_game(game, player){
	var parsed = [];
	// 1 = already went there
	// 0 = opponent went there
	// 2 = available
	if(player == 1){
		for(var iter = 1; iter <= 9; iter++){
			if($('#' + game + 'square' + iter).hasClass('o')){
				parsed.push(1);
			}
			else if($('#' + game + 'square' + iter).hasClass('x')) {
				parsed.push(0);
			}
			else {
				parsed.push(2);
			}
		}
	}
	else if(player == 2) {
		for(var iter = 1; iter <= 9; iter++){
			if($('#' + game + 'square' + iter).hasClass('o')){
				
				parsed.push(0);
			}
			else if($('#' + game + 'square' + iter).hasClass('x')) {
				
				parsed.push(1);
			}
			else {
				parsed.push(2);
			}
		}
		
	}
	return parsed;

}

function check_win(game, game_num){
	//check if the ai can win. IE check if there are two of its things in a row
	//NOTE the array is indexed from 0, the board is indexed from 1

	//see if oppenent can win by playing square 3
	if( ( (game[0] == 1 && game[1] == 1) || (game[6] == 1 && game[4] == 1) || (game[5] == 1 && game[8] == 1)) && game[2] == 2) {
		alert("playing square 3 to win board " + game_num);
		play_square(3, game_num);
		return true;
	}
	//how to win playing square 1
	else if( ((game[2] == 1 && game[1] == 1) || (game[6] == 1 && game[3] == 1) || (game[4] == 1 && game[8] == 1) ) && game[0] == 2)  {
		alert("play square 1 to win board " + game_num);
		play_square(1, game_num);
		return true;
	}

	//check if win playing square 2
	else if( ((game[0] == 1 && game[2] == 1) || (game[7] == 1 && game[4] == 1) ) && game[1] == 2){
		alert("play square 2 to win board " + game_num);
		play_square(2, game_num);
		return true;
	}
	//check if square 4 will win
	else if( ((game[0] == 1 && game[6] == 1) || (game[5] == 1 && game[4] == 1) )&& game[3] == 2){
		alert("play square 4 to win board " + game_num);
		play_square(4, game_num);
		return true;
	}

	//check if win playing square 5
	else if ( ((game[0] == 1 && game[8] == 1) || (game[6] == 1 && game[2] == 1) || (game[5] == 1 && game[3] == 1) || (game[1] == 1 && game[7] == 1) ) && game[4] == 2) {
		alert("play square 5 to win board " + game_num);
		play_square(5, game_num);
		return true;
	}
	//check if square 6 will win
	else if(( (game[2] == 1 && game[8] == 1) || (game[3] == 1 && game[4] == 1) )&& game[5] == 2) {
		alert("play square 6 to win board " + game_num);
		play_square(6, game_num);
		return true;
	}

	//check if square 7 will win
	else if ( ((game[0] == 1 && game[3] == 1) || (game[7] == 1 && game[8] == 1) || (game[4] == 1 && game[2] == 1) ) && game[6] == 2){
		alert("play square 7 to win board " + game_num);
		play_square(7, game_num);
		return true;
	}

	//check if square 8 will win
	else if ( ((game[1] == 1 && game[4] == 1) || (game[6] == 1 && game[8] == 1) ) && game[7] == 2){
		alert("play square 8 to win board " + game_num);
		play_square(8, game_num);
		return true;
	}

	else if ( ((game[0] == 1 && game[4] == 1) || (game[7] == 1 && game[6] == 1) || (game[5] == 1 && game[2] == 1) ) && game[8] == 2){
		alert("play square 9 to win board " + game_num);
		play_square(9, game_num);
		return true;
	}

	return false;
}

function check_block(game, game_num){

	//see if oppenent can win playing square 3
	if( ( (game[0] == 0 && game[1] == 0) || (game[6] == 0 && game[4] == 0) || (game[5] == 0 && game[8] == 0)) && game[2] == 2) {
		alert("playing square 3 to block win " + game_num);
		play_square(3, game_num);
		return true;
	}
	//see if oppenent can win playing square 1
	else if( ((game[2] == 0 && game[1] == 0) || (game[6] == 0 && game[3] == 0) || (game[4] == 0 && game[8] == 0) ) && game[0] == 2)  {
		alert("play square 1 to block win " + game_num);
		play_square(1, game_num);
		return true;
	}

	//see if oppenent can win playing square 2
	else if( ((game[0] == 0 && game[2] == 0) || (game[7] == 0 && game[4] == 0) ) && game[1] == 2){
		alert("play square 2 to block win " + game_num);
		play_square(2, game_num);
		return true;
	}
	//see if oppenent can win 4 will win
	else if( ((game[0] == 0 && game[6] == 0) || (game[5] == 0 && game[4] == 0) )&& game[3] == 2){
		alert("play square 4 to block win " + game_num);
		play_square(4, game_num);
		return true;
	}

	//see if oppenent can win playing square 5
	else if ( ((game[0] == 0 && game[8] == 0) || (game[6] == 0 && game[2] == 0) || (game[5] == 0 && game[3] == 0) || (game[1] == 0 && game[7] == 0) ) && game[4] == 2) {
		alert("play square 5 to block win " + game_num);
		play_square(5, game_num);
		return true;
	}
	//see if oppenent can win at 
	else if(( (game[2] == 0 && game[8] == 0) || (game[3] == 0 && game[4] == 0) )&& game[5] == 2) {
		alert("play square 6 to block win " + game_num);
		play_square(6, game_num);
		return true;
	}

	//see if oppenent can win  at 7
	else if ( ((game[0] == 0 && game[3] == 0) || (game[7] == 0 && game[8] == 0) || (game[4] == 0 && game[2] == 0) ) && game[6] == 2){
		alert("play square 7 to block win " + game_num);
		play_square(7, game_num);
		return true;
	}

	//see if oppenent can win at 8
	else if ( ((game[1] == 0 && game[4] == 0) || (game[6] == 0 && game[8] == 0) ) && game[7] == 2){
		alert("play square 8 to block win " + game_num);
		play_square(8, game_num);
		return true;
	}

	else if ( ((game[0] == 0 && game[4] == 0) || (game[7] == 0 && game[6] == 0) || (game[5] == 0 && game[2] == 1) ) && game[8] == 2){
		alert("play square 9 to block win " + game_num);
		play_square(9, game_num);
		return true;
	}

	return false;
}

function check_fork(game, game_num){



	return false;
}

function check_block_fork(game, game_num){

	return false;
}

function check_center(game, game_num){

	if(game[4] == 2){
		play_square(5, game_num);
		return true;
	}

	return false;
}

function check_opposite_corner(game, game_num){
	if(game[0] == 0 && game[8] == 2){
		play_square(9, game_num);
		return true;
	}
	else if(game[8] == 0 && game[0] == 0){
		play_square(1, game_num);
		return true;
	}
	else if(game[2] == 0 && game[6] == 2){
		play_square(7, game_num);
		return true;
	}
	else if(game[2] == 2 && game[6] == 0){
		play_square(3, game_num);
		return true;
	}
	else {
		return false;
	}

}

function check_corner(game, game_num){
	if(game[0] == 2){
		play_square(1, game_num);
		return true;
	}
	else if(game[2] == 2){
		play_square(3, game_num);
		return true;
	}
	else if(game[6] == 2){
		play_square(6, game_num);
		return true;
	}
	else if(game[8] == 2){
		play_square(9, game_num);
		return true;
	}
	else{
		return false;
	}

	
}

function check_side(game, game_num){
	if(game[1] == 2){
		play_square(2, game_num);
		return true;
	}
	else if(game[3] == 2){
		play_square(4, game_num);
		return true;
	}
	else if(game[5] == 2){
		play_square(6, game_num);
		return true;
	}
	else if(game[7] == 2){
		play_square(8, game_num);
		return true;
	}
	else {
		return false;
	}

	
}
function play_square(square, game_num){
	if(computer_player == 1){
		var squareID = '#game'+ game_num + 'square'+square;
		$(squareID).addClass('o');
		$(squareID).addClass('disable');
		$(squareID).css("background-color", "rgba(0, 200, 0, 100)");

	}
	else {
		var squareID = '#game'+ game_num + 'square'+square;
		$(squareID).addClass('x');
		$(squareID).addClass('disable');
		$(squareID).css("background-color", "rgba(200, 0, 0, 100)");
	}
	find_next_game(square);
	
}