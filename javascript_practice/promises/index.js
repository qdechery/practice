var fetch = require('./fetch.js');
var fs = require('fs');



//https://www.youtube.com/watch?v=Ads1A7pn2LI

// var promise = fetch('bears.txt');

// promise.then(function(bears){
// 		console.log(bears);
// 		return fetch('fish.txt')
// }).then(function(fish){
// 		console.log(fish)
// }).catch(function(err) {
// 	console.error('WE GOT ERROR', err)
// })

// Promise.all([
// 	fetch('bears.txt'),
// 	fetch('fish.txt')
// ]).then(function(values) {
// 	var bears = values[0];
// 	var fish = values[1];
// 	console.log(bears, fish);
// })


// var promise = new Promise(function(resolve, reject) {
// 	// reject(new Error('uh oh'))
// 		resolve('all good')
// });

// promise.then(function(result) {
// 	console.log('was it good?', result)
// }).catch(function(err) {
// 	console.error('ERR', err)
// })




//https://www.youtube.com/watch?v=qN0dkXj7jc0

// function getBears(filepath, done) {
// 	fs.readFile(filepath, function(err, bears) {
// 		if (err) return done(err)

// 		fs.readFile('bears.dictionary', function(err, dict) {
// 			if(err) return done(err)

// 			compareBears(bears, dict)
// 		})
// 	})

// 	function compareBears(bears, dict) {
// 		dict = dict.toString().split('\n')
// 		bears = bears.toString().split('\n').filter(function(bear){
// 			return dict.indexOf(bear) !== -1
// 		})
// 		done(null, bears)
// 	}
// }

// getBears('bears.txt', function(err, bears) {
// 	console.log(bears) 
// })


//@youtube vid above around min 9
var bears = ['grizzly', 'polar', 'brown'];
var images = [];

function loadBears() {
	var bear = bears.shift()
	if (!bear) {
		console.log('All bears are done', images)
		return
	}
	var img = new Image()
	img.onload = function(){
		loadBears()
	}
	img.src = bear + '.jpg'
	images.push(img)
}

loadBears()

// var count = bears.length;

// bears = bears.map(function(bear){
// 	var img = new Image();
// 	img.onload = function() {
// 		next()
// 	}
// 	img.src = bear + '.jpg'
// 	return img
// })

// function next(){
// 	count--
// 	if (count < 1) {
// 		bears.forEach(function(bear){
// 			console.log(bear.width)
// 			document.body.appendChild(bear)
// 		});
// 	}
// }