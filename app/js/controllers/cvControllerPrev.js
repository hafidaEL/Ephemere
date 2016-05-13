var app = angular.module('myApp');


app.controller('cvControllerPrev', function($scope, prevMonth) {
    $scope.today = new Date();
	$scope.numChef = 0;
    $scope.afficher = false ;

    $scope.selectChef = function(numChef) {

    	$scope.afficher = true ;
    	$scope.numChef = numChef ;

    } ;

  $scope.deselectChef = function(numChef) {

  		console.log("chef "+numChef + "deselectionné") ;
    	$scope.afficher = false ;

    } ;

// gestion des données du mois précédent
    prevMonth.prevMonth().then(function(data) {
        $scope.chefs = data;
       // console.log("chef " + $scope.chefs);
    }).catch(function() {
        $scope.error = 'erreur lors de la lecture du fichier json du mois précédent';
    });

});
