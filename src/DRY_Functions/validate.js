/*
 USER INPUT VALIDATION
 - Check the type of input ('RATING', 'COMMENT', or 'FLAG')
 - Returns FALSE if invalid and TRUE if valid
*/
function validate(input, type) {
	console.log( 'in DRY validate' );
	let message1 = 'Please enter a number in the range 1 - 5.';
	/*
	if input type is a number rating
	- Checks if input is null
	- Checks if input is in range 1-5
	*/
	if ( type === 'RATING' ) {
		// if null
		if ( input === null ) {
			alert( message1 );
			return false;
		} // if less than 1 or greater than 5
		else if ( input < 1 || input > 5 ) {
			alert( message1 );
			return false;
		} // if input passed validation
		else {
			console.log( 'User input is valid' );
			return true;
		}
	}
	/*
	if input type is a string comment
	- Checks if input is empty string
	*/
	if ( type === 'COMMENT' ) {
		if ( input === '' ) {
			return false;
		}
	}
	// TODO: write validation for FLAG type
}

export default ( validate );

