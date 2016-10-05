angular.module('directoryApp', ['ngAnimate'])
	.controller('directoryController', function() {
		
		var dirList = this;
		
		dirList.toggle = false;
		
		dirList.list = [
			{name:'Scott', age: 29, img:'https://s3.amazonaws.com/iufaces/faces/twitter/brad_frost/128.jpg'}, 
			{name:'Ross', age: 31}, 
			{name:'Ben', age: 32},
			{name:'Courtney', age: 29}
		];
		
		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = null;
		};
	});