/**
 * 
 */

var teamApp = angular.module('myTeamApp',[])
.controller('teamCtrl',['$scope', function 
                        ($scope) {
	$scope.pageTitle = "Team generator";
	$scope.people = [];
	$scope.teams = [];
	$scope.add = function(name) {
		$scope.people.push(name);
		$scope.newName = "";
		console.log($scope);
	};
	$scope.remove = function(index) {
		$scope.people.splice(index,1);
	};
	$scope.generateTeams = function(teamNumber) {
		$scope.resetTeams();
		//var shuffled = $scope.shuffle(angular.copy($scope.people));
		var shuffled = angular.copy($scope.people);
		$scope.teams = $scope.chunk(shuffled,teamNumber);
		console.log($scope.teams);
	};
	$scope.resetTeams = function() {
		$scope.teams = [];
	};
	$scope.chunk = function (arr, size) {
		  var newArr = [];
		  //for (var i=0; i<arr.length; i+=size) {
		    //newArr.push(arr.slice(i, i+size));
		  //}
		  var indDebut = 0;
		  var indLen = arr.length / size;
		  for (var i=0; i<size; i++) {
			  newArr.push(arr.slice(indDebut, indDebut + indLen));
			  indDebut = indDebut + indLen;
		  };
		  return newArr;
		  
		};
}]); 
