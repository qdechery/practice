var list = [2, 6, 5, 1];

function bubble_sort(list) {
	var swapped;
	do {
		swapped = false;
		for (var i=0; i < list.length-1; i++){
			if(list[i] > list[i+1]) {
				var temp = list[i];
				list[i] = list[i+1];
				list[i+1] = temp;
				swapped = true;
				console.log("swapped " + list[i] + " with " + list[i+1]);
			}
		}
	} while (swapped);
}

bubble_sort(list);
console.log(list)