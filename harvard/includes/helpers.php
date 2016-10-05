<?php

/**
*Renders template.
*
* @param array $data
*/
function render($template, $data = array())
{
	$path = $template . '.php';
	if (file_exists($path))
	{
		extract($data);
		require($path);
	}
}

/**
*Renders header.
*
* #param array $data
*/
function renderHeader($data = array())
{
	extract($data);
	require('header.php');
}

?>