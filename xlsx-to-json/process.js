$(document).ready(function(){

	showList();
    searchBar();
    
    // ajaxSearch();
    //end ready function 
});

function showList() {
	 $("#show-records").click(function(){
		$.getJSON("quarterly_call_october.json", function(data){
		    var json = data;
		    var html="<table class='specialists'>"
		    for(var i = 0; i < json.length; i++) {
			    var obj = json[i],
			    	tableFormat = "</td><td>";
				
		            html+= "<tr class=" + obj.FIELD1 + "><td class=1>" + 
		                obj.FIELD1 + tableFormat + 
		                obj.FIELD2 + tableFormat + 
		                obj.FIELD3 + tableFormat + 
		                obj.FIELD4 + tableFormat + 
		                obj.FIELD5 + tableFormat + 
		                obj.FIELD6 + tableFormat + 
		                obj.FIELD7 + tableFormat + 
		                obj.FIELD8 + "</td></tr>";

		        }

		         html+= '</table>';
		        $("#show-list").html(html);
			//end getJSON inner function
		});
		//end click function
    });
	 //end showList()
};



function searchBar() {
	$('#search').keyup(function() {

		// console.log($("td:first-child").html.length);
		var searchEntry = $(this).val().toLowerCase();
		
		$("td:first-child").each(function(){
			var html = "";
			if($(this).parent().hasClass().length > 0) {
				console.log($(this));
				// html += $("#search_results").append('<li>' + 
				// 	$(this).html() + '</li>');
			} 
		});
	})
};

// 	//AJAX getJSON
// 	$.getJSON("quarterly_call_october.json", function(data){
// 		//gathering json Data, sticking it into var json
// 		var json = data;
// 		for(var i = 0; i < json.length; i++) {
// 			//putting the json objects into var obj
// 			var obj = json[i];
// 			function contains(text_one, text_two) {
// 				if (text_one.indexOf(text_two) != -1)
// 					return true;
// 			}
// 			//whenever anything is entered into search bar...
// 			$('#search').keyup($.debounce(onKeyUp, 1000),function(obj) {
// 				//grab the search bar content values and...
// 				var searchEntry = $(this).val().toLowerCase();
							
// 				$(".1").each(function(json) {
// 					$(this).innerHTML.filter(json, function(searchEntry) {
// 						var searchResult = searchResult + searchEntry;
// 						return searchResult
// 					});
//     				$('#show-list').replaceWith(searchResult)
//     			})
//     		})
// 		}
// 	});
// };

// function ajaxSearch() {
// 	$ajax({
// 		method: 'POST',
// 		url: 'quarterly_call_october.json',
// 		dataType: 'json',
// 		cache: true,
// 		success: function(data) {
// 			alert(data);
// 		}
// 	});
// };


//Standard getJSON
	// $.getJSON("quarterly_call_october.json", function(data) {
	// 	console.log(data);
	// })

// console.log(obj.FIELD1);



//Failed attempt
	// $("#filter").keyup(function(json, obj){
	// 	var filter = $(this).val(), 
	// 		count = 0;

	// 	$.getJSON("quarterly_call_october.json", function(data){
	// 	    var json = data; 
	// 	});

	// 	for(var i = 0; i < json.length; i++) {
	// 		    var obj = json[i];
	// 		}  

	// 	$(json.obj.FIELD1).each(function(){	 
	// 		if ($(this).text().("#filter:contains('filter')")) {
	// 			$(this).fadeOut();
	// 		} else {
	// 			$(this).show();
	// 			count++;
	// 		}
	// 	});

	// 	var numberItems = count;
	// 	$("#search-count").text("Results : "+count+" Specialists");
	// });