$( document ).ready(function() {
    

	$('#search').keyup(function() {
		//grab the search bar content values and...
		var search_term = $(this).val().toLowerCase();
		
		$.post('search.php', {search_term: search_term}, function(data) {
			//display results
			$('#search_results').html(data);
		});
	});
});