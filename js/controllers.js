"use strict";

function mainController($scope){
 	
	$scope.dataExercises = [];
	$scope.totalHours = 0;
	var idExercise = 0;

	$scope.addExercise = function () {
		idExercise ++;
		$scope.totalHours += Number($scope.input.tempo);
		$scope.dataExercises.push({
			id: idExercise,
			tempo: $scope.input.tempo,
	    	tipo: $scope.input.tipo, 
	    	data: $scope.input.data});
	};


	$scope.deleteExercise = function(objectExercise){
		$scope.dataExercises.splice($scope.dataExercises.indexOf(objectExercise), 1);		
	}





} 