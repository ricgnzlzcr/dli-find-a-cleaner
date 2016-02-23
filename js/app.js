'use strict'

console.log("Javascript loaded");

angular.module('findCleanerApp', [])
.controller('SearchCtrl', function($scope) {
	console.log("Module loaded");

	/*** Controller Properties ***/
	$scope.searchClicked = false;

	/*** Controller Methods ***/
	$scope.search = function() {
		$scope.searchClicked = true;
		console.log("Search button pressed");
	};
});