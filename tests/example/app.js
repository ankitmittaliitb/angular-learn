var app = angular.module('exampleApp', ['ngResource']);

app.controller('mainController', function($scope) {
	$scope.test = 'Hello world';
});

app.factory('exampleService', function(){

	var service = {
		getData : function(){
			return  {
				id: 1,
				username: 'ankitml',
				role: 'student'
			};
		}
	};

	return service;
});
