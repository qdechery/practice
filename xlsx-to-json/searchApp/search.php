<?php

if (isset($_POST['search_term'])) {
	$search_term = htmlspecialchars($_POST['search_term']);

	if (!empty($search_term)) {

		$search = 'Macnhester';
		//$search =  mysql_query("SELECT 'place', 'description' FROM 'places' WHERE 'place' LIKE '%search_terms%'");
		$result_count =1;

		$suffix = ($result_count != 1) ? 's' : '';
		echo '<p>Your search for <b>', $search_term, '</b> returned ', $result_count, ' result', $suffix, '</p>';

	}
}


?>