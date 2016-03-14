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
	$scope.address = "";

	/*** Controller Methods ***/
	$scope.searchAddress = function() {
		if ($scope.address !== "") {
			dataService.address = $scope.address;
			$location.path('/results');
		}
	};

	$scope.printJSON = function() {
		dataService.getData();
	}
});

app.controller('resultsController', function($scope, dataService) {
	console.log("resultsController loaded");	
	/*** Controller Properties ***/
	$scope.address = dataService.address;
	$scope.cleanerList = appData;

	/*** Controller Methods ***/
	$scope.capCred = function(phrase) {
		//Method used to appropriately format credentials. CPW, CPD
		//should be all caps. Everything else should be just first
		//letter capitalized
		if (phrase.length === 3) return phrase.toUpperCase();
		var words = phrase.split(" ");
		var capWordsArray = [];
		for (var i in words) {
			capWordsArray.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
		}
		return capWordsArray.join(" ");
	} 
});



/***** SERVICES *****/
app.service('dataService', function($http) {
	this.address = "";

});


