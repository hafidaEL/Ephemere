var app = angular.module('myApp');


app.controller('reservationController', function($scope) {
        $scope.today = new Date();
        $scope.nbPersonnes = 2;
        $scope.heure = "12h30" ;
        $scope.envoi = false;

    });
