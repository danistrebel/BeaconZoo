angular.module('starter.controllers', [])


.controller('BeaconIndexController', function($scope, PetService) {
    
  $scope.searchBeacons = function() {
	var estimote = estimoteBeacons;
	
	estimote.startRangingBeaconsInRegion(function () {
	            setInterval(function () {
	                estimote.getBeacons(function (beacons) {
	                    console.log(beacons.length);
	                },  function(error) {
	        	console.log(error);
	        });
	            }, 1000);
	        },  function(error) {
	        	console.log(error);
	        });
  }
  
  $scope.beaconAPI = "loading..";
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
