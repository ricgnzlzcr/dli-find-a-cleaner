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
	$scope.address = dataService.address;
});


/***** SERVICES *****/
app.service('dataService', function($http) {
	this.address = "";

	this.getData = function() {

		$.ajax({
		  type: 'GET',
		  url: 'http://www.dlionline.org/917869828',
		  dataType: 'json',
		  contentType: "application/json",
		  success: function(data) {
		  	console.log("SUCCESS");
		    console.log('Success', data);
		  },
		  error: function(data) {
		  	console.log("FAIL");
		    console.log('Error', data);
		  }
		});

		/*
		$http({
			method: 'JSONP',
			url: 'http://www.dlionline.org/917869828'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    var data = $.parseJSON(response.data)
		    console.log(data);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.error("There was an error getting the JSON data idiot");
		  }); */
	}
});

