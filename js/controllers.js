"use strict";

function mainController($scope){

	$scope.dataExercises = [];
	$scope.totalHours = 0;
	var idExercise = 0;

	$scope.addExercise = function () {
		idExercise ++;
		$scope.totalHours += Number($scope.form.tempo);
		$scope.dataExercises.push({
			id: idExercise,
			tempo: $scope.form.tempo,
	    	tipo: $scope.form.tipo, 
	    	data: $scope.form.data});
	};


	$scope.deleteExercise = function(objectExercise){
		$scope.totalHours -= Number(objectExercise.tempo);
		$scope.dataExercises.splice($scope.dataExercises.indexOf(objectExercise), 1);		
	}

	$scope.sort = "";
	$scope.reverse = false;

	$scope.Order = function (typeorder) {

	    if ($scope.sort === typeorder){
	      $scope.reverse = !$scope.reverse;
	      return;
	    };

	    $scope.sort = typeorder;
	    $scope.reverse = false;

	};



} 