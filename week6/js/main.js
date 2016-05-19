// items are created using the POST method. below is an example form and the code that sets up the handler to submit the data:

$('#create-submit').off( );
$('#create-submit').on( 'click', function ( evt ) {
	
	var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
	var collection= 'swolfe';// my collection
	var movie = $('#create-movie').val();
	var year = $('#create-year').val();
	
	evt.preventDefault ();
	
	$.ajax( baseUrl + collection,		 
	{
		method: 'POST',
		data: {
						movie: movie,
						year: year
					},
		
		success: logCreateResult,
		error: logAgaxError
		
	});
	
});
	
	function logCreateResult ( data ) {
		console.log( 'Data Received:', data );
	}
	
	function logAgaxError ( jqXHR, textStatus, errorThrown) {
		console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
	}
	
//READ
								
// items are read using the GET method. As mentioned earlier, there are two forms of reading: a list or a single item.
	
	/*
	
	$.ajax( baseUrl + collection,
			 {
					method: 'GET',
					success: logListResult,
					error: logAgaxError
			});
	

	function logListResult ( data ) {
		console.log( 'Data received:', data);
	}
	
	function logCreateResult( data ) {
		console.log( 'Data received:', data );
	}

	function logAgaxError ( jqXHR, textStatus, errorThrown) {
		console.log( 'AJAX error. Status:', textStatus, 'error:');
	}
	
}
											
//
											
$('#read-submit').off( );
$('#read-submit').on( 'click', function ( evt ) {
	
	var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
	var collection= 'swolfe';// my collection
	var id = $('#read-id').val();
	
	evt.preventDefault ();
	
	$.ajax( baseUrl + collection + '/' + id,		 
	{
		method: 'GET',	
		success: logCreateResult,
		error: logAgaxerror
		
	});
	

	function logReadResult ( data ) {
		console.log( 'Data received:', data );
	}

	function logAgaxError ( jqXHR, textStatus, errorThrown) {
		console.log( 'AJAX error. Status:', textStatus, 'error:');
	}
	
}

//UPDATE 
										
$('#update-submit').off( );
$('#update-submit').on( 'click', function ( evt ) {
	
	var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
	var collection= 'swolfe';// my collection
	var id = $('#update-id').val();
	var name = $('#update-name').val();
	var age = $('#update-age').val();
	
	evt.preventDefault ();
	
	$.ajax( baseUrl + collection + '/' + id,		 
	{
		method: 'PUT',
		data: {
				name: name,
				age: age
		},
		
		success: logUpdateResult,
		error: logAgaxerror
	
});
	

	function logUpdateResult ( data ) {
		console.log( 'Data received:', data );
	}

	function logAgaxError ( jqXHR, textStatus, errorThrown) {
		console.log( 'AJAX error. Status:', textStatus, 'error:');
	}
	
}
	
//DELETE


$('#delete-submit').off( );
$('#delete-submit').on( 'click', function ( evt ) {
	
	var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
	var collection= 'swolfe';// my collection
	var id = $('#delete-id').val();
	
	evt.preventDefault ();
	
	$.ajax( baseUrl + collection + '/' + id,		 
	{
		method: 'DELETE',
		success: logUpdateResult,
		error: logAgaxerror
		
	});
	


	function logDeleteResult ( data ) {
		console.log( 'Data received:', data );
	}

	function logAgaxError ( jqXHR, textStatus, errorThrown) {
		console.log( 'AJAX error. Status:', textStatus, 'error:');
	}
	
}

*/
					

								
								
