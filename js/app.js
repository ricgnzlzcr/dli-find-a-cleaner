'use strict'

var app = angular.module('findCleanerApp', ['ngRoute']);


/***** ROUTES *****/
app.config(function($routeProvider) {
	$routeProvider

	//Homepage
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	//Results Page
	.when('/results', {
		templateUrl: 'pages/results.html',
		controller: 'resultsController'
	})
});


/***** CONTROLLERS *****/

app.controller('mainController', function($scope, $location, dataService) {
	console.log("Main Controller loaded");

	/*** Controller Properties ***/
	$scope.searchClicked = false;
	$scope.searchResultsVisible = false;
	$scope.address = "";
	$scope.message = "This is the homepage";

	/*** Controller Methods ***/
	$scope.loadSearchView = function() {
		console.log("Search button pressed");

		if ($scope.address !== "") {
			$scope.searchClicked = true;
			console.log("Searching for cleaners in " + $scope.address);
			//dataService.address = $scope.address;
		}
	};

	$scope.searchAddress = function() {
		dataService.address = $scope.address;
		$location.path('/results');
	};
});

app.controller('resultsController', function($scope, dataService) {
	$scope.message = "Butthole";
	$scope.address = dataService.address;
});


/***** SERVICES *****/
app.service('dataService', function($http) {
	this.address = "";
});