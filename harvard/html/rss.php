<!DOCTYPE html>
<html>
	<head>
		<title>My RSS Reader</title>
	</head>
	<body>
		<h1>New York Times Technology</h1>
		<ul>
			<?php
				$dom = simplexml_load_file("http://feeds.nytimes.com/nyt/rss/Technology");
				foreach ($dom->channel->item as $item)
				{
					print "<li>";
					print "<a href='{$item->link}'>";
					print $item->description;
					print "</a>";
					print "</li>";
				}
			?>
		</ul>
	</body>
</html>