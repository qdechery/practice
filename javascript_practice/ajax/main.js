$(function() {

	let $orders = $('#orders'),
		$name = $('#name'),
		$drink = $('#drink');

	$.ajax({
		type: 'GET',
		url: 'orders',
		success: function(orders) {
			$.each(orders, function(i, order){
				$orders.append('<li>name: '+ order.name +', drink: ' + order.drink + '</li>')
			});
		},
		error: function() {
			alert('error loading orders');
		}
	});

	$('#add-order').on('click', function() {
		var order = {
			name: $name.val(),
			drink: $drink.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'orders',
			data: order,
			success: function(newOrder) {
				$orders.append('<li>name: ' + newOrder.name + ', drink: ' + newOrder.drink + '</li>');

			},
			error: function() {
				alert('error saving order');
			}
		})
	});
});